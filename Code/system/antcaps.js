module.exports.run = async (client, message, args) => {    
    if (message.author.bot) return;

    const list = require('../list/letras.json')
    const length = message.content.length
    const res = length / 2
    let account = 0
    let accountlist = 0

    for(let i = 1;i <= list.account;i++){
        const li = "l" + i
        const res = list[li]

        if(message.content.toLowerCase().search(res) == -1){
            accountlist++
        }
    }

    if(accountlist >= list.account){
        return;
    }else{
        for(let c = 1;c <= length - 1;c++){
            if(message.content.length != 0 && message.content.search("<@") != 0){
                if(message.content[c] == message.content[c].toUpperCase()){
                    account++
                }else{}    
            }
        }

        if(account >= res){
            message.delete().catch(O_o => {})
            return message.reply(`Nos não gostamos de capslock dentro de nossos servidores`)
            console.log(`Caps detected`)
        }    
    }
    /*if(message.content == message.content.toUpperCase() && message.content.length != 0 && message.content.length != 22){
        simplecaps = true
        
        message.delete().catch(O_o => {})
        return message.reply(`Nos não gostamos de capslock dentro de nossos servidores`)
    }*/
}
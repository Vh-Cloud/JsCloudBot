module.exports.run = async (client, message, args) => {
    const msg = message.content.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const length = message.content.length
    const config = require('./config.json')

    if (message.author.bot && config.botiguinore == true) return;

    const list = require('./letras.json')
    const res = length / 2
    let account = 0
    let accountlist = 0

    if(length <= config.minimo){
        return;
    }else{}

    for(let i = 1;i <= list.account;i++){
        const li = "l" + i
        const res = list[li]

        if(msg.toLowerCase().search(res) == -1){
            accountlist++
        }
    }

    if(accountlist >= list.account){
        return;
    }else{
        for(let c = 1;c <= length - 1;c++){
            if(length != 0 && msg.search("<@") != 0){
                if(msg[c] == msg[c].toUpperCase()){
                    account++
                }else{}    
            }
        }

        if(account >= res){
            message.delete().catch(O_o => {})
            console.log(`Caps detected`)
            return message.reply(`Nos não gostamos de capslock dentro de nossos servidores`)
        }else{} 
    }
    /*if(message.content == message.content.toUpperCase() && message.content.length != 0 && message.content.length != 22){
        simplecaps = true
        
        message.delete().catch(O_o => {})
        return message.reply(`Nos não gostamos de capslock dentro de nossos servidores`)
    }*/
}
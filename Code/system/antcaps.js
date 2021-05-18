module.exports.run = async (client, message, args) => {    
    if (message.author.bot) return;

    const length = message.content.length
    let account = 0

    for(let c = 1;c <= length - 1;c++){
        if(message.content[c] == message.content[c].toUpperCase()&&message.content[c].toUpperCase() != "K"){
            account++
        }else{}
    }

    if(account >= length / 2){
        message.delete().catch(O_o => {})
        return message.reply(`Nos não gostamos de capslock dentro de nossos servidores`)
        console.log(`Caps detected`)
    }

    /*if(message.content == message.content.toUpperCase() && message.content.length != 0 && message.content.length != 22){
        simplecaps = true
        
        message.delete().catch(O_o => {})
        return message.reply(`Nos não gostamos de capslock dentro de nossos servidores`)
    }*/
}
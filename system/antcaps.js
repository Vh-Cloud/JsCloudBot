module.exports.run = async (client, message, args) => {
    if(message.content == message.content.toUpperCase() && message.content.length != 0 && message.content.length != 22){
        message.delete().catch(O_o => {})
        return message.reply(`Nos não gostamos de capslock dentro de nossos servidores`)
    }
}

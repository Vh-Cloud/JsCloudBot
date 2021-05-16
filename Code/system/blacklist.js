module.exports.run = async (client, message) => {
    if (message.author.id == 842899922160058388) return;

    const args = message.content.trim().split(/ +/g);
    const blacklist = require("../list/blacklist.json")

    for(let i = 1;i <= blacklist.account;i++){
        const li = "l" + i 
        const res = blacklist[li]

        if(message.content.toUpperCase().search(res) != -1){
            console.log('Mensagem inapropriada!')

            message.delete().catch(O_o => {});
            return message.reply(`Você usou uma palavra inapropriada para nosso vocabulario`)
        }
    }
}
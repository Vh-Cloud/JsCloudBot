const Discord = require('discord.js');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('./list/banedlist.json')
const banedlist = low(adapter)

const config = require("../config.json")
const { prefix } = require("../config.json")

const command = "botunban"

/*----------------------------------------------------*/

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  let motivo = args.join(' ')

    if (message.author.id != ('668686483858784272')) return message.reply('Você não é o proprietario deste bot')
    if(banedlist.get("Baneds").find({id: user.id}).value().tag == undefined) return message.reply(`Você já baniu este usuario`)
    if(!args[0])return message.reply('Mencione um usario valido')
    if(!args[1])return message.reply('De um motivo valido')
        banedlist.get('Baneds')
        .remove({id: user.id}).write()
      message.reply(`o usario ${user} foi desbanido e agora pode usar os comandos do bot normalmente\n **Motivo:** ${motivo}`)

  console.log(`O usuario ${message.author.tag} usou o comando ${command}`)
};
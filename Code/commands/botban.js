Discord = require("discord.js");

const config = require("../config.json")
const { prefix } = require("../config.json")

const command = "botban"

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('./list/banedlist.json')
const banedlist = low(adapter)

/*----------------------------------------------------*/

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  let motivo = args.join(' ')

    if (message.author.id != ('668686483858784272')) return message.reply('Você não é o proprietario deste bot')
    if(!args[0])return message.reply('Mencione um usario valido')
    if(!args[1])return message.reply('De um motivo valido')
        banedlist.get('Baneds')
        .push({
          id: user.id,
          tag: user.tag,
          motivo: message.content, 
          ban: "true"
        }).write()
      message.reply(`o usario ${user} foi banido e não pode mais usar nenhum comando deste bot\n **Motivo:** ${motivo}`)

  console.log(`O usuario ${message.author.tag} usou o comando ${command}`)
};
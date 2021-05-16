Discord = require("discord.js");

const config = require("../config.json")
const { prefix } = require("../config.json")

const command = "say"

/*----------------------------------------------------*/

module.exports.run = async (client, message, args) => {
  const c = "`"

  if(!message.member.hasPermission('MANAGE_MESSAGES')){
    return message.reply(`Você não tem **Permissão** Para executar o comando ${c}${command}${c}`)
  } 

  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);

  console.log(`O usuario ${message.author.tag} usou o comando ${command}`)
};
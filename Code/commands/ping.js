Discord = require("discord.js");

const config = require("../config.json")
const { prefix } = require("../config.json")

const command = "ping"

/*----------------------------------------------------*/

module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');

  m.edit(`:ping_pong: **| Pong!**\nLatĂȘncia do Server: **${m.createdTimestamp - message.createdTimestamp}ms.**\nLatĂȘncia da API: **${Math.round(client.ws.ping)}ms**`);

  console.log(`O usuario ${message.author.tag} usou o comando ${command}`)
};

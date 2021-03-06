Discord = require("discord.js");

const config = require("../config.json")
const { prefix } = require("../config.json")

const command = "botinfo"

/*----------------------------------------------------*/

const c = '`'
const { botversion } = require("../config.json")

/*----------------------------------------------------*/

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  /*const Embed = new Discord.MessageEmbed()
    .setColor("#6272a4")
    .setTitle(`Botinfo`)
    .setDescription(`
      **<:dev:771577780369621003> Infornações detalhadas**

      **<a:Desenvolvedor:814624241277599764> Desenvolvedor:**  [VhCompany](https://github.com/VhCompany1)

      **<:vscode:810701033079963648> Empresa:** [VhCloud](https://github.com/vh-cloud)

      **🤖 Meu prefixo:**  ${c}${prefix}${c} 

      **<:discord_logo:799345418126884914> Bot Version:**  ${c}${botversion}${c}

      **💻 Host:**  ${c}Repl.it${c}

      **<a:a_BlueVerificMark:782393699786424350> Data de verificação:** ${c}?${c}

      **<:flechabaixo:805212916969373696> Data de criação:** ${c}15/05/2021${c}

      **<:JavaSkript:810275989451309056> Linguagem:** ${c}JavaScript${c}

      **<:Js:814001697416413206> Livraria:** ${c}Discord.js${c}

      **<:database:815991106461630495> DataBase:** ${c}LowDb${c}

      **<:bot:814883289651085344> Comandos:** ${c}7${c}

      **<:linguaguem:812125359704899596> Ver todos os comandos:** ${c}${prefix}help${c} 

      **⚙️ Ultima atualização:** a ${c}${hours.toFixed()}${c} horas ${c}${minutes.toFixed()}${c} minutos ${c}${seconds.toFixed()}${c} segundos. 

      ${client.users.cache.size} Usuarios estão me usando
      Eu estou em ${client.guilds.cache.size} servers
      Eu estou cuidadando de ${client.channels.cache.size} canais
      `)
      .setThumbnail('https://media.discordapp.net/attachments/825951876725866517/843280613040979978/Logo_preta_1.jpg?width=498&height=498')
      .setFooter('Codigo Oficial de VhCompany#8710/VhCloud')
      .setTimestamp();
    */

  const Embed = new Discord.MessageEmbed()
    .setColor("#6272a4")
    .setTitle(`Botinfo`)
    .setDescription(`
      **Infornações detalhadas**

      **Desenvolvedor:**  [VhCompany](https://github.com/VhCompany1)

      **Empresa:** [VhCloud](https://github.com/vh-cloud)

      **Meu prefixo:**  ${c}${prefix}${c} 

      **Bot Version:**  ${c}${botversion}${c}

      **Host:**  ${c}Repl.it${c}

      **Data de verificação:** ${c}?${c}

      **Data de criação:** ${c}15/05/2021${c}

      **Linguagem:** ${c}JavaScript${c}

      **Livraria:** ${c}Discord.js${c}

      **DataBase:** ${c}LowDb${c}

      **Comandos:** ${c}7${c}

      **Ver todos os comandos:** ${c}${prefix}help${c} 

      **⚙️ Ultima atualização:** a ${c}${hours.toFixed()}${c} horas ${c}${minutes.toFixed()}${c} minutos ${c}${seconds.toFixed()}${c} segundos. 

      ${client.users.cache.size} Usuarios estão me usando
      Eu estou em ${client.guilds.cache.size} servers
      Eu estou cuidadando de ${client.channels.cache.size} canais
      `)
      .setThumbnail('https://media.discordapp.net/attachments/825951876725866517/843280613040979978/Logo_preta_1.jpg?width=498&height=498')
      .setFooter('Codigo Oficial de VhCompany#8710/VhCloud')
      .setTimestamp();

  message.channel.send(Embed)
  console.log(`O usuario ${message.author.tag} usou o comando ${command}`)
};

Discord = require("discord.js");
const { prefix } = require("../config.json")

const c = '`'
const botVersion = 'BETA 1.8.2'
module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  const HelpEmbed = new Discord.MessageEmbed()
    .setColor("#7FFFD4")
    .setTitle(`InfoBot`)
    .setDescription(`
      **<:dev:771577780369621003> Infornações detalhadas**

      **<a:Desenvolvedor:814624241277599764> Desenvolvedor:**  ${c}VhCompany#9999${c}

      **<:vscode:810701033079963648> Empresa:** ${c}VhCloud${c}

      **🤖 Meu prefixo:**  ${c}#${c} 

      **<:discord_logo:799345418126884914> Bot Version:**  ${c}${botVersion}${c}

      **💻 Host:**  ${c}Repl.it${c}

      **<a:a_BlueVerificMark:782393699786424350> Data de verificação:** ${c}31/03/2021${c}

      **<:flechabaixo:805212916969373696> Data de criação:** ${c}13/02/2021${c}

      **<:JavaSkript:810275989451309056> Linguagem:** ${c}JavaScript${c}

      **<:Js:814001697416413206> Livraria:** ${c}Discord.js${c}

      **<:database:815991106461630495> DataBase:** ${c}LowDb${c}

      **<:bot:814883289651085344> Comandos:** ${c}155${c}

      **<:linguaguem:812125359704899596> Ver todos os comandos:** ${c}${prefix}help${c} 

      **⚙️ Ultima atualização:** a ${c}${hours.toFixed()}${c} horas ${c}${minutes.toFixed()}${c} minutos ${c}${seconds.toFixed()}${c} segundos. 

      ${client.users.cache.size} Usuarios estão me usando
      Eu estou em ${client.guilds.cache.size} servers
      Eu estou cuidadando de ${client.channels.cache.size} canais
      `)
      .setImage(`https://www.seekpng.com/png/detail/978-9786743_anime-popular-girl-otaku-anime-mujer-kawaii.png`)
      .setThumbnail('https://i.pinimg.com/originals/cc/de/aa/ccdeaa0aa1a833a352d5f5194181c95e.jpg')
      .setFooter('Codigo Oficial de VhCompany#9999/VhCloud')
      .setTimestamp();

  message.channel.send(HelpEmbed)
};

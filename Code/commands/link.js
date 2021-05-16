Discord = require("discord.js");

const config = require("../config.json")
const { prefix } = require("../config.json")

const command = "link"

/*----------------------------------------------------*/

module.exports.run = async (client, message, args) => {
  const c = '`'

  /*----------------------------------------------------*/

  const EmbedHome = new Discord.MessageEmbed()
    .setColor("#6272a4")
    .setTitle(`Link da pagina **Home**`)
    .setDescription(`
      esta aqui [link](https://vhcloud.com.br)
      `)
    .setThumbnail('https://media.discordapp.net/attachments/825951876725866517/843280613040979978/Logo_preta_1.jpg?width=498&height=498')
    .setImage("https://media.discordapp.net/attachments/825951876725866517/843282854175309824/home.png?width=723&height=498")
    .setFooter('Codigo Oficial de VhCompany#8710/VhCloud', message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp();

  const EmbedPlano = new Discord.MessageEmbed()
    .setColor("#6272a4")
    .setTitle(`Link da pagina **Planos**`)
    .setDescription(`
      esta aqui [link](https://vhcloud.com.br/planos)
      `)
    .setThumbnail('https://media.discordapp.net/attachments/825951876725866517/843280613040979978/Logo_preta_1.jpg?width=498&height=498')
    .setImage("https://media.discordapp.net/attachments/825951876725866517/843307727479373844/planos.png?width=668&height=498")
    .setFooter('Codigo Oficial de VhCompany#8710/VhCloud', message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp();

  const EmbedApis = new Discord.MessageEmbed()
    .setColor("#6272a4")
    .setTitle(`Link da pagina **Api's**`)
    .setDescription(`
      esta aqui [link](https://vhcloud.com.br/apis)
      `)
    .setThumbnail('https://media.discordapp.net/attachments/825951876725866517/843280613040979978/Logo_preta_1.jpg?width=498&height=498')
    .setImage("https://media.discordapp.net/attachments/825951876725866517/843311962381484054/apis.png?width=699&height=498")
    .setFooter('Codigo Oficial de VhCompany#8710/VhCloud', message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp();

  const EmbedForms = new Discord.MessageEmbed()
    .setColor("#6272a4")
    .setTitle(`Link da pagina **Forms**`)
    .setDescription(`
      esta aqui [link](https://vhcloud.com.br/forms)
      `)
    .setThumbnail('https://media.discordapp.net/attachments/825951876725866517/843280613040979978/Logo_preta_1.jpg?width=498&height=498')
    .setImage("https://media.discordapp.net/attachments/825951876725866517/843312878856568872/forms.png?width=768&height=252")
    .setFooter('Codigo Oficial de VhCompany#8710/VhCloud', message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp();

  const EmbedLogin = new Discord.MessageEmbed()
    .setColor("#6272a4")
    .setTitle(`Link da pagina **Login**`)
    .setDescription(`
      esta aqui [link](https://vhcloud.com.br/Login)
      `)
    .setThumbnail('https://media.discordapp.net/attachments/825951876725866517/843280613040979978/Logo_preta_1.jpg?width=498&height=498')
    .setImage("https://media.discordapp.net/attachments/825951876725866517/843313869589446656/signup-login.png?width=396&height=497")
    .setFooter('Codigo Oficial de VhCompany#8710/VhCloud', message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp();

  const EmbedDevs = new Discord.MessageEmbed()
    .setColor("#6272a4")
    .setTitle(`Link da pagina **Desenvolvedores**`)
    .setDescription(`
      esta aqui [link](https://vhcloud.com.br/Desenvolvedores)
      `)
    .setThumbnail('https://media.discordapp.net/attachments/825951876725866517/843280613040979978/Logo_preta_1.jpg?width=498&height=498')
    .setImage("https://media.discordapp.net/attachments/825951876725866517/843314592368427059/devs.png?width=314&height=498")
    .setFooter('Codigo Oficial de VhCompany#8710/VhCloud', message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp();

    const EmbedList = new Discord.MessageEmbed()
    .setColor("#6272a4")
    .setTitle(`Paginas disponiveis`)
    .setDescription(`
      aqui são algumas paginas do nosso site que você pode pedir o link usando ${c}${prefix}link (pagin)${c}
      `)
    .addField(`Lista:`, `Home, Planos, Apis, Forms, Login, Desenvolvedores.`)
    .setThumbnail('https://media.discordapp.net/attachments/825951876725866517/843280613040979978/Logo_preta_1.jpg?width=498&height=498')
    .setImage("https://media.discordapp.net/attachments/825951876725866517/843321481000648725/cubos.png")
    .setFooter('Codigo Oficial de VhCompany#8710/VhCloud', message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp();

  /*----------------------------------------------------*/

  let s = ""

  if(args[0] != undefined){
    s = args[0].toUpperCase()
  }

  let selecet = "null"

  switch(s){
    case "HOME":
      selecet = EmbedHome
      break;
    case "PLANOS":
      selecet = EmbedPlano
      break;
    case "APIS":
      selecet = EmbedApis
      break;
    case "FORMS":
      selecet = EmbedForms
      break;
    case "LOGIN":
      selecet = EmbedLogin
      break;
    case "DESENVOLVEDORES":
      selecet = EmbedDevs
      break;
    case "DEVS":
      selecet = EmbedDevs
      break;  
    case "LIST":
      selecet = EmbedList
      break;  
    case "":
      selecet = EmbedHome
      break
    default:
      return message.reply(`Você não selecionou uma pagina valida`)
  }

  message.channel.send(selecet)

  console.log(`O usuario ${message.author.tag} usou o comando ${command}`)
};

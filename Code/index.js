/*Index imports*/
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 
const t = require("./env.json")

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./list/banedlist.json')
const banedlist = low(adapter)

/*const antiFlood = require('./system/antflod.js');*/

/*------------------------------------------------------*/

/*BANED VERIFY 1*/
let user = "ainda nao passado"

client.on('message', message => {

user = banedlist.get("Baneds").find({id: message.author.id}).value()

if(user != undefined){
  user = "X"
}else{}

/*------------------------------------------------------*/

})

client.on('message', message => {
    const args = message.content
        .trim()
        .slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    /*RUN*/
    const antcaps = require(`./system/antcaps.js`);
    antcaps.run(client, message, args);

    const blacklist = require(`./system/blacklist.js`);
    blacklist.run(client, message, args);

    /*------------------------------------------------------*/

    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
        return;

    /*BANED VERIFY 2*/
    if (user == "X"){
      return message.reply(`Você esta banido do bot e por isso nao pode mais enviar nenhum comando`)
    }else{}

    /*------------------------------------------------------*/

    if (
        message.content.startsWith(`<@!${client.user.id}>`) ||
        message.content.startsWith(`<@${client.user.id}>`)
    )
        return;

    try {
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
        const c = '`'
    } catch (err) {
        console.error('<3:' + err); //para ver o erro use + err apos as aspas simples
    }

});

client.on("ready", () => {
})

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

});

//INDEX
/*client.on("guildMemberAdd", async (member) => { //wellcome da guild

  let channel_ = db.get(guild.id).find({id: "wellcomechat"}).value().channel
  let image_ = db.get(guild.id).find({id: "wellcomeimg"}).value().image
  let guild = await client.guilds.cache.get(guild.id);
  let channel = await client.channels.cache.get(channel_);
  if (guild != member.guild) {
    return console.log("um membro entrou em um servidor");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`<:AE_Uhul:749803547922661376> Boas-vindas <:AE_Uhul:749803547922661376>
      `)
      .setImage(image_)
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código oficial de VhCompany#9999/VhCloud")
      .setTimestamp();

    channel.send(embed);
  }
  });
*/


  client.on('ready', () => { //set status bot 
      let activities = [
              `Utilize ${config.prefix}help para obter ajuda`,
              `https://discord.gg/K8wPpPWSFe`,
              `${client.channels.cache.size} canais!`,
              `Desenvolvedor:VhCompany#9999`,
              `${client.guilds.cache.size} servidores`
          ],
          i = 0;
      setInterval(
          () =>
              client.user.setActivity(`${activities[i++ % activities.length]}`, {
                  type: 'PLAYING'
                  }), 
                  
    1000 * 60
      );
      client.user.setStatus('indle').catch(console.error);
      console.log('Bot ligado com sucesso');
  });

  console.log();

  client.login(t.TOKEN); 
# JsCloudBot
Discord-Bot feito com JavaScript para demonstração de serviços de bots da vhcloud 

Discord-Bot em Python: [Link](https://github.com/Vh-Cloud/PyCloudBot)

Prefix do Bot: //

Bot Version: 1.2.6

Desenvolvedor Oficial: [VhCompany](https://github.com/VhCompany1)

Arquivo principal: [Index](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/index.js)

### Lista de comandos:

- link([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/link.js)).<br>
![image](https://user-images.githubusercontent.com/79233369/118549937-886c9f80-b732-11eb-8a41-941115bf8cfa.png)
- ping([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/ping.js)).<br>
![image](https://user-images.githubusercontent.com/79233369/118550105-b5b94d80-b732-11eb-896f-5d0b95e0cf43.png)
- say([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/say.js)).<br>
![image](https://user-images.githubusercontent.com/79233369/118550302-e39e9200-b732-11eb-933a-229855642fb3.png)
- clear([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/clear.js)).<br>
![image](https://user-images.githubusercontent.com/79233369/118550376-fa44e900-b732-11eb-9346-dec7a579ccb6.png)
- botban([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/botban.js))<br>
![image](https://user-images.githubusercontent.com/79233369/118613482-2d1fc900-b795-11eb-8587-53ea36f6ae3d.png)
- botunban([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/botunban.js))<br>
![image](https://user-images.githubusercontent.com/79233369/118613482-2d1fc900-b795-11eb-8587-53ea36f6ae3d.png)
- botinfo([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/botinfo.js))<br>
![image](https://user-images.githubusercontent.com/79233369/118613720-66583900-b795-11eb-90fb-bdfc0f4ff4da.png)


### Sistemas:

- AntiCaps.
```js
  module.exports.run = async (client, message, args) => {    
    if (message.author.bot) return;

    const length = message.content.length
    let account = 0

    for(let c = 1;c <= length - 1;c++){
        if(message.content[c] == message.content[c].toUpperCase()&&message.content[c].toUpperCase() != "K"){
            account++
        }else{}
    }

    if(account >= length / 2){
        message.delete().catch(O_o => {})
        return message.reply(`Nos não gostamos de capslock dentro de nossos servidores`)
    }

    console.log(`Caps detected`)
}
```
- BlackList de palavras([lista](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/list/blacklist.json)).
```js
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
```

- AntiFlod.
```js
const Discord = require('discord.js');
const client = new Discord.Client(); 
const antiFlood = require('discord-antiflood');

/*NPM CREDIT: https://www.npmjs.com/package/discord-antiflood*/

console.log('iniciado')

let antiFloodAjustes = {
    debug: false,
    ignorarBots: true,
    usuariosIgnorados: [
        "842899922160058388", 
        "ID-USUARIO"
    ],
    servidoresIgnorados: [
        "ID-SERVIDOR", 
        "ID-SERVIDOR"
    ],
    canalesIgnorados: [
        "ID-CANAL", 
        "ID-CANAL"
    ],
    permisosIgnorados: [
        "MANAGE_MESSAGES", 
        "MANAGE_GUILD"
    ],
    infracciones: [
        {
            id: "WARN",
            mensajes: 6,
            tiempo: 4000,
            args: {
                nombre: "Warn",
                sas: "Fresca"
            }
        },
        {
            id: "MUTE",
            mensajes: 15,
            tiempo: 5000,
            args: {
                nombre: "Muteo"
            }
        },
        {
            id: "KICK",
            mensajes: 25,
            tiempo: 6000,
            args: {
                nombre: "Kick"
            }
        }
    ]
};

antiFlood(client, antiFloodAjustes); // Ative o módulo para que receba e emita eventos.

// Evento emitido quando os limites de um dos objetos da matriz de infrações são excedidos.

client.on('antiflood-infraccion', async (message, infraccion) => {
    
    if (infraccion.id === "WARN") { // Filtre as infrações verificando seu id para dar a sanção correspondente.

        await message.channel.send(`<@${message.author.id}> Você esta flodando por favor pare, se não sera punido`);
        console.log(`[${infraccion.args.nombre}] ${message.author.tag} Foi avisado por flodar no canal: #${message.channel.name}.`);

    }

    if (infraccion.id === "MUTE") {
        
        if (message.guild.id == message.guild.id) {

            /* Exemplo mudo, isso pode ser executado em qualquer
            servidor, mas só podemos colocar o id do papel mudo
            de um servidor. Isso pode ser consertado com uma base
            dados que obtêm a id da função mudo do servidor.*/

            if (message.guild.me.hasPermission('MANAGE_ROLES')) {

                await message.member.roles.add('843984501121089536');
                await message.channel.send(`<@${message.author.id}> Você foi mutado por não escutar o aviso.`);
                console.log(`[${infraccion.args.nombre}] ${message.author.tag} Foi mutado por flodar no canal: #${message.channel.name}.`);

            }

        }

    }
    if (infraccion.id === "KICK") {
        
        if (message.guild.me.hasPermission('KICK_MEMBERS')) { // Verifique se o bot tem permissão para chutar membros.

            await message.member.kick('Hacer flood');
            await message.channel.send(`<@${message.author.id}> Foi expulso por flod!.`);
            console.log(`[${infraccion.args.nombre}] ${message.author.tag} Foi expulsado por flodar no canal: #${message.channel.name}.`);

        }
    }

});
```

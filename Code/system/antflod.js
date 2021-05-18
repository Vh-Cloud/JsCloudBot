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


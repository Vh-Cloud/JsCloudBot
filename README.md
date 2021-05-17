# JsCloudBot
Discord-Bot feito com JavaScript para demonstração de serviços de bots da vhcloud 

Discord-Bot em Python: [Link](https://github.com/Vh-Cloud/PyCloudBot)

Prefix do Bot: //

Bot Version: 1.2.0

Desenvolvedor Oficial: [VhCompany](https://github.com/VhCompany1)

### Lista de comandos:

- link([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/link.js)).<br>
![image](https://user-images.githubusercontent.com/79233369/118549937-886c9f80-b732-11eb-8a41-941115bf8cfa.png)
- ping([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/ping.js)).<br>
![image](https://user-images.githubusercontent.com/79233369/118550105-b5b94d80-b732-11eb-896f-5d0b95e0cf43.png)
- say([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/say.js)).<br>
![image](https://user-images.githubusercontent.com/79233369/118550302-e39e9200-b732-11eb-933a-229855642fb3.png)
- clear([codigo](https://github.com/Vh-Cloud/JsCloudBot/blob/main/Code/commands/clear.js)).<br>
![image](https://user-images.githubusercontent.com/79233369/118550376-fa44e900-b732-11eb-9346-dec7a579ccb6.png)

### Sistemas:

- AntCaps.
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

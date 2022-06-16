const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login(process.env.token)

client.on("ready", () =>{
    console.log("Il bot ora è ONLINE")
})

client.on("messageCreate", (message)=>{
    if(message.content == "!help"){
        message.channel.send("lista dei comandi : ...,...,...")
    }

    if(message.content == "!social"){
        message.channel.send("youtube= tik tok= mail=")
    }

    if(message.content == "!nvtk"){
        var nvtk=new Discord.MessageEmbed()
            .setTitle("nuovo video su tik tok")
            .setDescription("vai su ww....")
            .setThumbnail("https://www.addlance.com/blog/wp-content/uploads/2021/10/tiktok-logo.png")  
        message.channel.send({embeds: [nvtk]})
    }

    if(message.content == "!compleanno"){
        var comple=new Discord.MessageEmbed()
            .setTitle(`oggi è il compleanno di ${message.author.username}`)
            .setDescription("auguri!!")
            .setThumbnail("https://i.etsystatic.com/22506180/r/il/b4a550/2836602875/il_794xN.2836602875_lt8v.jpg")  
        message.channel.send({embeds: [comple]})
    }
}) 

 
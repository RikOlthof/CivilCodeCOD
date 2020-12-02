const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    var categoryID = "775328582679003137"
    var staff = "768441696274350120"
    var person = message.author

    var channelname = "register for-" + message.author.username

    var ticket = false

    message.guild.channels.cache.foreach(channel => {
       
        if(channel.name.toLowerCase() === channelname.toLowerCase()){
            ticket = true
            return message.reply("Je hebt al een applicatie open staan").then(msg => msg.delete({timeout: 4000}))

        }
    })

    if(ticket) return
    
    var embed = new discord.MessageEmbed()
    .setTitle("Hallo" +message.author.username)
    .setColor("#00BFFF")
    .setFooter("Kanaal wordt aangemaakt.")

    message.channel.send(embed).then(msg => msg.delete({timeout: 4000}))

    message.guild.channels.create(channelName, {type: "text"}).then(
     (createdChannel) => {
       createdChannel.setParent(categoryID).then(
           (settedParent) => {

            settedParent.updateOverwrite(message.guild.roles.cache.find(role => role.name === "@everyone"),{
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
            })
            settedParent.updateOverwrite(message.author.id,{
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                CREATE_INSTANT_INVITES: false,
                READ_MESSAGES: true,
                ATTACH_FILES: true,
                ADD_REACTIONS: true,
                CONNECT: true,
                READ_MESSAGE_HISTORY: true
                })
                settedParent.updateOverwrite(message.guild.roles.cache.get(staff),{
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    READ_MESSAGES: true,
                    READ_MESSAGE_HISTORY: true
                    })

                  var embedParent = new discord.MessageEmbed()
                  .setTitle("Applicatie formulier voor" + message.author.username)  
                  .setColor("#00BFFF")
                  .setFooter("Leuk dat jij je wilt aanmelden bij Civil Code! \n We gaan je een paar vragen stellen om wat basis informatie van jou te verkrijgen")

                  var vraag1 = new discord.MessageEmbed()
                  .setTitle("Applicatie vraag 1")  
                  .setColor("#00BFFF")
                  .setFooter("Naam")

                  var vraag2 = new discord.MessageEmbed()
                  .setTitle("Applicatie vraag 2")  
                  .setColor("#00BFFF")
                  .setFooter("PC / XBOX / PS4?")

                  var vraag3 = new discord.MessageEmbed()
                  .setTitle("Applicatie vraag 3")  
                  .setColor("#00BFFF")
                  .setFooter("Leeftijd")

                  var vraag4 = new discord.MessageEmbed()
                  .setTitle("Applicatie vraag 4")  
                  .setColor("#00BFFF")
                  .setFooter("Activision id (voorbeeld: spitfire#12345)")

                  var vraag5 = new discord.MessageEmbed()
                  .setTitle("Applicatie vraag 5")  
                  .setColor("#00BFFF")
                  .setFooter("Battlenet/ Xbox live/ PSN account naam?")

                  var vraag6 = new discord.MessageEmbed()
                  .setTitle("Applicatie vraag 6")  
                  .setColor("#00BFFF")
                  .setFooter("Favoriete gamemode)")

                  var vraag7 = new discord.MessageEmbed()
                  .setTitle("Applicatie vraag 7")  
                  .setColor("#00BFFF")
                  .setFooter("Waarom wil jij bij onze clan?")

                  var vraag8 = new discord.MessageEmbed()
                  .setTitle("Applicatie vraag 8")  
                  .setColor("#00BFFF")
                  .setFooter("Stream je? zoja, je streamlink")

                  settedParent.send(message.author.id)
                  settedParent.send(embedParent)
                  settedParent.send(vraag1)

                  settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                      var antwoord1 = antwoord.first()
                      settedParent.send(vraag2)
                      settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                        var antwoord2 = antwoord.first()
                        settedParent.send(vraag3)
                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                            var antwoord3 = antwoord.first()
                            settedParent.send(vraag4)
                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                var antwoord4 = antwoord.first()
                                settedParent.send(vraag5)
                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                    var antwoord5 = antwoord.first()
                                    settedParent.send(vraag6)
                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                        var antwoord6 = antwoord.first()
                                        settedParent.send(vraag7)
                                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                            var antwoord7 = antwoord.first()
                                            settedParent.send(vraag8)
                                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                var antwoord8 = antwoord.first()

                                                var uitkomst = new discord.MessageEmbed
                                                .setTitle("Bedankt voor je registratie")
                                                .setColor("#00ff00")
                                                .setTimestamp()
                                                .set.Description(`**vraag 1:**\n ${antwoord1}\n\n **Vraag 2:**\n ${antwoord2}\n\n **vraag 3:**\n ${antwoord3}\n\n **vraag 4:**\n ${antwoord4}\n\n **vraag 5:**\n ${antwoord5}\n\n **vraag 6:**\n ${antwoord6}\n\n **vraag 7:**\n ${antwoord7}\n\n **vraag 8:**\n ${antwoord8}\n\n`)

                                                settedParent.bulkDelete(16).then(
                                                    settedParent.send(uitkomst)
                                                )
                                            })
                                        })
                  
                                    })
               
                                })
               
                            })
               
                        })
               
                    })
                })

                settedParent.send(`${perosn}, <@&${staff}>`).then(msg => msg.delete({timeout: 1000}))



                  




           }).catch(err => {
               message.channel.send("Er is iets mis gegaan")
           })
     })


}



module.exports.help = {
    name: "apply",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
    aliases: []
}
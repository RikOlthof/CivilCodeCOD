const Discord = require('discord.js');

const bot = new Discord.Client();
const winFile = require("./data/wins.json");
const fs = require("fs")
const talkedRecently = new Set();

 
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}!`);
});
 
bot.on("message", message => {
  const args = message.content.split(" ");
  if (message.author.id != bot.user.id && (message.content[0] === "a" || message.content.indexOf(bot.user.toString()) == 0)) {
    var cmdTxt = message.content.split(" ")[0].substring(2);
    var suffix = message.content.substring(cmdTxt.length + 2);
    if (message.content.indexOf(bot.user.toString()) == 0) {
      try {
        cmdTxt = message.content.split(" ")[1];
        suffix = message.content.substring(bot.user.toString().length + cmdTxt.length + 2);
      } catch (e) {
        message.channel.send("Yes?");
        return;
      }
    }
  }

  const taggedUser = message.mentions.users.first();
  if (message.content.includes(`ar!member`) && message.content.includes(`give`)) {
    if(message.channel.id === '753335140951785493'){
      if(message.member.roles.cache.has('766598175993626625') || message.member.roles.cache.has('747074821229248552') || message.member.roles.cache.has('732914909524000838')) {

    const taggedUser = message.mentions.users.first();

    //if (taggedUser.has(message.mentions.username)) {
     // message.channel.send("Cooldown 20 minutes");
      //message.delete();
     // return;
    //}
  
    //taggedUser.add(message.mentions.id);
    //setTimeout(() => {
      //taggedUser.delete(message.mentions.id);
   // }, 1);
  
		
	
    
      
      

    winCount(message);
    
  
    function winCount(message){
      
      var winCounter = Math.floor(Math.random() * 1) +1;
      var winUsername = message.mentions.username
      
      
  
      console.log(winCounter);
      
  
      
      message.channel.send(`Win counted for: ${taggedUser}`)
      

      var idUser = taggedUser.username;
      

      if(!winFile[idUser]){
        winFile[idUser] = {
          wins: 0,
          username: [idUser],
          

          
        }
        

      }
      winFile[idUser].wins += winCounter;

      var winUser = winFile[idUser].wins;
      var winUsername = winFile[idUser].username
      


      fs.writeFile("./data/wins.json", JSON.stringify(winFile), err => {
        if (err) console.log(err);
      })
    }

      
           
    }
    
    else{
      console.log('You cant use this command') 
    }
   } else{
        console.log('You cant use this command') 
  }
  
}
    
  if (message.content.includes(`ar!member`) && message.content.includes(`take`)) {
    if(message.channel.id === '753335140951785493'){
      if(message.member.roles.cache.has('766598175993626625') || message.member.roles.cache.has('747074821229248552') || message.member.roles.cache.has('732914909524000838')) {

    const taggedUser = message.mentions.users.first();

   

    winCount(message);
    
  
    function winCount(message){
      
      var winCounter = Math.floor(Math.random() * 1) -1;
      var winUsername = message.mentions.username
      
      
  
      console.log(winCounter);
      
  
      
      message.channel.send(`Win deleted for: ${taggedUser}`)
      

      var idUser = taggedUser.username;
      

      if(!winFile[idUser]){
        winFile[idUser] = {
          wins: 0,
          username: [idUser],
          

          
        }
        

      }
      winFile[idUser].wins += winCounter;

      var winUser = winFile[idUser].wins;
      var winUsername = winFile[idUser].username
      


      fs.writeFile("./data/wins.json", JSON.stringify(winFile), err => {
        if (err) console.log(err);
      })
    }

      
           
    }
    
    else{
      console.log('You cant use this command') 
    }
   } else{
        console.log('You cant use this command') 
  }
  
}

  
  if (message.content.includes(`ar!member`) && message.content.includes(`give`)) {
    if(message.channel.id === '715175365148147753'){
      if(message.member.roles.cache.has('768441696274350120') || message.member.roles.cache.has('768441696274350120') || message.member.roles.cache.has('768441696274350120')) {

    

    

    
    
  
    function winCount(message){
      
      var winCounter = Math.floor(Math.random() * 1) +1;
      var winUsername = message.mentions.username
      
      
  
      console.log(winCounter);
      
  
      
      message.channel.send(`Win counted for: ${taggedUser}`)
      

      var idUser = taggedUser.username;
      

      if(!winFile[idUser]){
        winFile[idUser] = {
          wins: 0,
          username: [idUser],
          

          
        }
        

      }
      winFile[idUser].wins += winCounter;

      var winUser = winFile[idUser].wins;
      var winUsername = winFile[idUser].username
      


      fs.writeFile("./data/wins.json", JSON.stringify(winFile), err => {
        if (err) console.log(err);
      })
    }

      
           
    }
    
    else{
      console.log('You cant use this command') 
    }
   } else{
        console.log('You cant use this command') 
  }
  
}

  
  
  
  
  
  var idUser = message.mentions.users.username;
    if(!winFile[idUser]){
      winFile[idUser] = {
        wins: 0,
        username: [idUser]

        
      }
    
    if (message.content.includes(`ar!stats`)) {
    var embedStats = new Discord.MessageEmbed()
    .setDescription("***Personal stats***")
    .addField('username', winFile[idUser].username, inline = true) 
    .addField('wins', winFile[idUser].wins, inline = true);

    

    message.channel.send(embedStats);
    console.log(embedStats)

    
    }


  }
  if (message.content.includes(`ar!top10`)) {
    fs.readFileSync("./data/wins.json", JSON.stringify[winFile])
    if(message.channel.id === '770626611619037224'){
    
    console.log(winFile)
    var messagesArray = Object.entries(winFile)
    .map(v =>  `Player: ***${v[1].username}*** \n Wins:  ${v[1].wins}`)
    .sort((a ,b) => b.split(" \n Wins: ")[1] - a.split(" \n Wins: ")[1]).splice(0,10);
    
    
    var embedLB = new Discord.MessageEmbed()
    .setTitle("***leaderboard***")
    .addField('Top 10 players', messagesArray)
    
    
    message.channel.send(embedLB)
    
    }
  
    else{
      console.log('You cant use this command') 
  
  }
  
  }
  
 
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;
    while (0 !== currentIndex) {
 
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
 
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
 
  if (cmdTxt === "test") {
    var arr = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10"];
    arr = shuffle(arr);
    var half_length = Math.ceil(arr.length / 2);
    var leftSide = arr.splice(0, half_length);
    message.channel.send(`Team 1 \n` + arr);
    message.channel.send(`Team 2 \n` + leftSide);
  }
 
  if (cmdTxt === "gf") {
    
    const reactionFilter = (reaction, user) => reaction.emoji.name === '✅';
    
    const embed = new Discord.MessageEmbed({
      title: "Gunfight",
      description: "React with ✅ to join this match ",
      fields: [{
        name: 'Participants (max 4)',
        value: 'none' 
      }]
    })
    message.channel.send(embed)
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 4,
            dispose: true
          });
          console.log(mReaction)
        
 
        collector.on('collect', r => {
          let embedLikeField = Object.assign({}, embed.fields[0]);
          embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n");
          const newEmbed = new Discord.MessageEmbed({
            title: embed.title,
            description: embed.description,
            fields: [embedLikeField]
          })
          r.message.edit(newEmbed)
          console.log(embedLikeField)
        })
 
        collector.on('remove', r => {
          let embedLikeField = Object.assign({}, embed.fields[0]);          
          embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n")||("none");
          const newEmbed = new Discord.MessageEmbed({
            title: embed.title,
            description: embed.description,
            fields: [embedLikeField]
          })
          r.message.edit(newEmbed)
          console.log(embedLikeField)
          
        })
 
        collector.on('end', r => {
          var arr = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`);
          arr = shuffle(arr);
          var half_length = Math.ceil(arr.length / 2);
          var leftSide = arr.splice(0, half_length);
          const embed1 = new Discord.MessageEmbed({
            title: embed.title,
            description: "Teams filled up",
            fields: [{
                name: 'Team 1',
                value: arr.join("\n"),
                inline: "true"
              },
              {
                name: 'Team 2',
                value: leftSide.join("\n"),
                inline: "true"
              }
            ]
          })
          message.channel.send(embed1)
          
        })
      })
  }
  if (cmdTxt === "ctdm") {
    
    const reactionFilter = (reaction, user) => reaction.emoji.name === '✅';
    
    const embed = new Discord.MessageEmbed({
      title: "Core Team Death Match",
      description: "React with ✅ to join this match ",
      fields: [{
        name: 'Participants (max 12)',
        value: 'none' 
        
      }]
     
    })
    message.channel.send(embed)
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 12,
            dispose: true
          });
          console.log(mReaction)
        
 
        collector.on('collect', r => {
          let embedLikeField = Object.assign({}, embed.fields[0]);
          embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n");
          const newEmbed = new Discord.MessageEmbed({
            title: embed.title,
            description: embed.description,
            fields: [embedLikeField]
          })
          r.message.edit(newEmbed)
          console.log(mReaction)
        })
 
        collector.on('remove', r => {
          let embedLikeField = Object.assign({}, embed.fields[0]);          
          embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n")||("none");
          const newEmbed = new Discord.MessageEmbed({
            title: embed.title,
            description: embed.description,
            fields: [embedLikeField]
          })
          r.message.edit(newEmbed)
          
          console.log(mReaction)
          
        })
 
        collector.on('end', r => {
          var arr = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`);
          arr = shuffle(arr);
          var half_length = Math.ceil(arr.length / 2);
          var leftSide = arr.splice(0, half_length);
          const embed1 = new Discord.MessageEmbed({
            title: embed.title,
            description: "Teams filled up",
            fields: [{
                name: 'Team 1',
                value: arr.join("\n"),
                inline: "true"
              },
              {
                name: 'Team 2',
                value: leftSide.join("\n"),
                inline: "true"
              }
            ]
          })
          message.channel.send(embed1)

        })
      })
  }
  if (cmdTxt === "cdltdm") {
    
    const reactionFilter = (reaction, user) => reaction.emoji.name === '✅';
    
    const embed = new Discord.MessageEmbed({
      title: "CDL Team Dead Match",
      description: "React with ✅ to join this match ",
      fields: [{
        name: 'Participants (max 10)',
        value: 'none' 
        
      }]
     
    })
    message.channel.send(embed)
      .then(msg => msg.react('✅'))
      .then(mReaction => {
        const collector = mReaction.message
          .createReactionCollector(reactionFilter, {
            max: 10,
            dispose: true
          });
          console.log(mReaction)
        
 
        collector.on('collect', r => {
          let embedLikeField = Object.assign({}, embed.fields[0]);
          embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n");
          const newEmbed = new Discord.MessageEmbed({
            title: embed.title,
            description: embed.description,
            fields: [embedLikeField]
          })
          r.message.edit(newEmbed)
          console.log(embedLikeField)
        })
 
        collector.on('remove', r => {
          let embedLikeField = Object.assign({}, embed.fields[0]);          
          embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n")||("none");
          const newEmbed = new Discord.MessageEmbed({
            title: embed.title,
            description: embed.description,
            fields: [embedLikeField]
          })
          r.message.edit(newEmbed)
          
          console.log(mReaction)
          
        })
 
        collector.on('end', r => {
          var arr = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`);
          arr = shuffle(arr);
          var half_length = Math.ceil(arr.length / 2);
          var leftSide = arr.splice(0, half_length);
          const embed1 = new Discord.MessageEmbed({
            title: embed.title,
            description: "Teams filled up",
            fields: [{
                name: 'Team 1',
                value: arr.join("\n"),
                inline: "true"
              },
              {
                name: 'Team 2',
                value: leftSide.join("\n"),
                inline: "true"
              }
            ]
          })
          message.channel.send(embed1)

        })
      })
    }
    if (cmdTxt === "csnd") {
    
      const reactionFilter = (reaction, user) => reaction.emoji.name === '✅';
      
      const embed = new Discord.MessageEmbed({
        title: "Core Search and Destroy",
        description: "React with ✅ to join this match ",
        fields: [{
          name: 'Participants (max 12)',
          value: 'none' 
          
        }]
       
      })
      message.channel.send(embed)
        .then(msg => msg.react('✅'))
        .then(mReaction => {
          const collector = mReaction.message
            .createReactionCollector(reactionFilter, {
              max: 12,
              dispose: true
            });
            console.log(mReaction)
          
   
          collector.on('collect', r => {
            let embedLikeField = Object.assign({}, embed.fields[0]);
            embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n");
            const newEmbed = new Discord.MessageEmbed({
              title: embed.title,
              description: embed.description,
              fields: [embedLikeField]
            })
            r.message.edit(newEmbed)
            console.log(embedLikeField)
          })
   
          collector.on('remove', r => {
            let embedLikeField = Object.assign({}, embed.fields[0]);          
            embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n")||("none");
            const newEmbed = new Discord.MessageEmbed({
              title: embed.title,
              description: embed.description,
              fields: [embedLikeField]
            })
            r.message.edit(newEmbed)
            
            console.log(mReaction)
            
          })
   
          collector.on('end', r => {
            var arr = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`);
            arr = shuffle(arr);
            var half_length = Math.ceil(arr.length / 2);
            var leftSide = arr.splice(0, half_length);
            const embed1 = new Discord.MessageEmbed({
              title: embed.title,
              description: "Teams filled up",
              fields: [{
                  name: 'Team 1',
                  value: arr.join("\n"),
                  inline: "true"
                },
                {
                  name: 'Team 2',
                  value: leftSide.join("\n"),
                  inline: "true"
                }
              ]
            })
            message.channel.send(embed1)
  
          })
        })
      }
      if (cmdTxt === "cdom") {
    
        const reactionFilter = (reaction, user) => reaction.emoji.name === '✅';
        
        const embed = new Discord.MessageEmbed({
          title: "Core Domination",
          description: "React with ✅ to join this match ",
          fields: [{
            name: 'Participants (max 12)',
            value: 'none' 
            
          }]
         
        })
        message.channel.send(embed)
          .then(msg => msg.react('✅'))
          .then(mReaction => {
            const collector = mReaction.message
              .createReactionCollector(reactionFilter, {
                max: 12,
                dispose: true
              });
              console.log(mReaction)
            
     
            collector.on('collect', r => {
              let embedLikeField = Object.assign({}, embed.fields[0]);
              embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n");
              const newEmbed = new Discord.MessageEmbed({
                title: embed.title,
                description: embed.description,
                fields: [embedLikeField]
              })
              r.message.edit(newEmbed)
              console.log(embedLikeField)
            })
     
            collector.on('remove', r => {
              let embedLikeField = Object.assign({}, embed.fields[0]);          
              embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n")||("none");;
              const newEmbed = new Discord.MessageEmbed({
                title: embed.title,
                description: embed.description,
                fields: [embedLikeField]
              })
              r.message.edit(newEmbed)
              
              console.log(mReaction)
              
            })
     
            collector.on('end', r => {
              var arr = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`);
              arr = shuffle(arr);
              var half_length = Math.ceil(arr.length / 2);
              var leftSide = arr.splice(0, half_length);
              const embed1 = new Discord.MessageEmbed({
                title: embed.title,
                description: "Teams filled up",
                fields: [{
                    name: 'Team 1',
                    value: arr.join("\n"),
                    inline: "true"
                  },
                  {
                    name: 'Team 2',
                    value: leftSide.join("\n"),
                    inline: "true"
                  }
                ]
              })
              message.channel.send(embed1)
    
            })
          })
        }
        if (cmdTxt === "wduo") {
    
          const reactionFilter = (reaction, user) => reaction.emoji.name === '✅';
          
          const embed = new Discord.MessageEmbed({
            title: "Warzone Duo's",
            description: "React with ✅ to join this match ",
            fields: [{
              name: 'Participants (max 2)',
              value: 'none' 
              
            }]
           
          })
          message.channel.send(embed)
            .then(msg => msg.react('✅'))
            .then(mReaction => {
              const collector = mReaction.message
                .createReactionCollector(reactionFilter, {
                  max: 2,
                  dispose: true
                });
                console.log(mReaction)
              
       
              collector.on('collect', r => {
                let embedLikeField = Object.assign({}, embed.fields[0]);
                embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n");
                const newEmbed = new Discord.MessageEmbed({
                  title: embed.title,
                  description: embed.description,
                  fields: [embedLikeField]
                })
                r.message.edit(newEmbed)
                console.log(embedLikeField)
              })
       
              collector.on('remove', r => {
                let embedLikeField = Object.assign({}, embed.fields[0]);          
                embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n")||("none");
                const newEmbed = new Discord.MessageEmbed({
                  title: embed.title,
                  description: embed.description,
                  fields: [embedLikeField]
                })
                r.message.edit(newEmbed)
                
                console.log(mReaction)
                
              })
       
              collector.on('end', r => {
                var arr = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`);
                
                
                
                const embed1 = new Discord.MessageEmbed({
                  title: embed.title,
                  description: "Team filled up",
                  fields: [{
                      name: 'Players:',
                      value: arr.join("\n"),
                      inline: "true"
                    },
                   
                    
                  ]
                })
                message.channel.send(embed1)
      
              })
            })
          }
          if (cmdTxt === "wtrio") {
    
            const reactionFilter = (reaction, user) => reaction.emoji.name === '✅';
            
            const embed = new Discord.MessageEmbed({
              title: "Warzone Trio's",
              description: "React with ✅ to join this match ",
              fields: [{
                name: 'Participants (max 3)',
                value: 'none' 
                
              }]
             
            })
            message.channel.send(embed)
              .then(msg => msg.react('✅'))
              .then(mReaction => {
                const collector = mReaction.message
                  .createReactionCollector(reactionFilter, {
                    max: 3,
                    dispose: true
                  });
                  console.log(mReaction)
                
         
                collector.on('collect', r => {
                  let embedLikeField = Object.assign({}, embed.fields[0]);
                  embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n");
                  const newEmbed = new Discord.MessageEmbed({
                    title: embed.title,
                    description: embed.description,
                    fields: [embedLikeField]
                  })
                  r.message.edit(newEmbed)
                  console.log(embedLikeField)
                })
         
                collector.on('remove', r => {
                  let embedLikeField = Object.assign({}, embed.fields[0]);          
                  embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n")||("none");
                  const newEmbed = new Discord.MessageEmbed({
                    title: embed.title,
                    description: embed.description,
                    fields: [embedLikeField]
                  })
                  r.message.edit(newEmbed)
                  
                  console.log(mReaction)
                  
                })
         
                collector.on('end', r => {
                  var arr = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`);
                  
                  
                  
                  const embed1 = new Discord.MessageEmbed({
                    title: embed.title,
                    description: "Team filled up",
                    fields: [{
                        name: 'Players:',
                        value: arr.join("\n"),
                        inline: "true"
                      },
                     
                      
                    ]
                  })
                  message.channel.send(embed1)
        
                })
              })
            }
            if (cmdTxt === "wquad") {
    
              const reactionFilter = (reaction, user) => reaction.emoji.name === '✅' ;
              
              
              
              
              const embed = new Discord.MessageEmbed({
                title: "Warzone Quad's",
                description: "React with ✅ to join this match ",
                fields: [{
                  name: 'Participants (max 4)',
                  value: (`none`)
                  
                  
                }]
                
               
              })
              message.channel.send(embed)
                .then(msg => msg.react('✅'))
                .then(mReaction => {
                  const collector = mReaction.message
                    .createReactionCollector(reactionFilter, {
                      max: 4,
                      dispose: true
                    });
                    
                    
                    
                    console.log(mReaction)
                    
                  
           
                  collector.on('collect', r => {
                    let embedLikeField = Object.assign({}, embed.fields[0]);
                    embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n");
                    const newEmbed = new Discord.MessageEmbed({
                      title: embed.title,
                      description: embed.description,
                      fields: [embedLikeField]
                    })
                    r.message.edit(newEmbed)
                    console.log(embedLikeField)
                  })
           
                  collector.on('remove', r => {
                   
                    let embedLikeField = Object.assign({}, embed.fields[0]);          
                    embedLikeField.value = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`).join("\n") ||("none");
                    const newEmbed = new Discord.MessageEmbed({
                      title: embed.title,
                      description: embed.description,
                      fields: [embedLikeField]
                      
                    })
                    
                    r.message.edit(newEmbed)
                    
                    
                    console.log(mReaction)
                    
                  })
           
                  collector.on('end', r => {
                    var arr = mReaction.users.cache.filter(u => u.id != bot.user.id).map(u => `${u.username}`);
                    
                    
                    
                    const embed1 = new Discord.MessageEmbed({
                      title: embed.title,
                      description: "Team filled up",
                      fields: [{
                          name: 'Players:',
                          value: arr.join("\n"),
                          inline: "true"
                        },
                       
                        
                      ]
                    })
                    message.channel.send(embed1)
          
                  })
                })
              }
  if (message.content.includes(`!helpteam`)) {
    const embed = new Discord.MessageEmbed({
      title: "Help function",
      description: " WINCOUNTER \n \n ar!member @naam give ----> Count the member win \n ar!member @naam take ----> Delete the member win \n ar!top10 ----> Get top 10 stats",
      
    })
    message.channel.send(embed)  
        

}

if (message.content.includes(`aclearall`)){
  if(message.channel.id === '762988645024006145' || message.channel.id === '733647202974433422' || message.channel.id === '776502881330135081' || message.channel.id === '776957045747482675'){
  if(message.member.roles.cache.has('766598175993626625') || message.member.roles.cache.has('747074821229248552') || message.member.roles.cache.has('732914909524000838')) { 
  async function wipe() {
  var msg_size = 100;
  while (msg_size == 100) {
      await message.channel.bulkDelete(100)
  .then(messages => msg_size = messages.size)
  .catch(console.error);
  }
  message.channel.send("Goedemorgen")
}

wipe()


}else{
  message.channel.send('You cant use this command')
}
}else{
  message.channel.send('You cant use this command')
}
}

if (message.content.startsWith(`/voltooid`)){
  if(message.member.roles.cache.has('766598175993626625') || message.member.roles.cache.has('747074821229248552') || message.member.roles.cache.has('732914909524000838')){
  const ready = message.mentions.users.first()
  if (!ready) return message.reply("Geef een persoon op") && message.delete()  
  let role = message.channel.guild.roles.cache.find(r => r.name === "MEMBER")
  let rol = message.channel.guild.roles.cache.find(r => r.name === "TIER 1")
  let weg = message.channel.guild.roles.cache.find(r => r.name === "TRY-OUT")
  let member = message.mentions.members.first()
          member.roles.add(role)
          member.roles.add(rol)
          member.roles.remove(weg)
          var joined = new Discord.MessageEmbed()
          .setTitle("Joined member")
          .setColor("#00ff00")
          .setDescription(`${ready} is toegelaten tot Civil Code!`)
          
          message.channel.bulkDelete(1).then(
            bot.channels.cache.get(`737661533290758212`).send(joined)).catch(err => {
              console.log("Er is iets mis gegaan")}
            
          )}}
            

if (message.content.startsWith(`/register`)){

  var categoryID = "739597558351134781"
      var staff = "732914909524000838" && "747074821229248552" && "766598175993626625"
      var person = message.author
  
      var channelName = "register for-" + message.author.username
  
      var ticket = false
  
      message.guild.channels.cache.forEach(channel => {
         
          if(channel.name.toLowerCase() === channelName.toLowerCase()){
              ticket = true;
              return message.reply("Je hebt al een applicatie open staan").then(msg => msg.delete({timeout: 4000}))
  
          }
      })
  
      if(ticket) return
      
      var embed = new Discord.MessageEmbed()
      .setTitle("Hallo: " +message.author.username)
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

  
                    var embedParent = new Discord.MessageEmbed()
                    .setTitle("Applicatie formulier voor " + message.author.username)  
                    .setColor("#00BFFF")
                    .setFooter("Leuk dat jij je wilt aanmelden bij Civil Code! \nWe gaan je een paar vragen stellen om wat basis informatie van jou te verkrijgen. \nZodra je applicatie word goedgekeurd, zal dit kanaal automatisch verdwijnen.")

                    
                    
                    var naam = new Discord.MessageEmbed()
                    .setTitle("**1. Naam**")  
                    .setColor("#00BFFF")
                    .setFooter("(Antwoord hieronder invullen)")
  
                    var vraag2 = new Discord.MessageEmbed()
                    .setTitle("**2. PC / XBOX / PS4**")  
                    .setColor("#00BFFF")
                    .setFooter("(Antwoord hieronder invullen)")
  
                    var vraag3 = new Discord.MessageEmbed()
                    .setTitle("**3. Leeftijd**")  
                    .setColor("#00BFFF")
                    .setFooter("(Antwoord hieronder invullen)")
  
                    var vraag4 = new Discord.MessageEmbed()
                    .setTitle("**4. Activision ID (bijvoorbeeld: spitfire#12345)**")  
                    .setColor("#00BFFF")
                    .setFooter("(Antwoord hieronder invullen)")
  
                    var vraag5 = new Discord.MessageEmbed()
                    .setTitle("**5. Battlenet / Xbox live / PSN account naam**")  
                    .setColor("#00BFFF")
                    .setFooter("(Antwoord hieronder invullen)")
  
                    var vraag6 = new Discord.MessageEmbed()
                    .setTitle("**6. Favoriete gamemode**")  
                    .setColor("#00BFFF")
                    .setFooter("(Antwoord hieronder invullen)")
  
                    var vraag7 = new Discord.MessageEmbed()
                    .setTitle("**7. Waarom wil jij bij onze clan?**")  
                    .setColor("#00BFFF")
                    .setFooter("(Antwoord hieronder invullen)")
  
                    var vraag8 = new Discord.MessageEmbed()
                    .setTitle("**8. Stream je? zoja, je streamlink**")  
                    .setColor("#00BFFF")
                    .setFooter("(Antwoord hieronder invullen)")
  
                    settedParent.send(message.author.id)
                    settedParent.send(embedParent)
                    settedParent.send(naam)
                    

                      
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

                                                  

                                                  
  
                                                  var uitkomst = new Discord.MessageEmbed()
                                                  .setTitle(`Bedankt voor je registratie ${message.author.username}`)
                                                  .setColor("#00ff00")
                                                  .setTimestamp()
                                                  .setDescription(`**Naam:**\n ${antwoord1}\n\n **PC/XBOX/PS4:**\n ${antwoord2}\n\n **Leeftijd:**\n ${antwoord3}\n\n **Activision ID (voorbeeld spitfire#1234):**\n ${antwoord4}\n\n **Battlenet/ Xbox live/ PSN account naam:**\n ${antwoord5}\n\n **Favoriete gamemode:**\n ${antwoord6}\n\n **Waarom wil jij bij onze clan:**:\n ${antwoord7}\n\n **Stream je? zoja, je streamlink:**\n ${antwoord8}\n\n`)
                                                  
                                                  settedParent.bulkDelete(16).then(
                                                      settedParent.send(uitkomst).then(
                                                      bot.channels.cache.get(`737636904480014356`).send(uitkomst))
                                                      

                                                  )
                                              })
                                          })
                    
                                      })
                 
                                  })
                 
                              })
                 
                          })
                 
                      })
                  })
  
                  settedParent.send(`${person}, <@&${staff}>`).then(msg => msg.delete({timeout: 1000}))
                  
  
  
  
                    
  
  
  
  
             }).catch(err => {
                 message.channel.send("Er is iets mis gegaan")
             });
             
       });
      };
      
      
      if (message.content.startsWith(`/review`)){

      var categoryID = "739597558351134781"

      const ticketUser = message.mentions.users.first()

      if (message.channel.parentID !== categoryID) return message.reply("Dit is geen apllicatie") && message.delete()

      if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Jij hebt geen recht om dit te doen") && message.delete()

      if (!ticketUser) return message.reply("Geef een persoon op") && message.delete()

      var kiesEmbed = new Discord.MessageEmbed()
        .setTitle("KIES")
        .setColor("#00bfff")
        .addField(`Goedkeuren:`, '✅', false)
        .addField(`Afwijzen`,'❌', false )

      var redenEmbed = new Discord.MessageEmbed()
      .setTitle("KIES")
      .setColor("#00bfff")
      .addField(`Reden:`, `Vertel een reden`, false)

      const filter = m => m.content

      message.channel.send(kiesEmbed).then(async msg => {
        message.delete()

        var emoji = await promptMessage(msg, message.author, 60, ["✅", "❌"])

        if(emoji === "✅") {

          let role = message.channel.guild.roles.cache.find(r => r.name === "TRY-OUT")
          let member = message.mentions.members.first()
          member.roles.add(role)

          

          message.channel.awaitMessages(filter, {max: 1, time: 2000}).then(collected => {
            var redenGood = collected.first()

            
              message.channel.bulkDelete(1)
              
              

              
              message.channel.delete(delayMS = 2000).catch(err => {
                console.log("kanaal verwijderd")})
              


            


          })
        }else if(emoji === "❌"){
          if(emoji === "❌") {
            var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

            message.channel.send(redenEmbed).then(msg => msg.delete({timeout: 100000}))
  
            message.channel.awaitMessages(filter, {max: 1, time: 100000}).then(collected => {
              var redenBad = collected.first()
  
              var antwoordBad = new Discord.MessageEmbed()
                .setTitle(`Afgekeurd:`)
                .setColor("#f93a2f")
                .addField("Wie", `${ticketUser}`, false)
                .addField("Reden", `${redenBad}`, false)
  
                message.channel.send(antwoordBad)
                message.channel.bulkDelete(1)
                message.channel.setTopic(`**Aplicatie voor**: ${ticketUser} **status**: Afgewezen!`).then(
                  
                    bot.channels.cache.get(`737636904480014356`).send(antwoordBad))
                    message.channel.delete(delay = 1000000).catch(err => {
                      console.log("kanaal verwijderd")})
                    
                
                }).catch(err => {
                  console.log("Er is iets mis gegaan")})
                

                

  
  
              
  
  
            };
          ;
          
  
          
        }
        async function promptMessage(message, author, time, reactions){
          time *= 1000
  
          for (const reaction of reactions) {
            await message.react(reaction)
          }
  
          const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id
  
          return message.awaitReactions(filter, {max: 1, time: time}).then(collected => collected.first() && collected.first().emoji.name)
        }

        
  
        
      });

     


      


      


    
    }
      

    
  })
  
      
  


  


bot.on('error', console.error);




bot.login(process.env.token)
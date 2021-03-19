// Librairies and files
const Discord = require("discord.js")

// Files 
const config = require('./config.json')

// Bot Creation
const Bot = new Discord.Client()

// Import function
//Admin
const Pingtest = require('./admin/adminTest/pingtest')
const DisconnectBot = require('./admin/adminFunction/disconnecting')
//Useful
const Google = require('./function/useful/google')

// Prefix detection

Bot.on("message", message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(' ')
  const command = args.shift().toLowerCase()
  
  // Commands list

  switch(command) {
    // Command ping
    case 'ping':
      Pingtest.pong(message);
      break;
    // Command DisconnectBOT
    case 'shutdown':
      DisconnectBot.disconnect(message)
      break;
    case 'google':
      Google.research(message);
      break;
      
    // If the command do not correspond
    default:
      return message.channel.send(`Oops, il y a un problème car cette commande est inconnue, ${message.author}!`)
  }
})

// Copying Nitro for Users

Bot.on("message", message => {
  if (!message.content.startsWith(config.nitro) || message.author.bot) return;
  let messageUser = 0;
  messageUser = message.content.slice(config.nitro.length)
  message.delete()
  return message.channel.send(`${message.author} a dit : `+messageUser)
})

// Welcoming members

Bot.on("guildMemberAdd", (member) => {

  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "général"
  );

  // Do nothing if the channel wasn't found on this server
  if (!channel) return;

  // Send the message, mentioning the member
  channel.send(`Bienvenue ${member} !
    Si tu as la moindre question, n'hésite pas à la poser à un valet ou à un invité d'honneur/privilégié !
      
    Je t'invite aussi à aller jeter un œil au <#819315814829522954> pour te tenir informé des règles de ce Discord !
      
    Aussi, si tu souhaites obtenir le grade Invité, je te recommande de faire ta présentation dans #présentation en suivant le modèle du règlement !
      
    Bon séjour parmi nous !`);
    
  member.roles.add("819294604255297566");
});

// While the bot is ready, he will send a message
Bot.on("ready", () => {
  console.log(`Useful is ready to help !`)
  Bot.user.setPresence({
    status: "dnd", //dnd, invisible, online, idle
    activity: {
      name: "utiliser des commandes avec !",
      type: "PLAYING",
      url: "https://discord.gg/F6zBWdV6",
    },
  });
});

// Bot Login (Add token in config.json)
Bot.login(config.token);

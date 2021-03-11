// Librairies and files
const Discord = require("discord.js");

// Files 
const config = require('./config.json');

// Bot Creation & Login
const Bot = new Discord.Client();
Bot.login(config.token);

// While the bot is ready, he will send a message
Bot.on("ready", () => {
  console.log(`Useful is ready to help !`);
  Bot.user.setPresence({
    status: "dnd", //dnd, invisible, online, idle
    activity: {
      name: "utiliser des commandes avec !",
      type: "PLAYING",
      url: "https://discord.gg/F6zBWdV6",
    },
  });
});


// Import fonction

const pingtest = require('./admin/adminTest/pingtest');

// Function Commands

Bot.on("message", message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  
  // Commands list

  if (command === 'ping') {
    message.channel.send(`Command name: ${pingtest.pingtest}\n`);
  }else {
    return message.channel.send(`Oops, il y a un problème, ${message.author}!`);
  }

  if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
  
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
});





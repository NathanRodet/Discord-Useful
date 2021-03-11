const discord = require('discord.js');
const Bot = new discord.Client();


  Bot.on("message", function (message) {
      message.channel.send("Pong !");
  });
// Librairies

const Discord = require("discord.js");

// Bot Creation and login in

const Bot = new Discord.Client();
Bot.login("ODE4OTM1OTE2MDAwMTgyMzAy.YEfTgQ.d4OkLgvHBwue9TE8iyvPXmR_H9g");

Bot.on("ready", () => {
  console.log(`Bot on`);
  Bot.user.setPresence({
    status: "dnd",
    activity: {
      name: "utiliser des commandes avec !",
      type: "PLAYING",
      url: "https://discord.gg/F6zBWdV6",
    },
  });
});

// Ping test

Bot.on("message", function (message) {
  if (
    message.content === "!ping" ||
    message.content === "!Ping" ||
    message.content === "!PING"
  ) {
    //message.reply('pong')
    message.channel.send("Pong !");
  }
});

// Disconnect the bot

Bot.on("message", function (message) {
  if (
    message.content === "!botdc" ||
    message.content === "!Botdc" ||
    message.content === "!BOTDC" ||
    message.content === "!botoff" ||
    message.content === "!Botoff" ||
    message.content === "!BOTOFF"
  ) {
    Bot.destroy = Discord.Client();
  }
});

// Librairies

const Discord = require("discord.js");

// Bot Creation and login in

const Bot = new Discord.Client();
Bot.login("ODE4OTM1OTE2MDAwMTgyMzAy.YEfTgQ.d4OkLgvHBwue9TE8iyvPXmR_H9g");
//NzIyOTE0NDExNTUxMTI5NjQx.XuqAgg.CFJfIueEXz-nLpVzGbMs2hhHq1I
//ODE4OTM1OTE2MDAwMTgyMzAy.YEfTgQ.d4OkLgvHBwue9TE8iyvPXmR_H9g

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

// Arrivée membre

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

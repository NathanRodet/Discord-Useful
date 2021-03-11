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
    // User with the id : "818939835791573043" will be able to disconnect the bot
    if(message.member.roles.cache.has("818939835791573043")){
        Bot.destroy = Discord.Client();
    } else {
        message.channel.send("Désolé, tu n'as pas le droit d'utiliser cette commande !");
      }
    
  }
});

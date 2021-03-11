// Disconnect the bot
module.exports = class DisconnectBot {

  static disconnect (message) {
      // User with the id : "818939835791573043" will be able to disconnect the bot
    if(message.member.roles.cache.has("818939835791573043")){
      Bot.destroy = Discord.Client();
  } else {
      message.channel.send("Désolé, tu n'as pas le droit d'utiliser cette commande !");
    }
  }
}
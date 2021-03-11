// Ping test

module.exports = class Pingtest {

  static pong (message) {
    return message.channel.send("Pong !");
  }

}


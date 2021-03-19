// You're a bot? You're Nitro ?

module.exports = class Nitro {

  static nitroReply (message, config) {
    // Clear messageUser
    let messageUser = 0;
    // Slice the prefix
    messageUser = message.content.slice(config.nitro.length)
    //Delete your messages
    message.delete()
    // send a message : tag + the content of your message
    message.channel.send(`${message.author} a dit : `+messageUser)
  }
}

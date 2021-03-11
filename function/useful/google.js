// Google this for me :c

module.exports = class Google {

  static research (message) {
    let args = message.content.split(' ')
    args.shift()
    message.reply('https://www.google.fr/search?q=' + args.join('%20'))
  }

}


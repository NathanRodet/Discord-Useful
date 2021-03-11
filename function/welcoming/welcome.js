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
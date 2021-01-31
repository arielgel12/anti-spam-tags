const { Message } = require("discord.js")



module.exports = (client) => {
   

    client.on(`message`, (message) => {
    if(message.member.roles.cache.has("bot member id ")) {

    }
    else {
        const member = `599692862166401025` 
        const memberTarget = message.guild.members.cache.get(member.id);
   if (message.content.includes(`${member}`)) {
    message.delete() 
     message.reply("dont hashtag {member}") 
        
    const {guild, content, member} = message 
   }
   

 
    }
}) 
 }
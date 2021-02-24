module.exports = {
    //пол
    name: 'reactionrole2',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '813416099038756884';
        const man = message.guild.roles.cache.find(role => role.id === "798913368169513018");
        const woman = message.guild.roles.cache.find(role => role.id === "798913368177508365");
 
        const manEmoji = '👨';
        const womanEmoji = '👩';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Хотелось бы узнать, кто ты у нас на сервере? Вы у нас сэр или же леди')
            .setDescription(`${manEmoji} - я сэр\n\n`
            + `${womanEmoji} - я леди`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(manEmoji);
        messageEmbed.react(womanEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === manEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(man);
                }
                if (reaction.emoji.name === womanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(woman);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === manEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(man);
                }
                if (reaction.emoji.name === womanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(woman);
                }
            } else {
                return;
            }
        });
    }
 
}   
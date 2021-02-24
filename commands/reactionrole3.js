module.exports = {
    //консоль/пк
    name: 'reactionrole1',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '813416099038756884';
        const pc = message.guild.roles.cache.find(role => role.id === "798913368169513016");
        const xbox = message.guild.roles.cache.find(role => role.id === "798913368169513019");
        const ps = message.guild.roles.cache.find(role => role.id === "798913368177508362");
 
        const pcEmoji = '814022506410541106';
        const psEmoji = '814022505995042826';
        const xboxEmoji = '814022506208952350';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('На каком устройстве ты играешь?')
            .setDescription(`${pcEmoji} - я ПК боярин\n`
                + `${xboxEmoji} - люблю всё зелёное, а так же консоль xBox\n`
                + `${psEmoji} - зачем ваш компьютер, когда у меня есть Play Station`)
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(pcEmoji);
        messageEmbed.react(xboxEmoji);
        messageEmbed.react(psEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === pcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pc);
                }
                if (reaction.emoji.name === xboxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(xbox);
                }
                if (reaction.emoji.name === psEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ps);
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
                if (reaction.emoji.name === pcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pc);
                }
                if (reaction.emoji.name === xboxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(xbox);
                }
                if (reaction.emoji.name === psEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ps);
                }
            } else {
                return;
            }
        });
    }
 
}   
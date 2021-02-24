module.exports = {
    //18+
    name: 'reactionrole5',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '813416099038756884';
        const accept = message.guild.roles.cache.find(role => role.id === "799928306568134707");
 
        const acceptEmoji = '🔞';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Доступ в чат 18+')
            .setDescription(`**ВНИМАНИЕ!**\n При нажатие на ${acceptEmoji} вы подтверждаете что вам 18 лет и более.\n`
                + `Администрация не несёт ответсвтенности за причиненный урон вашей психике, а так же не призывает совершать действия показанные на артах в спец. чатах\n`
                + 'Предупреждён - значит вооружен');
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(acceptEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === acceptEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(accept);
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
                if (reaction.emoji.name === acceptEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(accept);
                }
            } else {
                return;
            }
        });
    }
 
}   
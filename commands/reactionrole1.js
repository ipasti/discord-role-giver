module.exports = {
    //принятие правил
    name: 'reactionrole1',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '798913368203198488';
        const accept = message.guild.roles.cache.find(role => role.id === "798913368169513017");
 
        const acceptEmoji = '✅';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Я могу считать себя умничкой потому что:')
            .setDescription('1. Я полностью прочитал правила и согласен с ними\n'
                + `2. Я нажал на ${acceptEmoji} для того чтобы получить доступ ко всему серверу`);
 
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
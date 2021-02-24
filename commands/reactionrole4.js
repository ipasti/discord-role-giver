module.exports = {
    //игры
    name: 'reactionrole4',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '798913368203198488';
        const gta = message.guild.roles.cache.find(role => role.id === "813769952153567262");
        const cs = message.guild.roles.cache.find(role => role.id === "813769953806778368");
        const apex = message.guild.roles.cache.find(role => role.id === "813769949264609321");
        const minecraft = message.guild.roles.cache.find(role => role.id === "813769944499879986");
        const warzone = message.guild.roles.cache.find(role => role.id === "813769941852618772");
        const ets = message.guild.roles.cache.find(role => role.id === "813769935967748096");
        const valorant = message.guild.roles.cache.find(role => role.id === "813769939101024327");
        const rainbow6 = message.guild.roles.cache.find(role => role.id === "813836529189388321");
        const swbattlefront2 = message.guild.roles.cache.find(role => role.id === "813836528459317260");
 
 
        const gtaE = '814069106633867274';
        const csE = '814068851952058388';
        const apexE = '814071642099286068';
        const minecraftE = '814068851842875436';
        const warzoneE = '814068852107116554';
        const etsE = '814072779406180352';
        const valorantE = '813769935967748096';
        const rainbow6E = '814068851448872971';
        const swbattlefront2E = '814072778185375754';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('А в какую игру, или может даже игры ты играешь?')
            .setDescription(`Играешь в GTA V? Клик на <:gtav:${gtaE}>\n`
            +`Если ты заядлый стрелок, который любит рашать B, а так же плентить бомбы, то нажимай на <:csgo:${csE}>\n`
            +`Ты герой? Так отмечайся же смайликом <:apexlegends:${apexE}>\n`
            +`Любишь заниматься строительством, а так же потом защищать дом от зеленоголовых? Тогда тебе туда <:minecraft:${minecraftE}>\n`
            +`Любишь жанр королевских игр, но уже устал от курочки? Тогда жми на <:callofdutywarzone:${warzoneE}>\n`
            +`Или ты больше любишь заниматься дальнобоем и доставлять товар? Тогда жми <:ets2:${etsE}>\n`
            +`Любишь ставить заряды, да ещё и со сверхспособностями? Жми на <:valorant:${valorantE}>\n`
            +`Любишь устанавливать "Весомый аргумент"? Или ты ставишь пробивные заряды, чтобы попасть в дома? Тогда тебе нужно кликнуть на <:rainbow6:${rainbow6E}>\n`
            +`Если ты уж любишь играть за ситхов, или же за джедаев, то тебе тогда нужно кликнуть на <:swbattlefront2:${swbattlefront2E}>\n`)
            .setFooter('Информация о списке игр может быть изменена со временем. PaSt AI');
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(gtaE);
        messageEmbed.react(csE);
        messageEmbed.react(apexE);
        messageEmbed.react(minecraftE);
        messageEmbed.react(warzoneE);
        messageEmbed.react(etsE);
        messageEmbed.react(valorantE);
        messageEmbed.react(rainbow6E);
        messageEmbed.react(swbattlefront2);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.id === gtaE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gta);
                }
                if (reaction.emoji.id === csE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(cs);
                }
                if (reaction.emoji.id === apexE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(apex);
                }
                if (reaction.emoji.id === minecraftE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraft);
                }
                if (reaction.emoji.id === warzoneE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(warzone);
                }
                if (reaction.emoji.id === etsE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ets);
                }
                if (reaction.emoji.id === valorantE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(valorant);
                }
                if (reaction.emoji.id === rainbow6E) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rainbow6);
                }
                if (reaction.emoji.id === swbattlefront2E) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(swbattlefront2);
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
                if (reaction.emoji.id === gtaE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gta);
                }
                if (reaction.emoji.id === csE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(cs);
                }
                if (reaction.emoji.id === apexE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(apex);
                }
                if (reaction.emoji.id === minecraftE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraft);
                }
                if (reaction.emoji.id === warzoneE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(warzone);
                }
                if (reaction.emoji.id === etsE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ets);
                }
                if (reaction.emoji.id === valorantE) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(valorant);
                }
                if (reaction.emoji.id === rainbow6E) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rainbow6);
                }
                if (reaction.emoji.id === swbattlefront2E) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(swbattlefront2);
                }
            } else {
                return;
            }
        });
    }
 
}   
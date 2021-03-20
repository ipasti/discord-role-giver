module.exports = {
    //игры
    name: 'reactionrole4',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {

        const gtaE = '814069106633867274';
        const csE = '814068851952058388';
        const apexE = '814071642099286068';
        const minecraftE = '814068851842875436';
        const warzoneE = '814068852107116554';
        const etsE = '814072779406180352';
        const valorantE = '814068851922042941';
        const rainbow6E = '814068851448872971';
        const swbattlefront2E = '814072778185375754';
        const rocketleaugeE = "819902594931621929";
        const allgamesE = "🎮";

      
 
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
            +`Если ты уж любишь играть за ситхов, или же за джедаев, то тебе тогда нужно кликнуть на <:swbattlefront2:${swbattlefront2E}>\n`
            +`Любитель поиграть в футбол на машинах? Да так, что при одном виде мяча у тебя начинает течь по крови адреналин то тык на <:rocketleauge:${rocketleaugeE}:>\n`
            +`А если уж ты вообще у нас игрок во все игры, то тыкай на ${allgamesE} и будешь видить все игровые чаты`)
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
        messageEmbed.react(swbattlefront2E);
        messageEmbed.react(rocketleaugeE);
        messageEmbed.react(allgamesE);
    }
 
}   
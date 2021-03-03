const Discord = require("discord.js");
 
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
 
client.commands = new Discord.Collection();

 
client.on("ready", () => {
    console.log("bot is online!");
    client.user.setPresence({
        game: { 
            name: "Made by PaSt AI",
            type: "WATCHING"
        },
        status: "online"
    })
});
 
 
client.on("messageReactionAdd", async (reaction, user) => {
    const guild = client.guilds.cache.find(name => name.id === '798913368169513010');

//подтверждение знание правил, а так же консоль >< 
const channel = "798913368203198488";
const accept =  guild.roles.cache.find(role => role.id === "798913368169513017");
const pc =  guild.roles.cache.find(role => role.id === "798913368169513016");
const xbox =  guild.roles.cache.find(role => role.id === "798913368169513019");
const ps =  guild.roles.cache.find(role => role.id === "798913368177508362");

//объявляю id сообщений
const message1 = "814600686355742728" //подтверждение
const message2 = "814600717725204510" //устройство
const message3 = "814600862117789696" //мж
const message4 = "814600870104662076" //игры
const message5 = "814600836414963763" //nsfw

const pcEmoji = "814022506410541106";
const psEmoji = "814022505995042826";
const xboxEmoji = "814022506208952350";
const acceptEmoji = "✅";
//Пол/18+/Игры
const channel1 = "813416099038756884";
const man =  guild.roles.cache.find(role => role.id === "798913368169513018");
const woman =  guild.roles.cache.find(role => role.id === "798913368177508365");
const gta =  guild.roles.cache.find(role => role.id === "813769952153567262");
const cs =  guild.roles.cache.find(role => role.id === "813769953806778368");
const apex =  guild.roles.cache.find(role => role.id === "813769949264609321");
const minecraft =  guild.roles.cache.find(role => role.id === "813769944499879986");
const warzone =  guild.roles.cache.find(role => role.id === "813769941852618772");
const ets =  guild.roles.cache.find(role => role.id === "813769935967748096");
const valorant =  guild.roles.cache.find(role => role.id === "813769939101024327");
const rainbow6 =  guild.roles.cache.find(role => role.id === "813836529189388321");
const swbattlefront2 =  guild.roles.cache.find(role => role.id === "813836528459317260");
const nsfw =  guild.roles.cache.find(role => role.id === "799928306568134707");
 
const nsfwE = "🔞";
const manEmoji = "👨";
const womanEmoji = "👩";
const gtaE = "814069106633867274";
const csE = "814068851952058388";
const apexE = "814071642099286068";
const minecraftE = "814068851842875436";
const warzoneE = "814068852107116554";
const etsE = "814072779406180352";
const valorantE = "814068851922042941";
const rainbow6E = "814068851448872971";
const swbattlefront2E = "814072778185375754";
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === acceptEmoji) {
            await reaction.message.id(message1).guild.members.cache.get(user.id).roles.add(accept);
        } 
        if (reaction.emoji.id === pcEmoji) {
            await reaction.message.id(message2).guild.members.cache.get(user.id).roles.add(pc);
        }
        if (reaction.emoji.id === xboxEmoji) {
            await reaction.message.id(message2).guild.members.cache.get(user.id).roles.add(xbox);
        }
        if (reaction.emoji.id === psEmoji) {
            await reaction.message.id(message2).guild.members.cache.get(user.id).roles.add(ps);
        }
    }            
    if (reaction.message.channel.id == channel1) {
        if (reaction.emoji.name === manEmoji) {
            await reaction.message.id(message3).guild.members.cache.get(user.id).roles.add(man);
        }
        if (reaction.emoji.name === womanEmoji) {
            await reaction.message.id(message3).guild.members.cache.get(user.id).roles.add(woman);
        }
        if (reaction.emoji.id === gtaE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.add(gta);
        }
        if (reaction.emoji.id === csE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.add(cs);
        }
        if (reaction.emoji.id === apexE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.add(apex);
        }
        if (reaction.emoji.id === minecraftE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.add(minecraft);
        }
        if (reaction.emoji.id === warzoneE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.add(warzone);
        }
        if (reaction.emoji.id === etsE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.add(ets);
        }
        if (reaction.emoji.id === valorantE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.add(valorant);
        }
        if (reaction.emoji.id === rainbow6E) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.add(rainbow6);
        }
        if (reaction.emoji.id === swbattlefront2E) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.add(swbattlefront2);
        }
        if (reaction.emoji.name === nsfwE) {
            await reaction.message.id(message5).guild.members.cache.get(user.id).roles.add(nsfw);
        }
    } else {
        return;
    }

});

client.on("messageReactionRemove", async (reaction, user) => {
    const guild = client.guilds.cache.find(name => name.id === '798913368169513010');

//подтверждение знание правил, а так же консоль >< 
const channel = "798913368203198488";
const accept =  guild.roles.cache.find(role => role.id === "798913368169513017");
const pc =  guild.roles.cache.find(role => role.id === "798913368169513016");
const xbox =  guild.roles.cache.find(role => role.id === "798913368169513019");
const ps =  guild.roles.cache.find(role => role.id === "798913368177508362");

//объявляю id сообщений
const message1 = "814600686355742728" //подтверждение
const message2 = "814600717725204510" //устройство
const message3 = "814600862117789696" //мж
const message4 = "814600870104662076" //игры
const message5 = "814600836414963763" //nsfw

const pcEmoji = "814022506410541106";
const psEmoji = "814022505995042826";
const xboxEmoji = "814022506208952350";
const acceptEmoji = "✅";
//Пол/18+/Игры
const channel1 = "813416099038756884";
const man =  guild.roles.cache.find(role => role.id === "798913368169513018");
const woman =  guild.roles.cache.find(role => role.id === "798913368177508365");
const gta =  guild.roles.cache.find(role => role.id === "813769952153567262");
const cs =  guild.roles.cache.find(role => role.id === "813769953806778368");
const apex =  guild.roles.cache.find(role => role.id === "813769949264609321");
const minecraft =  guild.roles.cache.find(role => role.id === "813769944499879986");
const warzone =  guild.roles.cache.find(role => role.id === "813769941852618772");
const ets =  guild.roles.cache.find(role => role.id === "813769935967748096");
const valorant =  guild.roles.cache.find(role => role.id === "813769939101024327");
const rainbow6 =  guild.roles.cache.find(role => role.id === "813836529189388321");
const swbattlefront2 =  guild.roles.cache.find(role => role.id === "813836528459317260");
const nsfw =  guild.roles.cache.find(role => role.id === "799928306568134707");
 
const nsfwE = "🔞";
const manEmoji = "👨";
const womanEmoji = "👩";
const gtaE = "814069106633867274";
const csE = "814068851952058388";
const apexE = "814071642099286068";
const minecraftE = "814068851842875436";
const warzoneE = "814068852107116554";
const etsE = "814072779406180352";
const valorantE = "814068851922042941";
const rainbow6E = "814068851448872971";
const swbattlefront2E = "814072778185375754";

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;


    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === acceptEmoji) {
            await reaction.message.id(message).guild.members.cache.get(user.id).roles.remove(accept);
        }
        if (reaction.emoji.id === pcEmoji) {
            await reaction.message.id(message1).guild.members.cache.get(user.id).roles.remove(pc);
        }
        if (reaction.emoji.id === xboxEmoji) {
            await reaction.message.id(message2).guild.members.cache.get(user.id).roles.remove(xbox);
        }
        if (reaction.emoji.id === psEmoji) {
            await reaction.message.id(message2).guild.members.cache.get(user.id).roles.remove(ps);
        }
    }
    if (reaction.message.channel.id == channel1) {
        if (reaction.emoji.name === manEmoji) {
            await reaction.message.id(message3).guild.members.cache.get(user.id).roles.remove(man);
        }
        if (reaction.emoji.name === womanEmoji) {
            await reaction.message.id(message3).guild.members.cache.get(user.id).roles.remove(woman);
        }
        if (reaction.emoji.id === gtaE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.remove(gta);
        }
        if (reaction.emoji.id === csE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.remove(cs);
        }
        if (reaction.emoji.id === apexE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.remove(apex);
        }
        if (reaction.emoji.id === minecraftE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.remove(minecraft);
        }
        if (reaction.emoji.id === warzoneE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.remove(warzone);
        }
        if (reaction.emoji.id === etsE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.remove(ets);
        }
        if (reaction.emoji.id === valorantE) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.remove(valorant);
        }
        if (reaction.emoji.id === rainbow6E) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.remove(rainbow6);
        }
        if (reaction.emoji.id === swbattlefront2E) {
            await reaction.message.id(message4).guild.members.cache.get(user.id).roles.remove(swbattlefront2);
        }
        if (reaction.emoji.name === nsfwE) {
            await reaction.message.id(message5).guild.members.cache.get(user.id).roles.remove(nsfw);
        }
    } else {
        return;
    }
});

client.login(process.env.BOT_TOKEN);
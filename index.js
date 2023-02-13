const aoijs = require("aoi.js");

const aoifb = require("aoi.fb");

require('dotenv').config()
console.log(process.env)

const fs = require('fs');

const bot = new aoijs.AoiClient({
	token: process.env.TOKEN,
	prefix: 'pw!',
     intents: ["Guilds", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping", "MessageContent"],
     aoiLogs: false,
     events: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onGuildUnavailable", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onBanAdd", "onBanRemove", "onReactionAdd", "onReactionRemove", "onReactionRemoveAll", "onReactionRemoveEmoji", "onInteractionCreate", "onApplicationCmdPermsUpdate", "onUserUpdate", "onVariableCreate", "onVariableDelete", "onVariableUpdate", "onFunctionError"],
     autoUpdates: false,
     mobilePlatform: false,
     respondToBots: false,
    guildOnly: true,
     database: {
 type: "aoi.fb",
   tables: ["playboot-stable"],
 db: firebase
 },
        respondOnEdit: {
            commands: true,
        time: 600000
},
        suppressAllErrors: false,
        errorMessage: ["", ""]
    })

require('./handler/variables')(bot)
require('./handler/status')(bot)

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./comandos/")

loader.setColors(loader.themes.default) 

const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});

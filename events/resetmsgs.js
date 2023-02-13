module.exports = (bot) => {
bot.loopCommand({
code: `
$setGuildVar[msgs;0;861313067291115541]
`,
channel: "923998719765004299",
executeOnStartup: true,
every: 65000
})
}

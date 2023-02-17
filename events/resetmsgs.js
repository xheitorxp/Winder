module.exports = (bot) => {
bot.loopCommand({
code: `
$setGuildVar[msgs;0;861313067291115541]
`,
channel: "$getVar[log-privado]",
executeOnStartup: true,
every: 65000
})
}

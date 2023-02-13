module.exports = (bot) => {
bot.loopCommand({
code: `
$djsEval[message.guild.channels.cache.get("1007279478088679485").setName("😎│$membersCount[$guildID;all;no]/$getGuildVar[meta] membros")]

 $djsEval[message.guild.channels.cache.get("1007280768059457666").setName("💬 | $getGuildVar[allmensagens;861313067291115541] msgs/mes D: $date$timezone[America/Recife]")]

$cacheMembers[861313067291115541;no]
`,
channel: "$getVar[update-channel]",
executeOnStartup: true,
every: 3600000
  })
}

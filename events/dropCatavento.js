module.exports = (bot) => {
bot.loopCommand({
name: "dropCatavento",
code: `
$setGuildVar[pickStatus;true;861313067291115541]
$author[1;Um catavento selvagem apareceu!]
$description[1;
Quem digitar **pw!pick $random[1000;9999]** primeiro vai ganhar 1 catavento!
]
$thumbnail[1;https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048]

$setGuildVar[pickWord;$random[1000;9999];861313067291115541]
$useChannel[861337787192836117]
$onlyIf[$getGuildVar[msgs;861313067291115541]>2;]

`,
channel: "861337787192836117",
executeOnStartup: true,
every: 1800000
})
}

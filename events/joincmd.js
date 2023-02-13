module.exports = (bot) => {
bot.joinCommand({
channel: "$getVar[log-publico]",
code: `
$ifAwaited[$isUserDMEnabled==true;
{execute:LordDMSend}
]

$ifAwaited[$isUserDMEnabled==true;
{execute:WelcomeDMSend}
]

$ifAwaited[$isBot==false;
{execute:JoinCmd}
]
`
})
}

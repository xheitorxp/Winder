module.exports = (bot) => {
bot.leaveCommand({
channel: "$getVar[log-publico]",
code: `
$ifAwaited[$isBot==false;
{execute:LeaveCmd}
]
`
})
}

module.exports = (bot) => {
bot.readyCommand({
channel: "$getVar[log-privado]",
code: `
$author[1;$userTag[$clientID] está ligado e pronto para o uso!
$description[1;
> **Versão: \`$getVar[versão]\`**
> **Prefixo: \`$getGuildVar[prefixo]\`**
> **Ping: \`$pingms\`**
> **CPU: \`$cpu%\`**
> **AOI: \`$packageVersion\`**
> **NODE: \`$nodeVersion\`**
> **Membros totais: \`$membersCount[861313067291115541]\`**
> **Hospedado na SquareCloud https://squarecloud.app/**
]
$color[1;#ff0011]
$thumbnail[1;$userAvatar[$clientID]]
`
   })
}

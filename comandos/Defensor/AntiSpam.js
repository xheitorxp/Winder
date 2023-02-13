module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$getUserVar[modMsg]>=4;
{execute:modMsg1}
]
$log[Iniciado "ModMsg" de $userTag]
`
},{
name: "modMsg1",
type: "awaited",
code: `
$channelSendMessage[861367708716236800;{newEmbed:
{author:$userTag[$findUser[$message[1]]] ($findUser[$message[1]]) | Banido:https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048}
{description:
**⭐ Punido por:**
$userTag[$clientID]

**⁉️ Motivo:**
Tentativa de praticar Flood/Spam nos canais de texto.
}
{footer:Comunidade Pinwheel - Vigiar e punir, bom demais:$guildIcon}
{color:#6F03FC}
{thumbnail:$userAvatar[$clientID]}
}]
$author[1;$userTag banido automaticamente pelo $username[$clientID] Defensor;https://cdn.discordapp.com/emojis/967367649858306089.png?size=2048]
$description[1;
**__Motivo:__**: Tentativa de praticar Flood/Spam nos canais de texto.
]
$color[1;#6F03FC]
$ban[$guildID;$authorID;0;Banido por: $username[$clientID] | Motivo: Tentativa de praticar Flood/Spam nos canais de texto.]
`
}]

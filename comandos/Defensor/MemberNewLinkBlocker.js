//module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$checkContains[$toLowercase[$message];http:/;https:/;www.]==true;
{execute:membernewlink-blocker}]

$onlyIf[$getUserVar[totalmensagens;$authorID;861313067291115541]<=10;]
$onlyIf[$isBot==false;]
`  
},{
name: "membernewlink-blocker",
type: "awaited",
code: `
$channelSendMessage[$getVar[punishmentLog];{newEmbed:
{author:$userTag[$findUser[$message[1]]] ($findUser[$message[1]]) | Banido:https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048}
{description:
**⭐ Punido por:**
$userTag[$clientID]

**⁉️ Motivo:**
Compartilhar links suspeitos, divulgar sem permissão ou floodar.
}
{footer:Comunidade Pinwheel - Vigiar e punir, bom demais:$guildIcon}
{color:#6F03FC}
{thumbnail:$userAvatar[$clientID]}
}]

$ban[$guildID;$authorID;7;Banido por: $username[$clientID] | Motivo: Compartilhar links suspeitos, divulgar sem permissão ou floodar.]

$author[1;$userTag banido automaticamente pelo $username[$clientID] Defensor;https://cdn.discordapp.com/emojis/967367649858306089.png?size=2048]
$description[1;
**__Motivo:__**: Compartilhar links suspeitos, divulgar sem permissão ou floodar.
]
$color[1;#6F03FC]
$suppressErrors
`
}]

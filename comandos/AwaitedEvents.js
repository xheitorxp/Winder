module.exports =[{
name: "LordDMSend",
type: "awaited",
code: `
$dm[$authorID]
A Pinwheel faz parceria com o Projeto Lorde!
Conheça outros servidores que também fazem parte:

$readFile[Recursos/Lorde/Partners.txt]
$log[DM "LordDMSend" enviada para $userTag]

`
},{
name: "LeaveCmd",
type: "awaited",
code: `
$title[1;$userTag saiu!]
$description[1;
**⭐ Conta criada em:**
$formatDate[$getObjectProperty[createdTimestamp];HH:mm:ss - L]


]
$footer[1;ID: $getObjectProperty[id]]
$thumbnail[1;$getObjectProperty[avatarURL]]
$color[1;f98f04]

$createObject[$fetch[user;$authorID]]

$useChannel[861331580903620608]
$wait[1s]
`
},{
name: "JoinCmd",
type: "awaited",
code: `
$channelSendMessage[861337787192836117;<@$authorID> Bem Vindo! {newEmbed:
{author:$userTag veja essas dicas!}
{description:
• Pegue cores, cargos em <#1067131704835321866>
• Leia as <#861333504297926677>
• E seja feliz!
}
{thumbnail:$userAvatar}
{color:f98f04}
}]

$title[1;$userTag entrou!]
$description[1;
**⭐ Conta criada em:**
$formatDate[$getObjectProperty[createdTimestamp];HH:mm:ss - L]


]
$footer[1;ID: $getObjectProperty[id]]
$thumbnail[1;$getObjectProperty[avatarURL]]
$color[1;f98f04]

$createObject[$fetch[user;$authorID]]

$useChannel[861331580903620608]
`
},{
name: "WelcomeDMSend",
type: "awaited",
code: `
$dm[$authorID]
$author[Seja bem vindo a pinwheel!;https://cdn.discordapp.com/emojis/863784491981340712.png?size=2048]
$description[1;
É uma honra ter você por aqui! Esperamos que você goste mais da pinwheel que a gente!
- Se registre em <#1067131704835321866>
- Veja as regras da pinwheel em <#861333504297926677>

$addField[1;Sempre em evolução;Afinal a pinwheel não para de girar!]

$addField[1;Diversão, segurança e alegria!;A pinwheel foi feita e pensada para isso!]

]
$color[1;#42a832]
$thumbnail[1;$guildIcon]

$wait[1s]
$onlyIf[2==3;]
`
}]

//$ifAwaited[$isBanned[$guildID;$authorID]==true;$userTag[$authorID]

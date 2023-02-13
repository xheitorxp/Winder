module.exports = [{
name: "desilenciar",
aliases: ["desmute", "unmute"],
desc: "Retire o silenciamento de um usuário",
category: "Moderação",
usage: "desilenciar @user/userID motivo?",
code: `
<@$authorID> | O usuário voltou a falar!

$ifAwaited[$isUserDMEnabled[$findUser[$message[1]]]==true;{execute:unmute-dm}]

$channelSendMessage[861367708716236800;{newEmbed:
{author:$userTag[$findUser[$message[1]]] ($findUser[$message[1]]) | Voltou a falar:https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048}
{description:
**⭐ Punido por:**
$userTag[$authorID]

**⁉️ Motivo:**
$messageSlice[1]
}
{footer:Comunidade Pinwheel - Vigiar e punir, bom demais:$guildIcon}
{color:#6F03FC}
{thumbnail:$userAvatar[$authorID]}
}]

$takeRole[$guildID;$findUser[$message[1]];868656559004188752]

$onlyPerms[kickmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **expulsar membros** e ter o cargo <@&861323169482801213>.}  {footer:Que tal você entrar para a staff? $getguildVar[prefixo]serstaff} }]

$onlyForRoles[861323169482801213;{newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **expulsar membros** e ter o cargo <@&861323169482801213>.}  {footer:Que tal você entrar para a staff? $getguildVar[prefixo]serstaff} }]

$argsCheck[>0;<@$authorID> {newEmbed: {author:Como usar o comando $getguildVar[prefixo]unmute} {title:$getguildVar[prefixo]unmute <@user> <motivo?>} {description:É necessário **@mencionar** o usuário, o motivo é opcional, mas recomendo por algum motivo, para evitar confusão}}]

$onlyIf[$findUser[$message[1]]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione/ID** o usuário]
`
},{
name: "unmute-dm",
type: "awaited",
code: `
$author[1;Você voltou a falar na comunidade pinwheel!;https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048]
$description[1;

**⭐ Punido por:**
$userTag[$authorID]

**⁉️ Motivo:**
$messageSlice[1]

]
$footer[1;Comunidade Pinwheel - Vigiar e punir, bom demais;$guildIcon]
$thumbnail[1;$userAvatar[$authorID]]
$color[1;#6F03FC]

$dm[$findUser[$message[1]]]
`
}]

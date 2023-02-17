module.exports = [{
name: "desbanir",
aliases: ['unban','ub'],
desc: "Desbana um usuário",
category: "Moderação",
usage: "desbanir @user/userID motivo?",
code: `
<@$authorID> | O usuário foi desbanido!

$unban[$guildID;$findUser[$message[1]]]

$channelSendMessage[$getVar[punishmentLog];{newEmbed:
{author:$userTag[$findUser[$message[1]]] ($findUser[$message[1]]) | Desbanido:https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048}
{description:
** Punido por:**
$userTag[$authorID]

** Motivo:**
$messageSlice[1]
}
{footer:Comunidade Pinwheel - Vigiar e punir, bom demais:$guildIcon}
{color:#6F03FC}
{thumbnail:$userAvatar[$authorID]}
}]

$onlyPerms[banmembers;<@$authorID> {newEmbed: {author:Voc� n�o tem as permiss�es necess�rias} {description:Por seguran�a, voc� precisa ter as permiss�es de **banir membros** e ter o cargo <@&861323169482801213>.}  {footer:Que tal voc� entrar para a staff? $getguildVar[prefixo]serstaff} }]

$onlyForRoles[861323169482801213;{newEmbed: {author:Voc�s n�o o tem as permiss�es necess�rias} {description:Por seguran�a, voc� precisa ter as permiss�es de **banir membros** e ter o cargo <@&861323169482801213>.}  {footer:Que tal voc� entrar para a staff? $getguildVar[prefixo]serstaff} }]

$onlyIf[$findUser[$message[1]]!=$authorID;<@$authorID> | Voc� est�� se automencionando, por favor, **@mencione/ID** o usu�rio]

$argsCheck[>0;<@$authorID> {newEmbed: {author:Como usar o comando $getguildVar[prefixo]banir} {title:$getguildVar[prefixo]banir <@user> <motivo?>} {description:� necess�rio **@mencionar** o usu�rio, o motivo � opcional, mas recomendo por algum motivo, para evitar confus�o}}]
`
}]

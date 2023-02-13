module.exports = {
name: "reputação",
aliases: "rep",
desc: "Dê uma reputação positiva para aquele membro incrível que lhe ajudou bastante!",
category: "social",
usage: "reputação @user motivo?",
code: `
$reply
$onlyIf[$mentioned[1]!=$authorID;<@$authorID> | Você não pode dar uma reputação a si mesmo.]
$cooldown[30m;<@$authorID> | Espere **%time%** para dar uma reputação novamente!]
$argsCheck[>1;<@$authorID> | Dê uma reputação para alguém! **$getServerVar[prefixo;$getVar[server-id]]rep <@user <motivo>**]

<@$authorID>
$author[1;Você deu uma reputação para $userTag[$mentioned[1];861313067291115541] com sucesso!;$userAvatar[$mentioned[1]]]
$color[1;#f4fc03]


$setUserVar[rep;$sum[$getUserVar[rep;$mentioned[1];861313067291115541];1];$mentioned[1];861313067291115541]

$setUserVar[repuser;$authorID;$mentioned[1];861313067291115541]
$setUserVar[repmsg;$noMentionMessage;$mentioned[1];861313067291115541]
`
}

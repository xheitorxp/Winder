module.exports = {
name: "reset mensagens",
desc: "Reseta a contagem mensal de valores",
category: "Desenvolvedor",
usage: "reset mensagens",
code: `
$resetUserVar[mensagens]
$resetGlobalUserVar[mensagens]
$setUserVar[mensagens;0]
$setGuildVar[allmensagens;0]
<@$authorID> | Todas as mensagens foram resetadas! Agora estarei contando as novas mensagens :)


$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
`
}

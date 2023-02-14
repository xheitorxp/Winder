module.exports = {
name: "perfil",
aliases: ['profile'],
desc: "Veja o perfil do usuário na comunidade!",
category: "Personalização",
usage: "perfil @user",
code: `
$botTyping
$reply
$title[1;👤 Perfil de $userTag[$mentioned[1;yes]]]
$description[1;$getUserVar[sobremim;$mentioned[1;yes];861313067291115541]

📊 **Status do Usuário**
$userActivity | Plataforma: $platform[$mentioned[1]]

🕧 **Criação da Conta**
$formatDate[$creationDate[$mentioned[1];ms];DD]/$formatDate[$creationDate[$mentioned[1];ms];MM]/$formatDate[$creationDate[$mentioned[1];ms];YYYY] | $formatDate[$creationDate[$mentioned[1];ms];hh]:$formatDate[$creationDate[$mentioned[1];ms];mm]

🌐 **Último Servidor Visto**
$GuildName[$getUserVar[lastGuildMessage;$mentioned[1;yes];861313067291115541]]

❤️ **Reputações ($getUserVar[rep;$mentioned[1;yes];861313067291115541])**
$userTag[$getUserVar[repuser;$mentioned[1;yes]];861313067291115541]: "$getUserVar[repmsg;$mentioned[1;yes];861313067291115541]"
]

$title[2;🚶 Jornada de $username[$mentioned[1;yes]] na pinwheel]
$description[2;💬 **Mensagens Enviadas**
**$getUserVar[mensagens;$mentioned[1;yes];861313067291115541]** Mensagens nesse Mês | **$getUserVar[totalmensagens;$mentioned[1;yes];861313067291115541]** Mensagens Totais

📨 **Última Mensagem**
$getUserVar[mensagens2;$mentioned[1;yes];861313067291115541] - $getUserVar[mensagens1;$mentioned[1;yes];861313067291115541]
]

$color[1;#1900ff]
$color[2;#1900ff]

$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[2;Use $getGuildVar[prefixo]Background | $getGuildVar[prefixo]Sobremim]
$image[2;$getGlobalUserVar[background;$findUser[$message;yes]]]

`
}

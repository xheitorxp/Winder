module.exports = [{
name: "modmail",
desc: "Usado para enviar mensagens diretas",
category: "Moderação",
usage: "modmail @user/userID mensagem",
code: `
<@$authorID> | Mensagem enviada!
$ifAwaited[$isUserDMEnabled[$findUser[$message[1]]]==true;
{execute:dm-modmailSend};
> ...Na verdade, não! As mensagens diretas de **$username[$findUser[$message[1]]]** estão desativadas, se pelo menos ele pudesse ativar apenas para a **Pinwheel**...
]
$channelSendMessage[861337787192836117;<@$findUser[$message[1]]> | $ifAwaited[$isUserDMEnabled[$findUser[$message[1]]]==true;Olha a minha DM! =D;Tentei lhe enviar uma DM mas infelizmente não consegui...]
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
`
},{
name: "dm-modmailSend",
type: "awaited",
code: `
$dm[$findUser[$message[1]]]

$author[1;Hey! A Equipe Pinwheel tem um recado para você!]
$description[1;
$messageSlice[1]
]
$footer[1;$username[$clientID] ModMail Service]
$thumbnail[1;$guildIcon]
$color[1;#ff08fb]
`
}]
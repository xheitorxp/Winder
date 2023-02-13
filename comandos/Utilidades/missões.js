module.exports = [{
name: "miss�es",
aliases: ["metas", "miss�o", "missions", "meta"],
desc: "Veja suas miss�es e metas dispon�veis",
category: "Atividade",
usage: "miss�es",
code: `
$ifAwaited[$getUserVar[totalmensagens;$authorID;861313067291115541]>=100;
{execute:joined-missions};
{execute:leaved-missions}
]

`
},{
name: "joined-missions",
type: "awaited",
code: `
$reply
$author[1;Metas do $username[$clientID]]
$thumbnail[1;https://abs.twimg.com/emoji/v2/72x72/1f3c6.png]
$description[1;
Metas e missões que o $username[$clientID] pede que você tente cumprir!

**__💬 - Chat, Mensagens e Atividades__**
Enviar$replaceText[$sub[$getUserVar[totalmensagens;$authorID;861313067291115541];$getUserVar[metaMsg;$authorID;861313067291115541]];-; ] mensagens para bater **$getUserVar[metaMsg;$authorID;861313067291115541]** mensagens

- **Verificação de Membros!**
$ifAwaited[$hasRoles[861313067291115541;$authorID;1065319142271496212]==true;Você conseguiu se verificar!;Envie **200 mensagens**, caso já tenha mais de 200 mensagens, execute **pw!verify**]

]
$color[1;#4287f5]
`
},{
name: "leaved-missions",
type: "awaited",
code: `
<@$authorID> | Você precisa ter mais de 100 mensagens enviadas para poder acessar as suas missões, não se preocupe, eu irei avisar quando você bater tudo bem?



`
}]
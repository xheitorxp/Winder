module.exports = [{
name: "rank",
aliases: ["ranking"],
desc: "Veja o ranking de membros em uma categoria",
category: "Diversão",
usage: "rank <categoria>",
code:`
<@$authorID>
$author[1;Qual rank você quer ver?;https://twemoji.maxcdn.com/2/72x72/2b50.png]
$description[1;
$addField[1;pw!rank ativos mensais <1/2/3...>;Veja os membros mais ativos do mês]

$addField[1;pw!rank cataventos <1/2/3>]

$addField[1;pw!rank ativos totais <1/2/3...> **LENTO!!**;Veja os membros mais ativos em toda história $getVar[Guild-name]]

]
$footer[1;Utilize: pw!rank <opção> <1/2/3...>]
$color[1;#08ff3d]
`
},{
name: "rank ativos mensais",
code: `
<@$authorID>
$author[1;Atividade mensal de membros | Página $ifAwaited[$argsCount>=1;$message[1];1];https://cdn.discordapp.com/emojis/967367727335477248.png?size=2048]
$color[1;#08ff3d]
$description[1;

> **__$getVar[pinwTemp]__**

$userLeaderboard[861313067291115541;mensagens;asc;🔥{top}° **{tag}** -> {value};10;$ifAwaited[$argsCount>=1;$message[1];1]]
$footer[1;Soma de mensagens enviadas: $getGuildVar[allmensagens;861313067291115541] | Você: $getUserVar[mensagens;$authorID;861313067291115541] ]
$botTyping
$cooldown[1m;<@$authorID> | Espere **%time%** para poder executar este comando novamente!]
`
},{
name: "rank ativos totais",
code: `
<@$authorID>
$author[1;Atividade total de membros | Página $ifAwaited[$argsCount>=1;$message[1];1];https://cdn.discordapp.com/emojis/967367727335477248.png?size=2048]
$color[1;#08ff3d]
$description[1;
$userLeaderboard[861313067291115541;totalmensagens;asc;⭐{top}° **{tag}** -> {value};10;$ifAwaited[$argsCount>=1;$message[1];1]]
$footer[1;Você enviou $getUserVar[totalmensagens;$authorID;861313067291115541] mensagens]
$botTyping
$cooldown[1m;<@$authorID> | Espere **%time%** para poder executar este comando novamente!]
`
},{
name: "rank cataventos",
code: `
<@$authorID>
$author[1;Top Catadores de Cataventos | Página $ifAwaited[$argsCount>=1;$message[1];1];https://cdn.discordapp.com/emojis/1063515923086065799.png?size=2048]
$color[1;#08ff3d]
$description[1;
> **🏆 - $userTag[$getGuildVar[pickLastUser;861313067291115541]]**
$userLeaderboard[861313067291115541;cataventos;asc;⭐{top}° **{tag}** -> {value};10;$ifAwaited[$argsCount>=1;$message[1];1]]
$footer[1;Você tem $getUserVar[cataventos;$authorID;861313067291115541] catavento!]
$botTyping
$cooldown[1m;<@$authorID> | Espere **%time%** para poder executar este comando novamente!]
`
}]

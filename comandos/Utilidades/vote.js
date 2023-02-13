module.exports = {
name: "vote",
aliases: ['votar'],
desc: "Links para votação no servidor Pinwheel",
category: "Votação",
usage: "votar",
code: `
$reply
<@$authorID> | Ficamos felizes em saber que você quer nós ajudar, vote na $getVar[server-name] para nós ajudar a ser o melhor servidor do Discord!

$addButton[1;Votar (Top.gg);link;https://top.gg/servers/861313067291115541/vote;no]

$addButton[1;Votar (Discords.com);link;https://discords.com/servers/861313067291115541/upvote;no]
`
}

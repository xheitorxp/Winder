module.exports = {
name: "limpar",
aliases: ['clear', 'purge'],
desc: "Limpa rapidamente uma quantidade de mensagens",
category: "moderação",
usage: "limpar <número>",
code: `
$reply
$clear[$message[1]]
<@$authorID> | Chat limpo com sucesso!

$onlyIf[$message[1]<=1000;<@authorID> | Eu só posso deletar abaixo de 1000 mensagens.]
$onlyPerms[managemessages;<@$authorID> | Você precisa ter a permissão de gerenciar mensagens para executar este comando.]
$argsCheck[1;<@$authorID> | Se eu fosse adivinha eu estaria rico! Quantas mensagens eu devo deletar?]
`
}

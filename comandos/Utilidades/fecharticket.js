module.exports = [{
name: "fecharticket",
aliases: ['closeticket'],
desc: "Feche um ticket que você abriu",
category: "Suporte",
usage: "fecharticket",
code:`
<@$authorID> | Tem certeza que deseja fechar este canal?

$addbutton[1;Sim;primary;fecharticket2;no;✅]
$addbutton[1;Não;primary;fecharticket1;no;❌]

$onlyIf[$isTicket==true;<@$authorID> | Este comando só pode ser utilizado em tickets]
`
},{
name: "fecharticket1",
type: "interaction",
prototype: "button",
code: `
$interactionReply[<@$authorID> | Não irei deletar este ticket, caso queira clique no botão "sim";;;;;no]
`
 },{
 name: "fecharticket2",
 type: "interaction",
prototype: "button",
 code: `
 $closeTicket[<@$authorID> | O canal <#$channelID> não é um ticket, crie um ticket utilizando pw!criarticket]

$wait[10s]
$interactionReply[<@$authorID> | deletando...;;;;everyone;no]
`
}]

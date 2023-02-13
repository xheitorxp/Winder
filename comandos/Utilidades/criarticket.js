module.exports = [{
name: "ticket",
aliases: ['criarticket'],
desc: "Crie um ticket para poder falar em privado com a staff",
category: "Suporte",
usage: "ticket",
code: `
<@$authorID> | Alguma dúvida, reclamação, sugestão, testar comandos para procurar bugs ou apenas quer conversar bananas com a Equipe Pinwheel? Crie um ticket! Será criado um canal privado entre nós e você :)

$addbutton[1;Criar um ticket;primary;ticket;no;📧]
`
},{
name: "ticket",
type: "interaction",
prototype: "button",
code: `$reply
$botTyping
$interactionReply[<@$authorID> | Ticket feito! Para fechar ele depois use o comando pw!fecharticket
> <#$newTicket[⭐│ticket-$username;<@$authorID> <@&894592054175342602> {newEmbed: {author:Aqui está seu novo ticket!} {description:Esse canal é privado apenas para você e a equipe, caso seja necessário adicionar mais alguém, avise!} {footer:Equipe Pinwheel $year | Para fechar este ticket, use pw!fecharticket/closeticket} {color:#03e3fc}};907045926525345862;yes;<@$authorID> Não foi possível criar um ticket para você! Me desculpe...]>;;;;everyone;yes]


$cooldown[30m;]
`
}]

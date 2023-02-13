module.exports = [{
name: "pinwheel comandos",
aliases: ['pwhl cmds', 'pinwheel commands'],
desc: "Usado para desenvolvedores configurar rapidamente o servidor",
category: "Pinwheel",
usage: "pinwheel comandos",
code: `
<@$authorID> | Comando em criação 
$author[1;Manual de instrução > Pinwheel Commands]
$description[1;
Os "Pinwheel Commands" serve para facilitar o gerenciamento do servidor para a equipe.
A maioria dos comandos são exclusivos para os donos da pinwheel, gerenciadores ou moderadores.

$addField[1;pinwheel add/remove bestfriend;Remove/Adiciona o cargo de melhores amigos]

$addField[1;pinwheel set icon <anexo>;Seta a logo da pinwheel pelo anexo]

$addField[1;pinwheel set name <nome>;Seta o nome da pinwheel]

]
$color[1;#00eaff]
`
},{
name: "pinwheel add bestfriend",
aliases: ['pwhl ad bf'],
desc: "Adiciona o cargo Melhores Amigos",
category: "pinwheel",
usage: "pinwheel add bestfriend @user",
code: `
<@$authorID> | O Usuário **$userTag[$mentioned[1]]** virou o Melhor Amigo da pinwheel!

$giveRole[861313067291115541;$mentioned[1];962855650239610961]
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

`
},{
name: "pinwheel remove bestfriend",
aliases: ['pwhl rm bf'],
desc: "Remove o cargo Melhores Amigos",
category: "pinwheel",
usage: "pinwheel remove bestfriend @user",
code: `

<@$authorID> | O Usuário **$userTag[$mentioned[1]]** apenas um membro comum da pinwheel!

$takeRole[861313067291115541;$mentioned[1];962855650239610961]
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

`
},{
name: "pinwheel set icon",
aliases: ['pwhl set icon'],
desc: "Seleciona uma logo",
category: "pinwheel",
usage: "pinwheel set icon <anexo>",
code: `
<@$authorID> | Pronto!
$setGuildIcon[$messageAttachment]
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
`
},{
name: "pinwheel set name",
aliases: ['pwhl set name'],
desc: "Seleciona um nome",
category: "pinwheel",
usage: "pinwheel set name <nome>",
code: `
<@$authorID> | Pronto!
$setGuildName[$message]
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

`
},{
name: "pinwheel set icon default",
aliases: ['pwhl set icon default'],
desc: "Volta para a logo padrão",
category: "pinwheel",
usage: "pinwheel set icon default",
code: `
<@$authorID> | Pronto!
$setGuildIcon[https://media.discordapp.net/attachments/785632865709981756/1063493133935067250/IMG_20230112_203229.png]
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

`
},{
name: "pinwheel set meta",
aliases: ['pwhl set meta'],
desc: "Seleciona uma meta",
category: "pinwheel",
usage: "pinwheel set meta <número>",
code: `
<@$authorID> | Pronto!
$setGuildVar[meta;$message;861313067291115541]
$onlyIf[$hasRoles[861313067291115541;$authorID;1061811818533769266]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

`
}]

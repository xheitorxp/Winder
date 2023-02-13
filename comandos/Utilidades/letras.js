module.exports = {
name: "letra",
aliases: ['letras', 'Lyrics'],
desc: "Esqueceu a letra da sua música favorita?",
category: "Música",
usage: "letra <nome da música>",
code: `
$author[1;$username[$clientID] Music Service - Letras;https://media.discordapp.net/attachments/785632865709981756/1038454545195483136/IMG_20221105_110459.png?width=444&height=444]
$title[1;$getObjectProperty[title] - $getObjectProperty[artist]]
$description[1;
$getObjectProperty[lyrics]

]
$thumbnail[1;$getObjectProperty[image]]
$footer[1;$username[$clientID] Music Service By POPCAT]
$color[1;#f200ff]
$createObject[$jsonRequest[https://api.popcat.xyz/lyrics?song=$message]]

$botTyping
$GuildCooldown[30s;<@$authorID> | Para evitar flood/spam, Espere **%time%** para executar este comando novamente!]

$argsCheck[>0;<@$authorID> {newEmbed: {author:Como usar o comando $getGuildVar[prefixo]letra} {title:$getGuildVar[prefixo]letra <nome da música>} {description:Digita o nome da música, o $username[$clientID] vai enviar uma embed com a letra da música.}}]
$onlyIf[$getObjectProperty[error]!=Song not found!;<@$authorID> | Não consegui encontrar a letra de **$message**, você digitou corretamente?]
`
}

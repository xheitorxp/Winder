module.exports = {
name: "guaxinim",
aliases: ['raccoon'],
desc: "Veja uma foto aleatória de um guaxinim!",
category: "Animal",
usage: "guaxinim",
code: `$botTyping
<@$authorID>

$attachment[$getObjectProperty[image];$username[$clientID]-raccoon.jpg]
$createObject[$jsonRequest[https://some-random-api.ml/animal/raccoon]]
$serverCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
} 

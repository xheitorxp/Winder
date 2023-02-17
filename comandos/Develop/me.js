module.exports = {
name: "$alwaysExecute",
code: `
$setGuildVar[msgs;$sum[$getGuildVar[msgs;861313067291115541];1];861313067291115541]
$setUserVar[mensagens;$sum[$getUserVar[mensagens;$authorID;861313067291115541];1];$authorID;861313067291115541]
$setUserVar[totalmensagens;$sum[$getUserVar[totalmensagens;$authorID;861313067291115541];1];$authorID;861313067291115541]
$setUserVar[mensagens1;$message;$authorID;861313067291115541]

$setGuildVar[lastUserSend;$authorID;861313067291115541]

$setUserVar[mensagens2;$hour:$minute:$second - $date/$formatDate[$dateStamp;MM]/$year;$authorID;861313067291115541]
$setUserVar[mensagens3;$channelID;$authorID;861313067291115541]

$setUserVar[lastGuildMessage;$guildID;$authorID;861313067291115541]

$timezone[America/Recife]
$setGuildVar[allmensagens;$sum[$getGuildVar[allmensagens;861313067291115541];1];861313067291115541]

$onlyForGuilds[861313067291115541;]
$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]

$onlyIf[$isBot==false;]
`
}


module.exports = [{
name: "daily",
aliases: ["prêmiodiário", "bolsadiscord"],
desc: "Pegue suas moedas diárias!",
category: "Economia",
usage: "prêmiodiário",
code: `
<@$authorID> | Parabéns! Você ganhou **$random[50;500]** moedas!

$setUserVar[coins;$random[50;500];$authorID;861313067291115541]

$setUserVar[dailyLast;$date/$formatDate[$dateStamp;MM]/$year;$authorID;861313067291115541]

$onlyIf[$getUserVar[dailyLast;$authorID;861313067291115541]!=$date/$formatDate[$dateStamp;MM]/$year;<@$authorID> | Você já pegou o seu prêmio diário de hoje!]
$timezone[America/Recife]
`
}] 

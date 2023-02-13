module.exports = [{
name: "pick",
desc: "Tem chance de ser dropado um catavento enquanto o chat está ativo",
category: "economia",
usage: "pick [código]",
code: `
$author[1;$usertag ganhou um catavento!]
$thumbnail[1;$userAvatar]
$description[1;
Agora ele tem **$getUserVar[cataventos;$authorID;861313067291115541]** cataventos!

]
$color[1;#ff00ff]
$setUserVar[cataventos;$sum[$getUserVar[cataventos;$authorID;861313067291115541];1];$authorID;861313067291115541]
$useChannel[861337787192836117]

$setGuildVar[pickLastUser;$authorID;861313067291115541]

$setGuildVar[pickWord;XXXX;861313067291115541]
$onlyIf[$message[1]==$getGuildVar[pickWord;861313067291115541];<@$authorID> | Você errou o código!]

$wait[1s]
$onlyIf[$getGuildVar[pickWord;861313067291115541]!=XXXX;<@$authorID> | Você demorou para pegar o catavento, mas quem sabe na próxima você pegue?]

$onlyIf[$isNumber[$message[1]]==true;<@$authorID> | Atualmente, apenas números.]
`
}] 

module.exports = [{
name: "verificar-me",
aliases: ["verify"],
desc: "Tem mais de 200 mensagens mas não ganhou o cargo de Membro Verificado? Use esse cargo.",
category: "Pinwheel",
usage: "verificar-me",
code: `
$giveRole[861313067291115541;$authorID;1065319142271496212]

<@$authorID> | Prontinho! Agora você pode enviar links, gifs, imagens e afins ✅

$onlyIf[$getUserVar[totalmensagens;$authorID;861313067291115541]>=200;<@$authorID> | Você precisa ter mais de **200 mensagens** enviadas no total para ganhar o cargo de Membro Verificado.]
`
}]
module.exports = [{
name: "abraçar",
aliases: "hug",
desc: "Quer abraçar uma pessoa só que a distância não deixa?",
category: "roleplay/social",
usage: "hug @user",
code: `
$author[1;🫂$username abraçou $ifAwaited[$mentioned[1]==$authorID;ele mesmo, pois amor próprio é essencial;$username[$mentioned[1]]]
$image[1;$getObjectProperty[link]]
$color[1;#34eb46]

$createObject[$jsonRequest[https://some-random-api.ml/animu/hug]]
$cooldown[5s;<@$authorID> | Aguarde **%time%** para poder executar esse comando novamnente!]
`
}]

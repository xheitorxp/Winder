module.exports = [{
name: "cafuné",
aliases: "pat",
desc: "Faça um carinho, espalhe amor!",
category: "roleplay/social",
usage: "cafuné @user",
code: `
$author[1;❤️$username fez um cafuné em $ifAwaited[$mentioned[1]==$authorID;si mesmo, pois amor próprio é essencial;$username[$mentioned[1]]]
$image[1;$getObjectProperty[link]]
$color[1;#34eb46]

$createObject[$jsonRequest[https://some-random-api.ml/animu/pat]]
$cooldown[5s;<@$authorID> | Aguarde **%time%** para poder executar esse comando novamnente!]
`
}]

module.exports = [{
name: "prender",
aliases: ["jail"],
desc: "Coloque alguém na prisão!",
category: "Edição de Imagens",
usage: "prender @user?",
code: `
<@$authorID>
$attachment[https://some-random-api.ml/canvas/overlay/jail?avatar=$replaceText[$userAvatar[$mentioned[1]];webp;png];$username-gay.png]

$botTyping
$cooldown[10s;Aguarde **%time%** para usar novamente]
`
}]
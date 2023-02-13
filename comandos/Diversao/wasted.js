module.exports = [{
name: "wasted",
aliases: ["selascou"],
desc: "Eita! Se f--. Adicione o filtro Wasted!",
category: "Edição de Imagens",
usage: "wasted @user?",
code: `
<@$authorID>
$attachment[https://some-random-api.ml/canvas/overlay/wasted?avatar=$replaceText[$userAvatar[$mentioned[1]];webp;png];$username-gay.png]

$botTyping
$cooldown[10s;Aguarde **%time%** para usar novamente]
`
}]
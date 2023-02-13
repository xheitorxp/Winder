module.exports = {
name: "background",
desc: "Selecione uma imagem para o seu perfil",
category: "Personalização",
usage: "background <anexo>",
code: `
<@$authorID> | Tudo certo!
$image[1;$messageAttachment]
$color[1;#0307fc]
$setUserVar[background;$messageAttachment;861313067291115541]

$onlyIf[$messageAttachment!=;<@$authorID> Eu não preciso explicar como usar esse comando né? É só colocar o link da imagem, anexar a imagem e ele vai aparecer no perfil]
`
} 

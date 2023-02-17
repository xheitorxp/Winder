module.exports = [{
name: "background",
desc: "Selecione uma imagem para o seu perfil",
category: "Personalização",
code: `
<@$authorID> | Tudo certo!
$description[Você mudou o background do seu perfil com sucesso!]
$image[1;$messageAttachment]
$color[1;#0307fc]
$setGlobalUserVar[background;$messageAttachment;$authorID]

$onlyIf[$messageAttachment!=;<@$authorID> | Você precisa anexar uma imagem ou link!]
$onlyIf[$checkContains[$toLowercase[$message];http://;https://;www.;ww1.]==false;]
$ifAwaited[$checkContains[$toLowercase[$message];http://;https://;www.;ww1.;.com]==true;{execute:backgroundlink}]
`
},{
name: "backgroundlink",
type: "awaited",
code: `
<@$authorID> | Tudo certo!
$description[Você mudou o background do seu perfil com sucesso!]
$image[1;$message]
$color[1;#0307fc]
$setGlobalUserVar[background;$message;$authorID]
$argsCheck[>0;<@$authorID> | Eu não preciso explicar como usar esse comando né? É só colocar o link da imagem e ele vai aparecer no perfil!]
`
}]
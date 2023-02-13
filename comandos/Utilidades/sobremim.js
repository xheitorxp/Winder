module.exports = {
name: "sobremim",
desc: "Atualize a biografia do seu perfil",
category: "Personalização",
usage: "sobremim <texto>",
code: `
$reply 
<@$authorID>
$author[1;Sua biografia foi alterada!]
$description[1;
Nova Biografia:
**$message**
]
$color[1;#ff00d9]
$setUserVar[sobremim;$message;$authorID;$getVar[server-id]]
$onlyIf[$message!=;<@$authorID> Você precisa dizer qual frase no perfil você deseja ter!]

$onlyIf[$charCount<=256;<@$authorID> | Limite de **256** caracteres passado.]
`
}

module.exports = {
name: "traduzir",
aliases: ['translator', 'tradutor'],
desc: "Traduza um texto para qualquer língua",
category: "Útil",
usage: "traduzir <língua> <texto>",
code: `
$argsCheck[>=2;<@$authorID> | Traduza textos e palavras! **$getServerVar[prefixo]traduzir <lang> <frase/traduza>**]


$onlyIf[$stringStartsWith[$getObjectProperty[translated];The language '$message[1]' is not supported.]==false;<@$authorID> | A linguagem não é suportada.]

$author[1;$username[$clientID] Translator]
$title[1;Texto traduzido para $message[1]]
$description[1;
$getObjectProperty[translated]
]
$footer[1;$username[$clientID] Translator Service By POPCAT]
$color[1;#ff00d9]
$createObject[$jsonRequest[https://api.popcat.xyz/translate?to=$message[1]&text=$messageSlice[1]]]

$suppressErrors[<@$authorID> | Tentei com todas as forças executar este comando e sabe o que aconteceu? Nada, algo deu errado.]
`
}

module.exports = [{
name: "cmdinfo",
aliases: ["comandoinfo"],
desc: "Veja mais informações sobre um comando",
category: "Informação",
usage: "cmdinfo <nome do comando>",
code: `$reply
<@$authorID>
$title[1;Como usar o comando "$commandInfo[$message;name]"]
$description[1;
**$commandInfo[$message;category]** $commandInfo[$message;desc]

$addField[1;⁉️ Como usa?;$ifAwaited[$commandInfo[$message;usage]!=;**$getServerVar[prefixo]$commandInfo[$message;usage]**]]

$addField[1;⭐ Alternativa;$ifAwaited[$commandInfo[$message;aliases]!=;**$replaceText[$commandInfo[$message;aliases];,;/]**;**Não tem alternativas**]]
]
$color[1;Random]
$onlyIf[$commandInfo[$message;usage]!=;<@$authorID> Esse comando não existe ou não é usável]
$argsCheck[>0;<@$authorID> | Qual comando você quer informação?]

`
}]
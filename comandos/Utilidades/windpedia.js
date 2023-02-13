module.exports = [{
name: "windpedia",
aliases: ["windpedia", "wiki", "wikimember"],
desc: "Enciclopédia da pinwheel, veja histórias e biografias de membros e alguns outros conteúdos",
category: "Windpédia",
usage: "windpédia <nome>",
code: `
$ifAwaited[$argsCount==0;
{execute:wiki-list}
]

$ifAwaited[$argsCount>=1;
{execute:wiki-member}
]

$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
},{
name: "wiki-list",
type: "awaited",
code: `
<@$authorID>
$author[1;Windpédia > Catálogo]
$description[1;
$exec[cd Wiki && ls]
]
$color[1;#d742f5]
$footer[1;Windpédia, a enciclopédia da Pinwheel!]
$thumbnail[1;$serverIcon]
$botTyping
$suppressErrors
`
},{
name: "wiki-member",
type: "awaited",
code: `
<@$authorID>
$author[1;Windpédia de $readFile[Wiki/$toLocaleUppercase[$message]/Name.txt];https://media.discordapp.net/attachments/785632865709981756/1061265791061868624/IMG_20230107_095137.png?width=452&height=452]
$description[1;
$readFile[Wiki/$toLocaleUppercase[$message]/Desc.txt]
]
$thumbnail[1;$readFile[Wiki/$toLocaleUppercase[$message]/Thumb.txt]]
$footer[1;Windpédia, a enciclopédia da Pinwheel!]
$image[1;$readFile[Wiki/$toLocaleUppercase[$message]/Image.txt]]
$color[1;$readFile[Wiki/$toLocaleUppercase[$message]/Cor.txt]]

$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
\`\`\`
Provavelmente, falta de recursos e informações da pasta do conteúdo, peça para um desenvolvedor verificar este erro
\`\`\`
]
$wait[1s]
$botTyping
`
}]

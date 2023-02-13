module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$checkContains[$toLowercase[$message];pinwheel lixo;pinwheel é um lixo;este servidor é um lixo;esse servidor é um lixo;esse sv é um lixo;este sv é um lixo;pedaço de lixo;comunidade de merda;sv de lixo;pinwheel merda;ditadura no servidor;pior servidor;servidor merd;servidor lixo;servidor lixola;servidor mais merda;pinwheel é uma merda]==true;
{execute:toxic-deletar}
]
$ifAwaited[$checkContains[$toLowercase[$message];smt;se morre;morre tu;se joga da ponte;se mate;quero que você morra;quero que vc morra;kill yourself;morra queimada;resto de aborto;s3 m4t4;s3 m0rr3;self-homicide;se mate]==true;
{execute:toxic-deletar}
]
$ifAwaited[$checkContains[$toLowercase[$message];s1x;SixMatheus12380#7831;sixmatheus;stixay;st1x4y]==true;
{execute:toxic-deletar}
]

$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
name: "toxic-banir",
type: "awaited",
code: `
$ban[$guildID;$authorID;0;Banido por: $username[$clientID] | Motivo: Quebra de diretrizes, falas ofensivas e comportamento péssimo.]

$author[1;$userTag banido automaticamente pelo $username[$clientID] Defensor;https://cdn.discordapp.com/emojis/967367649858306089.png?size=2048]
$description[1;
**__Motivo:__**: Quebra de diretrizes, falas ofensivas e comportamento péssimo.
]
$color[1;#6F03FC]
$suppressErrors

`
},{
name: "toxic-deletar",
type: "awaited",
code: `
$useChannel[1042174148987846656]
$author[$username[$clientID] Defensor - Mensagem deletada]
$description[1;
De: **$userTag** ($authorID)
Canal: <#$channelID>
Mensagem:
\`\`\`
$message
\`\`\`

]
$thumbnail[1;$userAvatar]
$color[1;#6F03FC]
$deleteCommand
$suppressErrors

`
}]

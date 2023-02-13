module.exports = [{
name: "$alwaysExecute",
code: `

$ifAwaited[$getUserVar[totalmensagens;$authorID;861313067291115541]==100;
<@$authorID> Agora você pode olhar suas metas e missões usando o comando **pw!meta/missões**!
]

$ifAwaited[$getUserVar[totalmensagens;$authorID;861313067291115541]==$getUserVar[metaMsg;$authorID;861313067291115541];
{execute:missionMeta-1}
]

$ifAwaited[$getUserVar[mensagens;$authorID;861313067291115541]==1000;
{execute:missionMeta-2}
]

$ifAwaited[$getUserVar[totalmensagens;$authorID;861313067291115541]==200;
{execute:missionMeta-3}
]

$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
name: "missionMeta-1",
type: "awaited",
code: `
<@$authorID> 
$author[1;Você tem $getUserVar[totalmensagens;$authorID;861313067291115541] mensagens!]
$description[1;
Vamos tentar bater a meta de $getUserVar[metaMsg;$authorID;861313067291115541] mensagens?
$footer[1;Está gostando da Pinwheel?]
$color[1;#00bbff]

$setUserVar[metaMsg;$sum[$getUserVar[metaMsg;$authorID;861313067291115541];1000];$authorID;861313067291115541]
`
},{
name: "missionMeta-2",
type: "awaited",
code: `
$giveRole[861313067291115541;$authorID;861801532261138433]
$giveRole[861313067291115541;$authorID;901247350645862420]

`
},{
name: "missionMeta-3",
type: "awaited",
code: `
<@$authorID> | Agora você pode enviar Imagens, Gifs, Vídeos e tudo mais!
$giveRole[861313067291115541;$authorID;1065319142271496212]
`
}]

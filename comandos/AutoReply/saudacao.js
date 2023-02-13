module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$stringStartsWith[$toLowercase[$message];bom dia;dia;good morning;bdiaa;buenos dias;bueno dia;dia bom]==true;
{execute:sudBomDia}
]

$ifAwaited[$stringStartsWith[$toLowercase[$message];boa tarde;tarde;good afternoon;btarde;buenos tardes;bueno tarde;tarde boa]==true;
{execute:sudBoaTarde}]

$ifAwaited[$stringStartsWith[$toLowercase[$message];boa noite;noite;good night;noite;buenos noite;bueno noite;noite boa;boa noit]==true;
{execute:sudBoaNoite}]

$onlyIf[$argsCount==2;]
$onlyIf[$mentioned[1]==$authorID;]
$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
name: "sudBomDia",
type: "awaited",
code: `
$cooldown[5m;]

<@$authorID> | Bom Dia!

$botTyping
$onlyIf[$mentioned[1]==$authorID;]
`
},{
name: "sudBoaTarde",
type: "awaited",
code: `
$cooldown[5m;]

<@$authorID> | Boa Tarde!
$botTyping
$onlyIf[$mentioned[1]==$authorID;]
`
},{
name: "sudBoaNoite",
type: "awaited",
code: `
$cooldown[5m;]

<@$authorID> | Boa Noite!
$botTyping
$onlyIf[$mentioned[1]==$authorID;]
`
}]

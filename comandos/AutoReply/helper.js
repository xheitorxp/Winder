module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$stringStartsWith[$toLowercase[$message];quero entrar pra staff;entrar na equipe pinwheel;form staff; form de staff;form para entrar na staff;quero ser adm;quero ser mod;quero ser administrador;quero ser moderador;queria ser staff;quero staff;queria ser staff;queria ser moderador;queria ser mod;queria ser adm;queria ser administrador]==true;
{execute:helper-staff}
]

$ifAwaited[$checkContains[$toLowercase[$message];eu amo a pinwheel;eu gostei da pinwheel;i love pinwheel;amo pinwheel;amo este servidor;amo esse servidor;amo este sv;amo esse sv;eu gosto da pinwheel;eu adoro a pinwheel;amo a pinwheel;i love the pinwheel]==true;
{execute:helper-love-pinwheel}
]

$ifAwaited[$checkContains[$toLowercase[$message];pspsps;psps]==true;
{execute:helper-meow}
]

$ifAwaited[$checkContains[$toLowercase[$message];oi wind;hi wind;olá wind;hello wind;opa wind]==true;
{execute:helper-hi-winder}
]

$ifAwaited[$checkContains[$toLowercase[$message];tudo bem winder;tudo bem, winder;você está bem winder;você esta bem, winder;vc esta bem winder;vc está bem, winder;estou bem winder, e você?;estou bem winder e você;estou bem winder e vc]==true;
{execute:helper-how-winder}
]

$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
name: "helper-staff",
type: "awaited",
code: `$reply
<@$authorID> | Olá, bom saber que você quer entrar na Equipe Pinwheel!
$addButton[1;😎│seja-staff;link;https://discord.com/channels/861313067291115541/878982849087283240;no]


$cooldown[5m;]
$botTyping
`
},{
name: "helper-love-pinwheel",
type: "awaited",
code: `$reply
<@$authorID> | Own! Eu também amo a Pinwheel, é um servidor muito incrível! Fico feliz em ver que você também goste ❤️

$botTyping
$cooldown[5m;]
`
},{
name: "helper-meow",
type: "awaited",
code: `$reply
<@$authorID> | $randomText[Meow! 🐱;Miau! 🐱;Meeeeoooowwwww! 🐱]

$botTyping
$cooldown[5m;]
`
},{
name: "helper-hi-winder",
type: "awaited",
code: `$reply
<@$authorID> | $randomText[Oi! Tudo bem?;Opa! blz?;Eae tio, tudo certo, tudo na paz?;Hey! Tudo bem?;Eae Brow, tudo em cima?;Chamou? Estou aqui para te ajudar beleza?]
$wait[2s]
$botTyping
$cooldown[5m;]

`
},{
name: "helper-how-winder",
type: "awaited",
code: `
$reply
<@$authorID> | $randomText[Estou incrivelmente bem, e você? 🐱💙;Estou bem, e você? 😉;Sim! Você também está?;Estou sempre bem, mas estou melhor agora conversando com você 💖;Você está bem? Eu estou bem! 😊]

$wait[2s]
$botTyping
$cooldown[5m;]
`
}]

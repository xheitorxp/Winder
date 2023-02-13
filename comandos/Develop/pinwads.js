module.exports = {
name: "$alwaysExecute",
code: `
$ifAwaited[$getServerVar[msgs;861313067291115541]>=2;
{execute:ad-$random[1;6]}
]

$onlyIf[$randomText[no;no;no;no;no;no;no;no;no;no;no;no;no;no;no;yes]==yes;]
$serverCooldown[10m;]
`
}


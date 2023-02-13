module.exports = {
name: "botinfo",
desc: "Veja informações avançadas (ou simples) do bot",
category: "Bot",
usage: "botinfo",
code: `
$author[1;Informações avançadas do $userTag[$clientID]]
$description[1;
Ping: **__$pingms__**
Node: **__$nodeVersion__**
Aoi.JS: **__$packageVersion__**
RAM: **__$truncate[$ram]MB usados__**
CPU: **__$cpu/100%__**
Uptime: **__$getObjectProperty[translated]__**
$username[$clientID] Version: **__$getVar[versão]__**
Informações do sistema operacional do $username[$clientID]:
\`\`\`
$exec[uname -a]
\`\`\`


$createObject[$jsonRequest[https://api.popcat.xyz/translate?to=pt&text=$uptime]]
]
$footer[1;Demorei $executionTimems para executar este comando]
$color[1;#ff00d9]
$thumbnail[1;$userAvatar[$clientID]]

$createObject[$jsonRequest[https://api.popcat.xyz/translate?to=pt&text=$uptime]]
$suppressErrors[<@$authorID> | Deu um erro muito estranho aqui]
$botTyping
`
}

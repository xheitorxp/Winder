module.exports = {
name: "calcular",
aliases: ['calculo', 'calculate', 'calc', 'cálculo'],
desc: "Pregui�a de fazer conta simples? Permite-me fazer isso para voc�!",
category: "Matem�tica",
usage: "calc <c�lculo simples>",
code: `$reply
A resposta é $math[$message[1]]!

$wait[3s]
$botTyping
$argsCheck[>0;<@$authorID> {newEmbed: {author:Como usar o comando $getServerVar[prefixo]calc} {title:$getServerVar[prefixo]calc <expressão>} {description:Faça calculos de uma forma simples e rápido usando a inteligência do $username[$clientID].}}]
$suppressErrors[<@$authorID> | Eu juro para você que eu tentei fazer esse cálculo, eu vi vídeos aulas, contatei minha professora de matemática, fiz formula de bhaskara, usei o comando +calc da loritta, e sabe o que ela me respondeu? **"Desculpe, mas eu não acho que \`\`$message[1]\`\` seja uma expressão aritmética... Ou talvez seja a minha burrice, afinal, eu estou perdendo o meu tempo no Discord em vez de prestar atenção na aula."** se NEM a Loritta sabe resolver isso, imagine eu? Que tal você mesmo resolver isso? Você me fez perder TEMPO!]
`
}
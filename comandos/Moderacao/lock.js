module.exports = [{
name: "trancar",
aliases: ['lock','travar'],
desc: "Serve para trancar um canal, evitando que outros usuários falem.",
category: "Moderação",
usage: "trancar #canal?",
code: `$reply
$modifyChannelPerms[$guildID;$mentionedChannels[1];-sendmessages]
<@$authorID> | <#$mentionedChannels[1]> foi bloqueado com sucesso!
$onlyPerms[managechannels;<@$authorID> | Você precisa ter a permissão de gerenciar canais para executar este comando!]`
},{
name: "destrancar",
aliases: ['unlock','destravar'],
desc: "Destranque um canal que está bloqueado para permitir que outros usuários falem",
category: "Moderação",
usage: "destrancar #canal?",
code: `$reply
  $modifyChannelPerms[$guildID;$mentionedChannels[1];+sendmessages]
<@$authorID> | <#$mentionedChannels[1]> foi destrancado com sucesso!
$onlyPerms[managechannels;<@$authorID> | Você precisa ter a permissão de gerenciar canais para executar este comando!]`
}]

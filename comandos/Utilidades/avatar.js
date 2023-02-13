module.exports = {
name: "avatar",
desc: "Veja a foto de perfil dos outros usuários!",
category: "Utilidades",
usage: "avatar @user/userID?",
code: `
$reply
<@$authorID>
$author[1;$username[$findUser[$message[1]]]]
$image[1;$userAvatar[$findUser[$message[1]];4096;yes;png]]
$color[1;#49eb34]

$botTyping
`
} 

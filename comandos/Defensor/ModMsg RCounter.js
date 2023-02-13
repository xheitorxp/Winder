module.exports = [{
name: "$alwaysExecute",
code: `
$log[Resetado "ModMsg" de $userTag]
$setUserVar[modMsg;0;$authorID;861313067291115541]
$wait[5s]

`
}]
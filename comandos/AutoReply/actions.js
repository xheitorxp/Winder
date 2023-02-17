module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$stringEndsWith[$message;{delete}]==true;{execute:action-deletemsg}]


`
},{
name: "action-deletemsg",
type: "awaited",
code: `
$deleteCommand
$botTyping

$wait[30s]

`
}]

module.exports = {
name: "ping",
desc: "Quanto tempo o bot responde?",
category: "Informação",
usage: "ping",
code: `
$reply
<@$authorID> | Ping **$pingms** | Executed: **$executionTimems**

`
}
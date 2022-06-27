let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0882-8703-7007]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
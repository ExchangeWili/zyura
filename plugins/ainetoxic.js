let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let gaboleh = fs.readFileSync('./mp3/PTT-20220220-WA0414.opus')
conn.sendFile(m.chat, gaboleh, '', '', m, true)
}, 1000)
//conn.sendMessage(m.chat, helloaine, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: helloaine }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(kontol|memek|jembut|jancok|ngentod|anjg|kntl|bngst)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
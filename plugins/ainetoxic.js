let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return

   let regs = /(memek)/i
   let isVertexThai = regs.exec(m.text)
   if (isVertexThai && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regk = /(kontol)/i
   let isVertexSymbol = regk.exec(m.text)
   if (isVertexSymbol && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regp = /(bangsat)/i
   let isVertexsThai= regp.exec(m.text)
   if (isVertexsThai && !m.fromMe) {
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }   
   // tambahin sendiri code virus WhatsApp..
}
handler.customPrefix = /^(kontol|memek|jembut|jancok|ngentod|anjing|bangsat|bngst|anjg)$/i
handler.command = new RegExp
   conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
• @${nomorown.split`@`[0]} •
------- ${nameown} -------

📮 *Note:*
• Owner Menerima Save Contact
• Owner Berhak Blockir Tanpa Alasan
• Jangan Tanya Owner Botnya On Kapan
• Jangan Spam Owner
• Jangan Telpon Bot Sama Owner

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA OWNER* ${htka}
*ɴᴀᴍᴇ:* Zyura
*ᴀɢᴇ:* 17ᵗʰ
*sᴛᴀᴛᴜs:* -

*ᴀᴅᴅʀᴇss:* Indonesia,

*- - sᴋɪʟʟs: - -* 
> JavaScript [89.7%]
> Python [13.4%]
> CSS [5.1%]
> Html [1.2%]


🐈 *Tiktok:* http://tiktok.com/@vinz9118
🥏 *Whatsapp* wa.me/6288287037007

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler

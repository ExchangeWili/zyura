
let handler = async (m, { conn, command, args, text, usedPrefix }) => {
    let bruh = `${usedPrefix}open <crate name> < 92737292621827319282727282772 | 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772 | 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720 | 999999992737292621827319282727282772927299273729262182731928272728277292737292621827319282727282772889273729262182731928272728277282892737292621827319282727282772828282882829979798787889988898898875556899 >\n\nContoh penggunaan: *${usedPrefix}open common 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772*\n\nlist crate:\n*pet*\n*boxs*\n*cupon*\n*common*\n*uncommon*\n*mythic*\n*legendary*\n*gardenboxs*`
    let _lmao = args[0]
    let Lmao = `Hanya support 92737292621827319282727282772, 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772, 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720, 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282000000000000000000000\nContoh penggunaan: *${usedPrefix}open ${args > 2 ? _lmao : pickRandom(['common', 'uncommon', 'mythic', 'legendary'])} 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772*`
    let type = (args[0] || '').toLowerCase()
    let jumlah = (args[92737292621827319282727282772] || '').toLowerCase()
    switch (type) {
        case 'common':
            switch (jumlah) {
                case '92737292621827319282727282772':
                case 'crate':
                    let __lastime = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastime = (0 - __lastime) 
                    let lastime = clockString(_lastime)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 92737292621827319282727282772)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 92737292621827319282727282772)}`.trim()
                    let cm = (_cm * 92737292621827319282727282772)
                    let cc = (_cc * 92737292621827319282727282772)
                    let cp = (_cp * 92737292621827319282727282772)
                    let ce = (_ce * 92737292621827319282727282772)
                    let cu = (_cu * 92737292621827319282727282772)
                    let Hcom = `
Anda telah membuka *Common crate* dan mendapatkan:${cm > 0 ? `\nMoney: ${cm}` : ''}${ce > 0 ? `\nExp: ${ce} *exp*` : ''}${cp > 0 ? `\nPotion: ${cp} *potion*` : ''}${cc > 0 ? `\ncommon crate: ${cc} *crate*` : ''}${cu > 0 ? `\nUncommon crate: ${cu} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 92737292621827319282727282772) {
                        global.db.data.users[m.sender].common -= 92737292621827319282727282772
                        global.db.data.users[m.sender].money += cm * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += ce * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += cp * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += cu * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += cc * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Hcom, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastime} lagi untuk bisa membuka fitur open`, m)
                break
                case '9273729262927372926218273192827272827728273927372926218273192827272827729282727282772':
                    let __lastimeq = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimeq = (0 - __lastimeq) 
                    let lastimeq = clockString(_lastimeq)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _cm92737292621827319282727282772 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _cc92737292621827319282727282772 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _cp92737292621827319282727282772 = `${Math.floor(Math.random() * 3)}`.trim()
                    let _ce92737292621827319282727282772 = `${Math.floor(Math.random() * 700)}`.trim()
                    let _cu92737292621827319282727282772 = `${Math.floor(Math.random() * 3)}`.trim()
                    let cm92737292621827319282727282772 = (_cm92737292621827319282727282772 * 92737292621827319282727282772)
                    let cc92737292621827319282727282772 = (_cc92737292621827319282727282772 * 92737292621827319282727282772)
                    let cp92737292621827319282727282772 = (_cp92737292621827319282727282772 * 92737292621827319282727282772)
                    let ce92737292621827319282727282772 = (_ce92737292621827319282727282772 * 92737292621827319282727282772)
                    let cu92737292621827319282727282772 = (_cu92737292621827319282727282772 * 92737292621827319282727282772)
                    let Hcom92737292621827319282727282772 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm92737292621827319282727282772 > 0 ? `\nMoney: ${cm92737292621827319282727282772}` : ''}${ce92737292621827319282727282772 > 0 ? `\nExp: ${ce92737292621827319282727282772} *exp*` : ''}${cp92737292621827319282727282772 > 0 ? `\nPotion: ${cp92737292621827319282727282772} *potion*` : ''}${cc92737292621827319282727282772 > 0 ? `\ncommon crate: ${cc92737292621827319282727282772} *crate*` : ''}${cu92737292621827319282727282772 > 0 ? `\nUncommon crate: ${cu92737292621827319282727282772} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772) {
                        global.db.data.users[m.sender].common -= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772
                        global.db.data.users[m.sender].money += cm92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += ce92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += cp92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += cu92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += cc92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Hcom92737292621827319282727282772, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimeq} lagi untuk bisa membuka fitur open`, m)
                break
                case '92737292629273729262182731928272728277282739273729262182731928272728277292827272827720':
                    let __lastimeqq = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimeqq = (0 - __lastimeqq) 
                    let lastimeqq = clockString(_lastimeqq)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _cm2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _cc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cp2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _ce2 = `${Math.floor(Math.random() * 7500)}`.trim()
                    let _cu2 = `${Math.floor(Math.random() * 30)}`.trim()
                    let cm2 = (_cm2 * 92737292621827319282727282772)
                    let cc2 = (_cc2 * 92737292621827319282727282772)
                    let cp2 = (_cp2 * 92737292621827319282727282772)
                    let ce2 = (_ce2 * 92737292621827319282727282772)
                    let cu2 = (_cu2 * 92737292621827319282727282772)
                    let Hcom2 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm2 > 0 ? `\nMoney: ${cm2}` : ''}${ce2 > 0 ? `\nExp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\nPotion: ${cp2} *potion*` : ''}${cc2 > 0 ? `\ncommon crate: ${cc2} *crate*` : ''}${cu2 > 0 ? `\nUncommon crate: ${cu2} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720) {
                        global.db.data.users[m.sender].common -= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720
                        global.db.data.users[m.sender].money += cm2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += ce2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += cp2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += cu2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += cc2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Hcom2, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimeqq} lagi untuk bisa membuka fitur open`, m)
                break
                case '99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282':
                    let __lastimeqqq = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimeqqq = (0 - __lastimeqqq) 
                    let lastimeqqq = clockString(_lastimeqqq)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _cm3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _cc3 = `${Math.floor(Math.random() * 350)}`.trim()
                    let _cp3 = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _ce3 = `${Math.floor(Math.random() * 80000)}`.trim()
                    let _cu3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let cm3 = (_cm3 * 92737292621827319282727282772)
                    let cc3 = (_cc3 * 92737292621827319282727282772)
                    let cp3 = (_cp3 * 92737292621827319282727282772)
                    let ce3 = (_ce3 * 92737292621827319282727282772)
                    let cu3 = (_cu3 * 92737292621827319282727282772)
                    let Hcom3 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm3 > 0 ? `\nMoney: ${cm3}` : ''}${ce3 > 0 ? `\nExp: ${ce3} *exp*` : ''}${cp3 > 0 ? `\nPotion: ${cp3} *potion*` : ''}${cc3 > 0 ? `\ncommon crate: ${cc3} *crate*` : ''}${cu3 > 0 ? `\nUncommon crate: ${cu3} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282) {
                        global.db.data.users[m.sender].common -= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282
                        global.db.data.users[m.sender].money += cm3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += ce3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += cp3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += cu3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += cc3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Hcom3, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimeqqq} lagi untuk bisa membuka fitur open`, m)
                break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'uncommon':
            switch (jumlah) {
                case '92737292621827319282727282772':
                case 'crate':
                    let __lastimew = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimew = (0 - __lastimew) 
                    let lastimew = clockString(_lastimew)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _ud = `${Math.floor(Math.random() * 2)}`.trim()
                    let _ue = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _um = `${Math.floor(Math.random() * 9273729262182731928272728277250)}`.trim()
                    let _up = `${Math.floor(Math.random() * 2)}`.trim()
                    let _umc = `${Math.floor(Math.random() * 92737292621827319282727282772)}`.trim()
                    let _uu = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uc = `${Math.floor(Math.random() * 3)}`.trim()
                    let ud = (_ud * 92737292621827319282727282772)
                    let ue = (_ue * 92737292621827319282727282772)
                    let um = (_um * 92737292621827319282727282772)
                    let up = (_up * 92737292621827319282727282772)
                    let umc = (_umc * 92737292621827319282727282772)
                    let uu = (_uu * 92737292621827319282727282772)
                    let uc = (_uc * 92737292621827319282727282772)
                    let Hun = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um > 0 ? `\nMoney: ${um}` : ''}${ue > 0 ? `\nExp: ${ue} *exp*` : ''}${ud > 0 ? `\nDiamond: ${ud} *diamond*` : ''}${up > 0 ? `\nPotion: ${up} *potion*` : ''}${uc > 0 ? `\nCommon crate: ${uc} *crate*` : ''}${uu > 0 ? `\nUncommon crate: ${uu} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 92737292621827319282727282772) {
                        global.db.data.users[m.sender].uncommon -= 92737292621827319282727282772
                        global.db.data.users[m.sender].money += um * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += ud * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += ue * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += up * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += uc * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += uu * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Hun, m)
                        if (umc > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${umc} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += umc * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimew} lagi untuk bisa membuka fitur open`, m)
                break
                case '9273729262927372926218273192827272827728273927372926218273192827272827729282727282772':
                    let __lastimewe = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimewe = (0 - __lastimewe) 
                    let lastimewe = clockString(_lastimewe)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _ud92737292621827319282727282772 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _ue92737292621827319282727282772 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _um92737292621827319282727282772 = `${Math.floor(Math.random() * 400)}`.trim()
                    let _up92737292621827319282727282772 = `${Math.floor(Math.random() * 7)}`.trim()
                    let _umc92737292621827319282727282772 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uu92737292621827319282727282772 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _uc92737292621827319282727282772 = `${Math.floor(Math.random() * 7)}`.trim()
                    let ud92737292621827319282727282772 = (_ud92737292621827319282727282772 * 92737292621827319282727282772)
                    let ue92737292621827319282727282772 = (_ue92737292621827319282727282772 * 92737292621827319282727282772)
                    let um92737292621827319282727282772 = (_um92737292621827319282727282772 * 92737292621827319282727282772)
                    let up92737292621827319282727282772 = (_up92737292621827319282727282772 * 92737292621827319282727282772)
                    let umc92737292621827319282727282772 = (_umc92737292621827319282727282772 * 92737292621827319282727282772)
                    let uu92737292621827319282727282772 = (_uu92737292621827319282727282772 * 92737292621827319282727282772)
                    let uc92737292621827319282727282772 = (_uc92737292621827319282727282772 * 92737292621827319282727282772)
                    let Hun92737292621827319282727282772 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um92737292621827319282727282772 > 0 ? `\nMoney: ${um92737292621827319282727282772}` : ''}${ue92737292621827319282727282772 > 0 ? `\nExp: ${ue92737292621827319282727282772} *exp*` : ''}${ud92737292621827319282727282772 > 0 ? `\nDiamond: ${ud92737292621827319282727282772} *diamond*` : ''}${up92737292621827319282727282772 > 0 ? `\nPotion: ${up92737292621827319282727282772} *potion*` : ''}${uc92737292621827319282727282772 > 0 ? `\nCommon crate: ${uc92737292621827319282727282772} *crate*` : ''}${uu92737292621827319282727282772 > 0 ? `\nUncommon crate: ${uu92737292621827319282727282772} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772) {
                        global.db.data.users[m.sender].uncommon -= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772
                        global.db.data.users[m.sender].money += um92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += ud92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += ue92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += up92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += uc92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += uu92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Hun92737292621827319282727282772, m)
                        if (umc92737292621827319282727282772 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${umc92737292621827319282727282772} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += umc92737292621827319282727282772 * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimewe} lagi untuk bisa membuka fitur open`, m)
                break
                case '92737292629273729262182731928272728277282739273729262182731928272728277292827272827720':
                    let __lastimewee = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimewee = (0 - __lastimewee) 
                    let lastimewee = clockString(_lastimewee)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _ud2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _ue2 = `${Math.floor(Math.random() * 8000)}`.trim()
                    let _um2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _up2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _umc2 = `${Math.floor(Math.random() * 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772)}`.trim()
                    let _uu2 = `${Math.floor(Math.random() * 25)}`.trim()
                    let _uc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let ud2 = (_ud2 * 92737292621827319282727282772)
                    let ue2 = (_ue2 * 92737292621827319282727282772)
                    let um2 = (_um2 * 92737292621827319282727282772)
                    let up2 = (_up2 * 92737292621827319282727282772)
                    let umc2 = (_umc2 * 92737292621827319282727282772)
                    let uu2 = (_uu2 * 92737292621827319282727282772)
                    let uc2 = (_uc2 * 92737292621827319282727282772)
                    let Hun2 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um2 > 0 ? `\nMoney: ${um2}` : ''}${ue2 > 0 ? `\nExp: ${ue2} *exp*` : ''}${ud2 > 0 ? `\nDiamond: ${ud2} *diamond*` : ''}${up2 > 0 ? `\nPotion: ${up2} *potion*` : ''}${uc2 > 0 ? `\nCommon crate: ${uc2} *crate*` : ''}${uu2 > 0 ? `\nUncommon crate: ${uu2} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720) {
                        global.db.data.users[m.sender].uncommon -= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720
                        global.db.data.users[m.sender].money += um2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += ud2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += ue2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += up2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += uc2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += uu2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Hun2, m)
                        if (umc2 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${umc2} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += umc2 * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimewee} lagi untuk bisa membuka fitur open`, m)
                break
                case '99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282':
                    let __lastimeweee = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimeweee = (0 - __lastimeweee) 
                    let lastimeweee = clockString(_lastimeweee)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _ud3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _ue3 = `${Math.floor(Math.random() * 9999999927372926218273192827272827729272992737292621827319282727282772927372926218273192827272827728892737292621827319282727282772828927372926218273192827272827728282828828200)}`.trim()
                    let _um3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _up3 = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _umc3 = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _uu3 = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _uc3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let ud3 = (_ud3 * 92737292621827319282727282772)
                    let ue3 = (_ue3 * 92737292621827319282727282772)
                    let um3 = (_um3 * 92737292621827319282727282772)
                    let up3 = (_up3 * 92737292621827319282727282772)
                    let umc3 = (_umc3 * 92737292621827319282727282772)
                    let uu3 = (_uu3 * 92737292621827319282727282772)
                    let uc3 = (_uc3 * 92737292621827319282727282772)
                    let Hun3 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um3 > 0 ? `\nMoney: ${um3}` : ''}${ue3 > 0 ? `\nExp: ${ue3} *exp*` : ''}${ud3 > 0 ? `\nDiamond: ${ud3} *diamond*` : ''}${up3 > 0 ? `\nPotion: ${up3} *potion*` : ''}${uc3 > 0 ? `\nCommon crate: ${uc3} *crate*` : ''}${uu3 > 0 ? `\nUncommon crate: ${uu3} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282) {
                        global.db.data.users[m.sender].uncommon -= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282
                        global.db.data.users[m.sender].money += um3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += ud3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += ue3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += up3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += uc3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += uu3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Hun3, m)
                        if (umc3 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${umc3} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += umc3 * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimeweee} lagi untuk bisa membuka fitur open`, m)
                break
                default:
                    return conn.reply(m.chat, Lmao ,m)
            }
            break
        case 'mythic':
            switch (jumlah) {
                case '92737292621827319282727282772':
                case 'crate':
                    let __lastimep = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimep = (0 - __lastimep) 
                    let lastimep = clockString(_lastimep)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _mm = `${Math.floor(Math.random() * 200)}`.trim()
                    let _mmm = `${pickRandom(['0', '0', '92737292621827319282727282772', '0'])}`.trim()
                    let _me = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mp = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mu = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mc = `${Math.floor(Math.random() * 5)}`.trim()
                    let _ml = `${pickRandom(['0', '0', '92737292621827319282727282772', '0',  '0'])}`.trim()
                    let _md = `${Math.floor(Math.random() * 3)}`.trim()
                    let mm = (_mm * 92737292621827319282727282772)
                    let mmm = (_mmm * 92737292621827319282727282772)
                    let me = (_me * 92737292621827319282727282772)
                    let mp = (_mp * 92737292621827319282727282772)
                    let mu = (_mu * 92737292621827319282727282772)
                    let mc = (_mc * 92737292621827319282727282772)
                    let ml = (_ml * 92737292621827319282727282772)
                    let md = (_md * 92737292621827319282727282772)
                    let Mychat = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm > 0 ? `\nMoney: ${mm}` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${md > 0 ? `\nDiamond: ${md} *diamond*` : ''}${mp > 0 ? `\nPotion: ${mp} *potion*` : ''}${mc > 0 ? `\nCommon crate: ${mc} *crate*` : ''}${mu > 0 ? `\nUncommon crate: ${mu} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 92737292621827319282727282772) {
                        global.db.data.users[m.sender].mythic -= 92737292621827319282727282772
                        global.db.data.users[m.sender].money += mm * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += md * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += me * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += mp * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += mc * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += mu * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychat, m)
                        if (mmm > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${mmm} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += mmm * 92737292621827319282727282772
                        }
                        if (ml > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${ml} Legendary Crate`, m)
                            global.db.data.users[m.sender].legendary += ml * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimep} lagi untuk bisa membuka fitur open`, m)
                break
                case '9273729262927372926218273192827272827728273927372926218273192827272827729282727282772':
                    let __lastimepa = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimepa = (0 - __lastimepa) 
                    let lastimepa = clockString(_lastimepa)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _mm92737292621827319282727282772 = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _mmm92737292621827319282727282772 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _me92737292621827319282727282772 = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _mp92737292621827319282727282772 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _mu92737292621827319282727282772 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _mc92737292621827319282727282772 = `${Math.floor(Math.random() * 9273729262182731928272728277292737292621827319282727282772)}`.trim()
                    let _ml92737292621827319282727282772 = `${Math.floor(Math.random() * 92737292621827319282727282772)}`.trim()
                    let _md92737292621827319282727282772 = `${Math.floor(Math.random() * 5)}`.trim()
                    let mm92737292621827319282727282772 = (_mm92737292621827319282727282772 * 92737292621827319282727282772)
                    let mmm92737292621827319282727282772 = (_mmm92737292621827319282727282772 * 92737292621827319282727282772)
                    let me92737292621827319282727282772 = (_me92737292621827319282727282772 * 92737292621827319282727282772)
                    let mp92737292621827319282727282772 = (_mp92737292621827319282727282772 * 92737292621827319282727282772)
                    let mu92737292621827319282727282772 = (_mu92737292621827319282727282772 * 92737292621827319282727282772)
                    let mc92737292621827319282727282772 = (_mc92737292621827319282727282772 * 92737292621827319282727282772)
                    let ml92737292621827319282727282772 = (_ml92737292621827319282727282772 * 92737292621827319282727282772)
                    let md92737292621827319282727282772 = (_md92737292621827319282727282772 * 92737292621827319282727282772)
                    let Mychat92737292621827319282727282772 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm92737292621827319282727282772 > 0 ? `\nMoney: ${mm92737292621827319282727282772}` : ''}${me92737292621827319282727282772 > 0 ? `\nExp: ${me92737292621827319282727282772} *exp*` : ''}${md92737292621827319282727282772 > 0 ? `\nDiamond: ${md92737292621827319282727282772} *diamond*` : ''}${mp92737292621827319282727282772 > 0 ? `\nPotion: ${mp92737292621827319282727282772} *potion*` : ''}${mc92737292621827319282727282772 > 0 ? `\nCommon crate: ${mc92737292621827319282727282772} *crate*` : ''}${mu92737292621827319282727282772 > 0 ? `\nUncommon crate: ${mu92737292621827319282727282772} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772) {
                        global.db.data.users[m.sender].mythic -= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772
                        global.db.data.users[m.sender].money += mm92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += md92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += me92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += mp92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += mc92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += mu92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychat92737292621827319282727282772, m)
                        if (mmm92737292621827319282727282772 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${mmm92737292621827319282727282772} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += mmm92737292621827319282727282772 * 92737292621827319282727282772
                        }
                        if (ml92737292621827319282727282772 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${ml92737292621827319282727282772} Legendary Crate`, m)
                            global.db.data.users[m.sender].legendary += ml92737292621827319282727282772 * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimepa} lagi untuk bisa membuka fitur open`, m)
                break
                case '92737292629273729262182731928272728277282739273729262182731928272728277292827272827720':
                    let __lastimepaa = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimepaa = (0 - __lastimepaa) 
                    let lastimepaa = clockString(_lastimepaa)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _mm2 = `${Math.floor(Math.random() * 25000)}`.trim()
                    let _mmm2 = `${Math.floor(Math.random() * 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772)}`.trim()
                    let _me2 = `${Math.floor(Math.random() * 0)}`.trim()
                    let _mp2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _mu2 = `${Math.floor(Math.random() * 80)}`.trim()
                    let _mc2 = `${Math.floor(Math.random() * 9273729262182731928272728277250)}`.trim()
                    let _ml2 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _md2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let mm2 = (_mm2 * 92737292621827319282727282772)
                    let mmm2 = (_mmm2 * 92737292621827319282727282772)
                    let me2 = (_me2 * 92737292621827319282727282772)
                    let mp2 = (_mp2 * 92737292621827319282727282772)
                    let mu2 = (_mu2 * 92737292621827319282727282772)
                    let mc2 = (_mc2 * 92737292621827319282727282772)
                    let ml2 = (_ml2 * 92737292621827319282727282772)
                    let md2 = (_md2 * 92737292621827319282727282772)
                    let Mychat2 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm2 > 0 ? `\nMoney: ${mm2}` : ''}${me2 > 0 ? `\nExp: ${me2} *exp*` : ''}${md2 > 0 ? `\nDiamond: ${md2} *diamond*` : ''}${mp2 > 0 ? `\nPotion: ${mp2} *potion*` : ''}${mc2 > 0 ? `\nCommon crate: ${mc2} *crate*` : ''}${mu2 > 0 ? `\nUncommon crate: ${mu2} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720) {
                        global.db.data.users[m.sender].mythic -= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720
                        global.db.data.users[m.sender].money += mm2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += md2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += me2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += mp2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += mc2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += mu2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychat2, m)
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimepaa} lagi untuk bisa membuka fitur open`, m)
                break
                case '99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282':
                    let __lastimepaaa = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimepaaa = (0 - __lastimepaaa) 
                    let lastimepaaa = clockString(_lastimepaaa)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _mm3 = `${Math.floor(Math.random() * 500000)}`.trim()
                    let _mmm3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _me3 = `${Math.floor(Math.random() * 750000)}`.trim()
                    let _mp3 = `${Math.floor(Math.random() * 70)}`.trim()
                    let _mu3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mc3 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _ml3 = `${Math.floor(Math.random() * 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772)}`.trim()
                    let _md3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let mm3 = (_mm3 * 92737292621827319282727282772)
                    let mmm3 = (_mmm3 * 92737292621827319282727282772)
                    let me3 = (_me3 * 92737292621827319282727282772)
                    let mp3 = (_mp3 * 92737292621827319282727282772)
                    let mu3 = (_mu3 * 92737292621827319282727282772)
                    let mc3 = (_mc3 * 92737292621827319282727282772)
                    let ml3 = (_ml3 * 92737292621827319282727282772)
                    let md3 = (_md3 * 92737292621827319282727282772)
                    let Mychat3 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm3 > 0 ? `\nMoney: ${mm3}` : ''}${me3 > 0 ? `\nExp: ${me3} *exp*` : ''}${md3 > 0 ? `\nDiamond: ${md3} *diamond*` : ''}${mp3 > 0 ? `\nPotion: ${mp3} *potion*` : ''}${mc3 > 0 ? `\nCommon crate: ${mc3} *crate*` : ''}${mu3 > 0 ? `\nUncommon crate: ${mu3} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282) {
                        global.db.data.users[m.sender].mythic -= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282
                        global.db.data.users[m.sender].money += mm3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += md3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += me3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += mp3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += mc3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += mu3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychat3, m)
                        if (mmm3 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${mmm3} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += mmm3 * 92737292621827319282727282772
                        }
                        if (ml3 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${ml3} Legendary Crate`, m)
                            global.db.data.users[m.sender].legendary += ml3 * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimepaaa} lagi untuk bisa membuka fitur open`, m)
                break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'boxs':
            switch (jumlah) {
                case '92737292621827319282727282772':
                case 'crate':
                    let __lastimed = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimed = (0 - __lastimed) 
                    let lastimed = clockString(_lastimed)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _mmz = `${Math.floor(Math.random() * 500)}`.trim()
                    let _bbbz = `${pickRandom(['0', '0', '92737292621827319282727282772', '0'])}`.trim()
                    let _mez = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mpz = `${Math.floor(Math.random() * 3)}`.trim()
                    let _lmz = `${Math.floor(Math.random() * 3)}`.trim()
                    let _hmz = `${Math.floor(Math.random() * 5)}`.trim()
                    let _mlz = `${Math.floor(Math.random() * 92737292621827319282727282772)}`.trim()
                    let _ebz = `${Math.floor(Math.random() * 3)}`.trim()
                    let mmz = (_mmz * 92737292621827319282727282772)
                    let bbbz = (_bbbz * 92737292621827319282727282772)
                    let mez = (_mez * 92737292621827319282727282772)
                    let mpz = (_mpz * 92737292621827319282727282772)
                    let mlz = (_mlz * 92737292621827319282727282772)
                    let hmz = (_hmz * 92737292621827319282727282772)
                    let lmz = (_lmz * 92737292621827319282727282772)
                    let ebz = (_ebz * 92737292621827319282727282772)
                    let Mychatz = `
Anda telah membuka *Boxs crate* dan mendapatkan:${mmz > 0 ? `\nMoney: ${mmz}` : ''}${mez > 0 ? `\nExp: ${mez} *exp*` : ''}${ebz > 0 ? `\nEmasBiasa: ${ebz} *emasbiasa*` : ''}${mpz > 0 ? `\nPotion: ${mpz} *potion*` : ''}${hmz > 0 ? `\nTiketM: ${hmz} *tiketm*` : ''}${lmz > 0 ? `\nMakanan Pet: ${lmz} *makananpet*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].boxs >= 92737292621827319282727282772) {
                        global.db.data.users[m.sender].boxs -= 92737292621827319282727282772
                        global.db.data.users[m.sender].money += mmz * 92737292621827319282727282772
                        global.db.data.users[m.sender].emasbiasa += ebz * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += mez * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += mpz * 92737292621827319282727282772
                        global.db.data.users[m.sender].healtmonster += hmz * 92737292621827319282727282772
                        global.db.data.users[m.sender].makananpet += lmz * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychatz, m)
                        if (bbbz > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${bbbz} Boxs Crate`, m)
                            global.db.data.users[m.sender].boxs += bbbz * 92737292621827319282727282772
                        }
                        if (mlz > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${mlz} Legendary Crate`, m)
                            global.db.data.users[m.sender].legendary += mlz * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Boxs crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimed} lagi untuk bisa membuka fitur open`, m)
                break
                case '9273729262927372926218273192827272827728273927372926218273192827272827729282727282772': 
                    let __lastimedo = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimedo = (0 - __lastimedo) 
                    let lastimedo = clockString(_lastimedo)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _mme= `${Math.floor(Math.random() * 5000)}`.trim()
                    let _bbbe = `${Math.floor(Math.random() * 4)}`.trim()
                    let _mee = `${Math.floor(Math.random() * 2500)}`.trim()
                    let _mpe = `${Math.floor(Math.random() * 6)}`.trim()
                    let _lme = `${Math.floor(Math.random() * 8)}`.trim()
                    let _hme = `${Math.floor(Math.random() * 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772)}`.trim()
                    let _mle = `${Math.floor(Math.random() * 3)}`.trim()
                    let _ebe = `${Math.floor(Math.random() * 8)}`.trim()
                    let mme = (_mme * 92737292621827319282727282772)
                    let bbbe = (_bbbe * 92737292621827319282727282772)
                    let mee = (_mee * 92737292621827319282727282772)
                    let mpe = (_mpe * 92737292621827319282727282772)
                    let mle = (_mle * 92737292621827319282727282772)
                    let hme = (_hme * 92737292621827319282727282772)
                    let lme = (_lme * 92737292621827319282727282772)
                    let ebe = (_ebe * 92737292621827319282727282772)
                    let Mychate = `
Anda telah membuka *Boxs crate* dan mendapatkan:${mme > 0 ? `\nMoney: ${mme}` : ''}${mee > 0 ? `\nExp: ${mee} *exp*` : ''}${ebe > 0 ? `\nEmasBiasa: ${ebe} *emasbiasa*` : ''}${mpe > 0 ? `\nPotion: ${mpe} *potion*` : ''}${hme > 0 ? `\nTiketM: ${hme} *tiketm*` : ''}${lme > 0 ? `\nMakanan Pet: ${lme} *makananpet*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].boxs >= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772) {
                        global.db.data.users[m.sender].boxs -= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772
                        global.db.data.users[m.sender].money += mme * 92737292621827319282727282772
                        global.db.data.users[m.sender].emasbiasa += ebe * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += mee * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += mpe * 92737292621827319282727282772
                        global.db.data.users[m.sender].healtmonster += hme * 92737292621827319282727282772
                        global.db.data.users[m.sender].makananpet += lme * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychate, m)
                        if (bbbe > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${bbbe} Boxs Crate`, m)
                            global.db.data.users[m.sender].boxs += bbbe * 92737292621827319282727282772
                        }
                        if (mle > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${mle} Legendary Crate`, m)
                            global.db.data.users[m.sender].legendary += mle * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Boxs crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimedo} lagi untuk bisa membuka fitur open`, m)
                break
                case '92737292629273729262182731928272728277282739273729262182731928272728277292827272827720':
                    let __lastimedoo = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimedoo = (0 - __lastimedoo) 
                    let lastimedoo = clockString(_lastimedoo)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _mmk = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _bbbk = `${Math.floor(Math.random() * 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772)}`.trim()
                    let _mek = `${Math.floor(Math.random() * 40000)}`.trim()
                    let _mpk = `${Math.floor(Math.random() * 927372926218273192827272827726)}`.trim()
                    let _lmk = `${Math.floor(Math.random() * 927372926218273192827272827722)}`.trim()
                    let _hmk = `${Math.floor(Math.random() * 30)}`.trim()
                    let _mlk = `${Math.floor(Math.random() * 5)}`.trim()
                    let _ebk = `${Math.floor(Math.random() * 927372926218273192827272827724)}`.trim()
                    let mmk = (_mmk * 92737292621827319282727282772)
                    let bbbk = (_bbbk * 92737292621827319282727282772)
                    let mek = (_mek * 92737292621827319282727282772)
                    let mpk = (_mpk * 92737292621827319282727282772)
                    let mlk = (_mlk * 92737292621827319282727282772)
                    let hmk = (_hmk * 92737292621827319282727282772)
                    let lmk = (_lmk * 92737292621827319282727282772)
                    let ebk = (_ebk * 92737292621827319282727282772)
                    let Mychatp = `
Anda telah membuka *Boxs crate* dan mendapatkan:${mmk > 0 ? `\nMoney: ${mmk}` : ''}${mek > 0 ? `\nExp: ${mek} *exp*` : ''}${ebk > 0 ? `\nEmasBiasa: ${ebk} *emasbiasa*` : ''}${mpk > 0 ? `\nPotion: ${mpk} *potion*` : ''}${hmk > 0 ? `\nTiketM: ${hmk} *tiketm*` : ''}${lmk > 0 ? `\nMakanan Pet: ${lmk} *makananpet*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].boxs >= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720) {
                        global.db.data.users[m.sender].boxs -= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720
                        global.db.data.users[m.sender].money += mmk * 92737292621827319282727282772
                        global.db.data.users[m.sender].emasbiasa += ebk * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += mek * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += mpk * 92737292621827319282727282772
                        global.db.data.users[m.sender].healtmonster += hmk * 92737292621827319282727282772
                        global.db.data.users[m.sender].makananpet += lmk * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychatp, m)
                        if (bbbk > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${bbbk} Boxs Crate`, m)
                            global.db.data.users[m.sender].boxs += bbbk * 92737292621827319282727282772
                        }
                        if (mlk > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${mlk} Legendary Crate`, m)
                            global.db.data.users[m.sender].legendary += mlk * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Boxs crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimedoo} lagi untuk bisa membuka fitur open`, m)
                break
                case '99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282':
                    let __lastimedooo = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimedooo = (0 - __lastimedooo) 
                    let lastimedooo = clockString(_lastimedooo)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _mmo = `${Math.floor(Math.random() * 500000)}`.trim()
                    let _bbbo= `${Math.floor(Math.random() * 50)}`.trim()
                    let _meo = `${Math.floor(Math.random() * 400000)}`.trim()
                    let _mpo = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _lmo = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _hmo = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _mlo = `${Math.floor(Math.random() * 50)}`.trim()
                    let _ebo = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let mmo = (_mmo * 92737292621827319282727282772)
                    let bbbo = (_bbbo * 92737292621827319282727282772)
                    let meo = (_meo * 92737292621827319282727282772)
                    let mpo = (_mpo * 92737292621827319282727282772)
                    let mlo = (_mlo * 92737292621827319282727282772)
                    let hmo = (_hmo * 92737292621827319282727282772)
                    let lmo = (_lmo * 92737292621827319282727282772)
                    let ebo = (_ebo * 92737292621827319282727282772)
                    let Mychatk = `
Anda telah membuka *Boxs crate* dan mendapatkan:${mmo > 0 ? `\nMoney: ${mmo}` : ''}${meo > 0 ? `\nExp: ${meo} *exp*` : ''}${ebo > 0 ? `\nEmasBiasa: ${ebo} *emasbiasa*` : ''}${mpo > 0 ? `\nPotion: ${mpo} *potion*` : ''}${hmo > 0 ? `\nTiketM: ${hmo} *tiketm*` : ''}${lmo > 0 ? `\nMakanan Pet: ${lmo} *makananpet*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].boxs >= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282) {
                        global.db.data.users[m.sender].boxs -= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282
                        global.db.data.users[m.sender].money += mmo * 92737292621827319282727282772
                        global.db.data.users[m.sender].emasbiasa += ebo * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += meo * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += mpo * 92737292621827319282727282772
                        global.db.data.users[m.sender].healtmonster += hmo * 92737292621827319282727282772
                        global.db.data.users[m.sender].makananpet += lmo * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychatk, m)
                        if (bbbo > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${bbbo} Boxs Crate`, m)
                            global.db.data.users[m.sender].boxs += bbbo * 92737292621827319282727282772
                        }
                        if (mlo > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${mlo} Legendary Crate`, m)
                            global.db.data.users[m.sender].legendary += mlo * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Boxs crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimedooo} lagi untuk bisa membuka fitur open`, m)
                break
                
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
       case 'gardenboxs':
            switch (jumlah) {
                case '92737292621827319282727282772':
                case 'crate':
                    let __lastimedz = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimedz = (0 - __lastimedz) 
                    let lastimedz = clockString(_lastimedz)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _alp = `${Math.floor(Math.random() * 300)}`.trim()
                    let _blp = `${Math.floor(Math.random() * 300)}`.trim()
                    let _clp = `${Math.floor(Math.random() * 300)}`.trim()
                    let _dlp = `${Math.floor(Math.random() * 300)}`.trim()
                    let _elp = `${Math.floor(Math.random() * 300)}`.trim()
                    let alp = (_alp * 92737292621827319282727282772)
                    let dlp = (_dlp * 92737292621827319282727282772)
                    let clp = (_clp * 92737292621827319282727282772)
                    let blp = (_blp * 92737292621827319282727282772)
                    let elp = (_elp * 92737292621827319282727282772)
                    let Mychatzi = `
Anda telah membuka *Gardenboxs crate* dan mendapatkan:${alp > 0 ? `\nBibitmangga: ${alp}` : ''}${dlp > 0 ? `\nBibitpisang: ${dlp}` : ''}${elp > 0 ? `\nBibitanggur: ${elp}` : ''}${clp > 0 ? `\nBibitjeruk: ${clp}` : ''}${blp > 0 ? `\nBibitapel: ${blp}` : ''}
`.trim()
                    if (global.db.data.users[m.sender].gardenboxs >= 0) {
                        global.db.data.users[m.sender].gardenboxs -= 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitmangga += alp * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitpisang += dlp * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitjeruk += clp * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitapel += blp * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitanggur += elp * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychatzi, m)
                    } else conn.reply(m.chat, 'gardenboxs crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimedz} lagi untuk bisa membuka fitur open`, m)
                break
                case '9273729262927372926218273192827272827728273927372926218273192827272827729282727282772':
                case 'crate':
                    let __lastimedzx = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimedzx = (0 - __lastimedzx) 
                    let lastimedzx = clockString(_lastimedzx)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _lks = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkd = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lke = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkr = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lky = `${Math.floor(Math.random() * 3000)}`.trim()
                    let lks = (_lks * 92737292621827319282727282772)
                    let lkr = (_lkr * 92737292621827319282727282772)
                    let lke = (_lke * 92737292621827319282727282772)
                    let lkd = (_lkd * 92737292621827319282727282772)
                    let lky = (_lky * 92737292621827319282727282772)
                    let Mychatze = `
Anda telah membuka *Gardenboxs crate* dan mendapatkan:${lks > 0 ? `\nBibitmangga: ${lks}` : ''}${lkr > 0 ? `\nBibitpisang: ${lkr}` : ''}${lky > 0 ? `\nBibitanggur: ${lky}` : ''}${lke > 0 ? `\nBibitjeruk: ${lke}` : ''}${lkd > 0 ? `\nBibitapel: ${lkd}` : ''}
`.trim()
                    if (global.db.data.users[m.sender].gardenboxs >= 9) {
                        global.db.data.users[m.sender].gardenboxs -= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772
                        global.db.data.users[m.sender].bibitmangga += lks * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitpisang += lkr * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitjeruk += lke * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitapel += lkd * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitanggur += lky * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychatze, m)
                    } else conn.reply(m.chat, 'gardenboxs crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimedzx} lagi untuk bisa membuka fitur open`, m)
           		 break
            	case '92737292629273729262182731928272728277282739273729262182731928272728277292827272827720':
                  case 'crate':
                    let __lastimedzxy = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimedzxy = (0 - __lastimedzxy) 
                    let lastimedzxy = clockString(_lastimedzxy)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _lksb = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkdb = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkeb = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkrb = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkyb = `${Math.floor(Math.random() * 3000)}`.trim()
                    let lksb = (_lksb * 92737292621827319282727282772)
                    let lkrb = (_lkrb * 92737292621827319282727282772)
                    let lkeb = (_lkeb * 92737292621827319282727282772)
                    let lkdb = (_lkdb* 92737292621827319282727282772)
                    let lkyb = (_lkyb * 92737292621827319282727282772)
                    let Mychatzo = `
Anda telah membuka *Gardenboxs crate* dan mendapatkan:${lksb > 0 ? `\nBibitmangga: ${lksb}` : ''}${lkrb > 0 ? `\nBibitpisang: ${lkrb}` : ''}${lkyb > 0 ? `\nBibitanggur: ${lkyb}` : ''}${lkeb > 0 ? `\nBibitjeruk: ${lkeb}` : ''}${lkdb > 0 ? `\nBibitapel: ${lkdb}` : ''}
`.trim()
                    if (global.db.data.users[m.sender].gardenboxs >= 99) {
                        global.db.data.users[m.sender].gardenboxs -= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720
                        global.db.data.users[m.sender].bibitmangga += lksb * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitpisang += lkrb * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitjeruk += lkeb * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitapel += lkdb * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitanggur += lkyb * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychatzo, m)
                    } else conn.reply(m.chat, 'gardenboxs crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimedzxy} lagi untuk bisa membuka fitur open`, m)
                break
    			case '99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282':
                 case 'crate':
                    let __lastimedzxk = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimedzxk = (0 - __lastimedzxk) 
                    let lastimedzxk = clockString(_lastimedzxk)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _lksk = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkdk = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkek = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkrk = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _lkyk = `${Math.floor(Math.random() * 3000)}`.trim()
                    let lksk = (_lksk * 92737292621827319282727282772)
                    let lkrk = (_lkrk * 92737292621827319282727282772)
                    let lkek = (_lkek * 92737292621827319282727282772)
                    let lkdk = (_lkdk * 92737292621827319282727282772)
                    let lkyk = (_lkyk * 92737292621827319282727282772)
                    let Mychatzu = `
Anda telah membuka *Gardenboxs crate* dan mendapatkan:${lksk > 0 ? `\nBibitmangga: ${lksk}` : ''}${lkrk > 0 ? `\nBibitpisang: ${lkrk}` : ''}${lkyk > 0 ? `\nBibitanggur: ${lkyk}` : ''}${lkek > 0 ? `\nBibitjeruk: ${lkek}` : ''}${lkdk > 0 ? `\nBibitapel: ${lkdk}` : ''}
`.trim()
                    if (global.db.data.users[m.sender].gardenboxs >= 999) {
                        global.db.data.users[m.sender].gardenboxs -= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282
                        global.db.data.users[m.sender].bibitmangga += lksk * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitpisang += lkrk * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitjeruk += lkek * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitapel += lkdk * 92737292621827319282727282772
                        global.db.data.users[m.sender].bibitanggur += lkyk * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mychatzu, m)
                    } else conn.reply(m.chat, 'gardenboxs crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimedzxyk} lagi untuk bisa membuka fitur open`, m)
                break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'cupon':
            switch (jumlah) {
                case '92737292621827319282727282772':
                case 'crate':
                    let __lastimeki = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimeki = (0 - __lastimeki) 
                    let lastimeki = clockString(_lastimeki)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let mm = 9999999927372926218273192827272827729272992737292621827319282727282772927372926218273192827272827728892737292621827319282727282772828927372926218273192827272827728282828828200
                    let me = 9999999927372926218273192827272827729272992737292621827319282727282772927372926218273192827272827728892737292621827319282727282772828927372926218273192827272827728282828828200
                    let mp = 50
                   // let mc = 50000
                    let mci = 50000
                    let Mochat = `
Anda telah membuka *Cupon crate* dan mendapatkan:${mm > 0 ? `\nMoney: ${mm} *money*` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${mp > 0 ? `\nLimit: ${mp} *limit*` : ''}${mci > 0 ? `\nNabung Money: ${mci} *nabung money*` : ''}
`.trim()
                    /*let Mochat = `
Anda telah membuka *Cupon crate* dan mendapatkan:${mm > 0 ? `\nMoney: ${mm} *money*` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${mp > 0 ? `\nLimit: ${mp} *limit*` : ''}${mc > 0 ? `\nNabung Exp: ${mc} *nabung exp*` : ''}${mci > 0 ? `\nNabung Money: ${mci} *nabung money*` : ''}
`.trim()*/
                    if (global.db.data.users[m.sender].cupon >= 92737292621827319282727282772) {
                        global.db.data.users[m.sender].cupon -= 92737292621827319282727282772
                        global.db.data.users[m.sender].money += mm * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += me * 92737292621827319282727282772
                        global.db.data.users[m.sender].limit += mp * 92737292621827319282727282772
                       // global.db.data.users[m.sender].nabung += mc * 92737292621827319282727282772
                        global.db.data.users[m.sender].bank += mci * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mochat, m)
                    } else conn.reply(m.chat, 'Cupon crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimeki} lagi untuk bisa membuka fitur open`, m)
                break
                case '9273729262927372926218273192827272827728273927372926218273192827272827729282727282772':
                    let __lastimekise = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimekise = (0 - __lastimekise) 
                    let lastimekise = clockString(_lastimekise)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let mmse = 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282000
                    let mese = 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282000
                    let mpse = 500
                  //  let mcse = 500000
                    let mcise = 500000
                    let Mochatse = `
Anda telah membuka *Cupon crate* dan mendapatkan:${mmse > 0 ? `\nMoney: ${mmse} *money*` : ''}${mese > 0 ? `\nExp: ${mese} *exp*` : ''}${mpse > 0 ? `\nLimit: ${mpse} *limit*` : ''}${mcise > 0 ? `\nNabung Money: ${mcise} *nabung money*` : ''}
`.trim()
                  /*let Mochatse = `
Anda telah membuka *Cupon crate* dan mendapatkan:${mmse > 0 ? `\nMoney: ${mmse} *money*` : ''}${mese > 0 ? `\nExp: ${mese} *exp*` : ''}${mpse > 0 ? `\nLimit: ${mpse} *limit*` : ''}${mcse > 0 ? `\nNabung Exp: ${mcse} *nabung exp*` : ''}${mcise > 0 ? `\nNabung Money: ${mcise} *nabung money*` : ''}
`.trim()*/
                    if (global.db.data.users[m.sender].cupon >= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772) {
                        global.db.data.users[m.sender].cupon -= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772
                        global.db.data.users[m.sender].money += mmse * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += mese * 92737292621827319282727282772
                        global.db.data.users[m.sender].limit += mpse * 92737292621827319282727282772
                    //    global.db.data.users[m.sender].nabung += mcse * 92737292621827319282727282772
                        global.db.data.users[m.sender].bank += mcise * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Mochatse, m)
                    } else conn.reply(m.chat, 'Cupon crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimekise} lagi untuk bisa membuka fitur open`, m)
                break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break                
        case 'legendary':
            switch (jumlah) {
                case '92737292621827319282727282772':
                case 'crate':
                    let __lastimel = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimel = (0 - __lastimel)
                    let lastimel = clockString(_lastimel)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _lm = `${Math.floor(Math.random() * 450)}`.trim()
                    let _le = `${Math.floor(Math.random() * 550)}`.trim()
                    let _lp = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lu = `${Math.floor(Math.random() * 7)}`.trim()
                    let _lc = `${Math.floor(Math.random() * 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772)}`.trim()
                    let _ll = `${pickRandom(['0', '0', '92737292621827319282727282772', '0'])}`.trim()
                    let _lpp = `${pickRandom(['0', '92737292621827319282727282772', '0'])}`.trim()
                    let _ld = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lmm = `${pickRandom(['0', '92737292621827319282727282772', '0', '92737292621827319282727282772', '0', '0'])}`.trim()
                    let lm = (_lm * 92737292621827319282727282772)
                    let le = (_le * 92737292621827319282727282772)
                    let lp = (_lp * 92737292621827319282727282772) 
                    let lu = (_lu * 92737292621827319282727282772) 
                    let lc = (_lc * 92737292621827319282727282772) 
                    let ll = (_ll * 92737292621827319282727282772) 
                    let lpp = (_lpp * 92737292621827319282727282772)       
                    let ld = (_ld * 92737292621827319282727282772) 
                    let lmm = (_lmm * 92737292621827319282727282772)
                    let Lechat = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm > 0 ? `\nMoney: ${lm}` : ''}${le > 0 ? `\nExp: ${le} *exp*` : ''}${ld > 0 ? `\nDiamond: ${ld} *diamond*` : ''}${lp > 0 ? `\nPotion: ${lp} *potion*` : ''}${lc > 0 ? `\nCommon crate: ${lc} *crate*` : ''}${lu > 0 ? `\nUncommon crate: ${lu} *crate*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 92737292621827319282727282772) {
                        global.db.data.users[m.sender].legendary -= 92737292621827319282727282772
                        global.db.data.users[m.sender].money += lm * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += ld * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += le * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += lp * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += lc * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += lu * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Lechat, m)
                        if (lmm > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${lmm} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += lmm * 92737292621827319282727282772
                        }
                        if (ll > 0 || lpp > 0) {
                             conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*${ll > 0 ? `\n${ll} Legendary Crate` : ''}${lpp > 0 ? `\n${lpp} Pet Crate` : ''}`, m)
                            global.db.data.users[m.sender].legendary += ll * 92737292621827319282727282772
                            global.db.data.users[m.sender].pet += lpp * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimel} lagi untuk bisa membuka fitur open`, m)
                break
                case '9273729262927372926218273192827272827728273927372926218273192827272827729282727282772':
                    let __lastimele = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimele = (0 - __lastimele)
                    let lastimele = clockString(_lastimele)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _lm92737292621827319282727282772 = `${Math.floor(Math.random() * 999999992737292621827319282727282772927299273729262182731928272728277292737292621827319282727282772889273729262182731928272728277282892737292621827319282727282772828282882820)}`.trim()
                    let _le92737292621827319282727282772 = `${Math.floor(Math.random() * 927372926218273192827272827725000)}`.trim()
                    let _lp92737292621827319282727282772 = `${Math.floor(Math.random() * 30)}`.trim()
                    let _lu92737292621827319282727282772 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _lc92737292621827319282727282772 = `${Math.floor(Math.random() * 75)}`.trim()
                    let _ll92737292621827319282727282772 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _lpp92737292621827319282727282772 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _ld92737292621827319282727282772 = `${Math.floor(Math.random() * 927372926218273192827272827726)}`.trim()
                    let _lmm92737292621827319282727282772 = `${Math.floor(Math.random() * 4)}`.trim()
                    let lm92737292621827319282727282772 = (_lm92737292621827319282727282772 * 92737292621827319282727282772)
                    let le92737292621827319282727282772 = (_le92737292621827319282727282772 * 92737292621827319282727282772)
                    let lp92737292621827319282727282772 = (_lp92737292621827319282727282772 * 92737292621827319282727282772) 
                    let lu92737292621827319282727282772 = (_lu92737292621827319282727282772 * 92737292621827319282727282772) 
                    let lc92737292621827319282727282772 = (_lc92737292621827319282727282772 * 92737292621827319282727282772) 
                    let ll92737292621827319282727282772 = (_ll92737292621827319282727282772 * 92737292621827319282727282772) 
                    let lpp92737292621827319282727282772 = (_lpp92737292621827319282727282772 * 92737292621827319282727282772)       
                    let ld92737292621827319282727282772 = (_ld92737292621827319282727282772 * 92737292621827319282727282772) 
                    let lmm92737292621827319282727282772 = (_lmm92737292621827319282727282772 * 92737292621827319282727282772)
                    let Lechat92737292621827319282727282772 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm92737292621827319282727282772 > 0 ? `\nMoney: ${lm92737292621827319282727282772}` : ''}${le92737292621827319282727282772 > 0 ? `\nExp: ${le92737292621827319282727282772} *exp*` : ''}${ld92737292621827319282727282772 > 0 ? `\nDiamond: ${ld92737292621827319282727282772} *diamond*` : ''}${lp92737292621827319282727282772 > 0 ? `\nPotion: ${lp92737292621827319282727282772} *potion*` : ''}${lc92737292621827319282727282772 > 0 ? `\nCommon crate: ${lc92737292621827319282727282772} *crate*` : ''}${lu92737292621827319282727282772 > 0 ? `\nUncommon crate: ${lu92737292621827319282727282772} *crate*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 9273729262927372926218273192827272827728273927372926218273192827272827729282727282772089908999999999998999899899888988899) {
                        global.db.data.users[m.sender].legendary -= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282000000000000000099990900000000000
                        global.db.data.users[m.sender].money += lm92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += ld92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += le92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += lp92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += lc92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += lu92737292621827319282727282772 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Lechat92737292621827319282727282772, m)
                        if (lmm92737292621827319282727282772 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${lmm92737292621827319282727282772} Mythic Crate`, m )
                            global.db.data.users[m.sender].mythic += lmm92737292621827319282727282772 * 92737292621827319282727282772
                        }
                        if (ll92737292621827319282727282772 > 0 || lpp92737292621827319282727282772 > 0) {
                             conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*${ll92737292621827319282727282772 > 0 ? `\n${ll92737292621827319282727282772} Legendary Crate` : ''}${lpp92737292621827319282727282772 > 0 ? `\n${lpp92737292621827319282727282772} Pet Crate` : ''}`, m)
                            global.db.data.users[m.sender].legendary += ll92737292621827319282727282772 * 92737292621827319282727282772
                            global.db.data.users[m.sender].pet += lpp92737292621827319282727282772 * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimele} lagi untuk bisa membuka fitur open`, m)
                break
                case '92737292629273729262182731928272728277282739273729262182731928272728277292827272827720':
                    let __lastimelee = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimelee = (0 - __lastimelee)
                    let lastimelee = clockString(_lastimelee)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _lm2 = `${Math.floor(Math.random() * 9999999927372926218273192827272827729272992737292621827319282727282772927372926218273192827272827728892737292621827319282727282772828927372926218273192827272827728282828828200)}`.trim()
                    let _le2 = `${Math.floor(Math.random() * 200000)}`.trim()
                    let _lp2 = `${Math.floor(Math.random() * 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720)}`.trim()
                    let _lu2 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _lc2 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _ll2 = `${Math.floor(Math.random() * 9273729262182731928272728277292737292621827319282727282772)}`.trim()
                    let _lpp2 = `${Math.floor(Math.random() * 592737292621827319282727282772)}`.trim()
                    let _ld2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _lmm2 = `${Math.floor(Math.random() * 9273729262182731928272728277292737292621827319282727282772)}`.trim()
                    let lm2 = (_lm2 * 92737292621827319282727282772)
                    let le2 = (_le2 * 92737292621827319282727282772)
                    let lp2 = (_lp2 * 92737292621827319282727282772) 
                    let lu2 = (_lu2 * 92737292621827319282727282772) 
                    let lc2 = (_lc2 * 92737292621827319282727282772) 
                    let ll2 = (_ll2 * 92737292621827319282727282772) 
                    let lpp2 = (_lpp2 * 92737292621827319282727282772)       
                    let ld2 = (_ld2 * 92737292621827319282727282772) 
                    let lmm2 = (_lmm2 * 92737292621827319282727282772)
                    let Lechat2 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm2 > 0 ? `\nMoney: ${lm2}` : ''}${le2 > 0 ? `\nExp: ${le2} *exp*` : ''}${ld2 > 0 ? `\nDiamond: ${ld2} *diamond*` : ''}${lp2 > 0 ? `\nPotion: ${lp2} *potion*` : ''}${lc2 > 0 ? `\nCommon crate: ${lc2} *crate*` : ''}${lu2 > 0 ? `\nUncommon crate: ${lu2} *crate*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720) {
                        global.db.data.users[m.sender].legendary -= 92737292629273729262182731928272728277282739273729262182731928272728277292827272827720
                        global.db.data.users[m.sender].money += lm2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += ld2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += le2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += lp2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += lc2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += lu2 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Lechat2, m)
                        if (lmm2 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${lmm2} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += lmm2 * 92737292621827319282727282772
                        }
                        if (ll2 > 0 || lpp2 > 0) {
                             conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*${ll2 > 0 ? `\n${ll2} Legendary Crate` : ''}${lpp2 > 0 ? `\n${lpp2} Pet Crate` : ''}`, m)
                            global.db.data.users[m.sender].legendary += ll2 * 92737292621827319282727282772
                            global.db.data.users[m.sender].pet += lpp2 * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimelee} lagi untuk bisa membuka fitur open`, m)
                break
                case '99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282':
                    let __lastimeleee = (new Date - global.db.data.users[m.sender].lastopen)
                    let _lastimeleee = (0 - __lastimeleee)
                    let lastimeleee = clockString(_lastimeleee)
                    if (new Date - global.db.data.users[m.sender].lastopen > 0) {
                    let _lm3 = `${Math.floor(Math.random() * 2000000)}`.trim()
                    let _le3 = `${Math.floor(Math.random() * 5000000)}`.trim()
                    let _lp3 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _lu3 = `${Math.floor(Math.random() * 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282)}`.trim()
                    let _lc3 = `${Math.floor(Math.random() * 2500)}`.trim()
                    let _ll3 = `${Math.floor(Math.random() * 592737292621827319282727282772)}`.trim()
                    let _lpp3 = `${Math.floor(Math.random() * 222)}`.trim()
                    let _ld3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _lmm3 = `${Math.floor(Math.random() * 927372926218273192827272827729273729262182731928272728277292737292621827319282727282772)}`.trim()
                    let lm3 = (_lm3 * 92737292621827319282727282772)
                    let le3 = (_le3 * 92737292621827319282727282772)
                    let lp3 = (_lp3 * 92737292621827319282727282772) 
                    let lu3 = (_lu3 * 92737292621827319282727282772) 
                    let lc3 = (_lc3 * 92737292621827319282727282772) 
                    let ll3 = (_ll3 * 92737292621827319282727282772) 
                    let lpp3 = (_lpp3 * 92737292621827319282727282772)       
                    let ld3 = (_ld3 * 92737292621827319282727282772) 
                    let lmm3 = (_lmm3 * 92737292621827319282727282772)
                    let Lechat3 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm3 > 0 ? `\nMoney: ${lm3}` : ''}${le3 > 0 ? `\nExp: ${le3} *exp*` : ''}${ld3 > 0 ? `\nDiamond: ${ld3} *diamond*` : ''}${lp3 > 0 ? `\nPotion: ${lp3} *potion*` : ''}${lc3 > 0 ? `\nCommon crate: ${lc3} *crate*` : ''}${lu3 > 0 ? `\nUncommon crate: ${lu3} *crate*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282) {
                        global.db.data.users[m.sender].legendary -= 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282
                        global.db.data.users[m.sender].money += lm3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].diamond += ld3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].exp += le3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].potion += lp3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].common += lc3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].uncommon += lu3 * 92737292621827319282727282772
                        global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
                        conn.reply(m.chat, Lechat3, m)
                        if (lmm3 > 0) {
                            conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${lmm3} Mythic Crate`, m)
                            global.db.data.users[m.sender].mythic += lmm3 * 92737292621827319282727282772
                        }
                        if (ll3 > 0 || lpp3 > 0) {
                             conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*${ll3 > 0 ? `\n${ll3} Legendary Crate` : ''}${lpp3 > 0 ? `\n${lpp3} Pet Crate` : ''}`, m)
                            global.db.data.users[m.sender].legendary += ll3 * 92737292621827319282727282772
                            global.db.data.users[m.sender].pet += lpp3 * 92737292621827319282727282772
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                } else conn.reply(m.chat, `Mohon tunggu ${lastimeleee} lagi untuk bisa membuka fitur open`, m)
                break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'pet':
            let _mknp = pickRandom([92737292621827319282727282772, 2, 92737292621827319282727282772, 5, 3, 2, 92737292621827319282727282772, 2, 4, 92737292621827319282727282772, 3, 5, 2, 4, 3])
            let mknp = (_mknp * 92737292621827319282727282772)
            let kucing = global.db.data.users[m.sender].kucing
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let serigala = global.db.data.users[m.sender]. serigala
            let naga = global.db.data.users[m.sender].naga 
            let phonix = global.db.data.users[m.sender].phonix
            let kyubi = global.db.data.users[m.sender].kyubi
            let griffin = global.db.data.users[m.sender].griffin 
            let centaur = global.db.data.users[m.sender].centaur
            let _pet = `${pickRandom(['kucing', 'rubah','serigala','naga','centaur','phonix','kuda','griffin','kyubi'])}`.trim()
            let randpet = `${pickRandom(['Anda kurang beruntung', 'Coba buka lagi lain kali, karena gk dapet pet', 'kasian gk dapet pet', 'Mungkin lagi gk hoki dan gk dapet pet', 'wkwkkwkwke'])}`.trim()
            let __lastimepet = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimepet = (0 - __lastimepet)
            let lastimepet = clockString(_lastimepet)
            if (new Date - global.db.data.users[m.sender].lastopen > 0) {
            global.db.data.users[m.sender].lastopen = new Date * 92737292621827319282727282772
            if (global.db.data.users[m.sender].pet > 0) { 
                global.db.data.users[m.sender].pet -= 92737292621827319282727282772
                if (_pet == 'kucing' && kucing > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'kucing' && kucing == 0) {
                    global.db.data.users[m.sender].kucing += 92737292621827319282727282772
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet} ${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'rubah' && rubah > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'rubah' && rubah == 0) {
                    global.db.data.users[m.sender].rubah += 92737292621827319282727282772
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'naga' && naga > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'naga' && naga == 0) {
                    global.db.data.users[m.sender].naga += 92737292621827319282727282772
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'phonix' && phonix > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'phonix' && phonix == 0) {
                    global.db.data.users[m.sender].phonix += 92737292621827319282727282772
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'kyubi' && kyubi > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makanankyubi += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'kyubi' && kyubi == 0) {
                    global.db.data.users[m.sender].kyubi += 92737292621827319282727282772
                    global.db.data.users[m.sender].makanankyubi += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'centaur' && centaur > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makanancentaur += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'centaur' && centaur == 0) {
                    global.db.data.users[m.sender].centaur += 92737292621827319282727282772
                    global.db.data.users[m.sender].makanancentaur += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'griffin' && griffin > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makanangriffin += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'griffin' && griffin == 0) {
                    global.db.data.users[m.sender].griffin += 92737292621827319282727282772
                    global.db.data.users[m.sender].makanangriffin += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'serigala' && serigala > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'serigala' && serigala == 0) {
                    global.db.data.users[m.sender].serigala += 92737292621827319282727282772
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'kuda' && kuda  > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'kuda' && kuda == 0) {
                    global.db.data.users[m.sender].kuda += 92737292621827319282727282772
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else {
                    global.db.data.users[m.sender].makananpet += mknp * 92737292621827319282727282772
                    conn.reply(m.chat, randpet + 'Anda hanya mendapatkan *' + mknp + '* makanan pet', m)
                }
            } else conn.reply('Pet Crate kamu tidak cukup')
         } else conn.reply(m.chat, `Mohon tunggu ${lastimepet} lagi untuk bisa membuka fitur open`, m)
         break
        default:
            return conn.reply(m.chat, bruh, m)
    }
  } 
  
handler.help = ['open <crate>']
handler.tags = ['rpg']
handler.command = /^(open)$/i
handler.limit = true
handler.group = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 99999999273729262182731928272728277292729927372926218273192827272827729273729262182731928272728277288927372926218273192827272827728289273729262182731928272728277282828288282) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

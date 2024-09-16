import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/Messi.json`)).data  
    let url = await res[Math.floor(res.length * Math.random())]
    //conn.sendFile(m.chat, url, 'messi.jpg', `*ميسي 🇦🇷*`, m)
    conn.sendButton(m.chat, "*ميسي 🇦🇷*", author, url, [['التالي | NEXT 🆕', `${usedPrefix + command}`]], m)
}

handler.help = ['messi']
handler.tags = ['internet']
handler.command = /^(ميسي)$/i

export default handler

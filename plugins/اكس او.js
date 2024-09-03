import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `لسة في حد بيلعب في الغرفة. لو عايز تخرج اكتب *salir* أو استخدم الأمر *${usedPrefix}delttt* لحذف الغرفة.`

if (!text) throw `لازم تضيف اسم للغرفة. مثال: *${usedPrefix + command} غرفة اللعبة*.`

let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
await conn.reply(m.chat, `حد انضم للغرفة *${text}*! ممكن تلعبوا دلوقتي!`, fkontak, m)
await conn.reply(m.chat, `⭕️ *لعبة XO* ❌\n\n*إزاي تلعب؟*\nرد على اللعبة برقم (1,2,3,4,5,6,7,8,9) لاختيار المكان اللي عايز تحط فيه العلامة.`, fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `💖 *لعبة XO*\n
🫂 *اللاعبين:*\n
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
الدور على: @${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendMessage(m.chat, { image: { url: imgplay }, caption: `😼 *لعبة XO*\n
🧚🏻‍♂️ في انتظار اللاعب التاني. ممكن يدخل باستخدام الأمر *${usedPrefix + command} ${text}*\n
لو عايز تخرج استخدم الأمر *${usedPrefix}delttt*.` }, { mentions: conn.parseMention(text), quoted: fkontak })

conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|اكس او|xo)$/i
export default handler

let handler = async (m, { conn, isPrems }) => {
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
    
    let pp = 'https://c4.wallpaperflare.com/wallpaper/991/456/22/sketch-artist-anime-anime-girls-arknights-swire-arknights-hd-wallpaper-preview.jpg'
    let gata = Math.floor(Math.random() * 3000)
    global.db.data.users[m.sender].exp += gata * 1  
    let time = global.db.data.users[m.sender].lastwork + 600000
    if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `*أنت اشتغلت قبل كده، استنى شوية ${msToTime(time - new Date())} عشان تقدر تشتغل تاني!!*`

    await conn.reply(m.chat, `*${pickRandom(global.work)}* ${gata} XP`, fkontak, pp, m)
    
    global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['عمل']
handler.tags = ['xp']
handler.command = ['عمل', 'work', 'trabajar']
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " د " + seconds + " ث"
}

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.work = [
    "اشتغلت كقاطع بسكويت وكسبت",
    "ساعدت الجروب لما الادمن مش موجود وكسبت",
    "اشتغلت في شركة عسكرية خاصة وكسبت",
    "نظمت حدث لتذوق النبيذ وكسبت",
    "كنت مشرف في الجروب لما 𝑺𝐴𝐹𝑅O𝑇-𝐵O𝑇 مش موجود وكان الدفع",
    "كنت ماشي في الشارع ولقيت",
    "ساعدت الجروب وقت ما الادمن مش موجود وكان الدفع",
    "تم اختطافك واخذوك لمكان تحت الأرض لقتال الوحوش وكسبت",
    "نضفت المدخنة ولقيت",
    "طورت ألعاب لكسب رزقك وكسبت",
    "ليه الأمر ده اسمه شغل؟ ده حتى مفيش علاقة بالشغل، مع ذلك كسبت",
    "اشتغلت ساعات إضافية في المكتب وكسبت",
    "اشتغلت كخاطف عرايس وكسبت",
    "حد جه ومثل مسرحية، وبعد ما تفرجت دالك",
    "اشتريت وبعت حاجات وكسبت",
    "اشتغلت في مطعم تيتا كطباخ وكسبت",
    "اشتغلت 10 دقايق في Pizza Hut وكسبت",
    "اشتغلت ككاتب تورتة الحظ وكسبت",
    "شفت حد بيحاول يرفع صندوق لعربيته، ساعدته وكسبت",
    "طورت ألعاب لكسب رزقك وكسبت",
    "كسبت مسابقة أكل الشطة الحارة، الجائزة كانت",
    "اشتغلت طول اليوم في الشركة وكسبت",
    "ساعدت في إشراف جروب GataDios وكسبت",
    "صممت لوجو لـ FG وكسبت",
    "كنت مشرف في الجروب لما GataDios مش موجود وكان الدفع",
    "اشتغلت في مطبعة كانت بتوظف وكسبت اللي تستحقه!",
    "اشتغلت كمقلم شجيرات لـ FG98 وكسبت",
    "زادت طلبات الألعاب للموبايل، فعملت لعبة جديدة وكسبت",
    "اشتغلت كمدبلج لـ 𝑺𝐴𝐹𝑅O𝑇-𝐵O𝑇 وكسبت",
    "كنت بتزرع وكسبت",
    "اشتغلت كمنشئ قلاع رملية وكسبت",
    "اشتغلت وكسبت",
    "اشتغلت كفنان شارع وكسبت",
    "عملت عمل اجتماعي لهدف نبيل! وبسبب هدفك النبيل، استلمت"
]

const MID_CD = {
idioma: 'عربي',
idioma_code: 'ar',

//main.js
methodCode1: 'طريقة الربط',
methodCode2: 'إزاي تحب تتوصل؟',
methodCode3: 'اختيار',
methodCode4: 'كود QR',
methodCode5: 'كود من 8 أرقام.',
methodCode6: 'اكتب الرقم بس بتاع',
methodCode7: 'الاختيار اللي تحب تتوصل بيه.',
methodCode8: 'نصيحة',
methodCode9: 'لو بتستخدم Termux أو Replit أو Linux أو Windows',
methodCode10: 'استخدم الأوامر دي للتشغيل المباشر:',
methodCode11: (chalk) => `مسموحش بأرقام غير ${chalk.bold.greenBright("1")} أو ${chalk.bold.greenBright("2")}, ولا حروف أو رموز خاصة.\n${chalk.bold.yellowBright("نصيحة: انسخ الرقم بتاع الاختيار وحطه في الكونسول.")}`,
methodCode12: 'ابتدي بكود QR',
methodCode13: 'ابتدي بكود من 8 أرقام',
methodCode14: 'البداية الافتراضية بالاختيارات',
phNumber2: (chalk) => `من فضلك، ادخل رقم الواتساب.\n${chalk.bold.yellowBright("نصيحة: انسخ رقم الواتساب وحطه في الكونسول.")}\n${chalk.bold.yellowBright("مثال: +201234567890")}\n${chalk.bold.magentaBright('---> ')}`,
pairingCode: 'كود الربط:',
mCodigoQR: `\n✅ اسكان كود الـQR هينتهي خلال 45 ثانية`,
mConexion: `\n❒⸺⸺⸺⸺【• متوصل •】⸺⸺⸺⸺❒\n│\n│ 🟢 تم التوصل بنجاح على واتساب.\n│\n❒⸺⸺⸺⸺【• متوصل •】⸺⸺⸺⸺❒`,
mConexionOFF: "\n❌𒌍 الاتصال اتغير، استنى لحظة وهعمل إعادة تشغيل...\nلو حصل خطأ، ابتدي تاني بـ: npm start",

//تنبيهات
mAdminTrue: '*انت الأدمن. مفيش أي مشكلة* 🤭',
mAdmin: '*لازم أكون الأدمن عشان أقدر أحذف*',
mOwner: '*لو معاك صلاحيات أو انت المالك، استخدم `#on تقييد`*\n\n> _لو فعلته، المميزات مش هتكون محدودة_',
mAntiDelete: '*عطل خاصية مضاد الحذف باستخدام `#off مضاد الحذف` عشان تتجنب إعادة إرسال الرسائل الغير مرغوب فيها*',
mAdvertencia: '> ⚠️ *تحذير 𓃠*\n\n',
mInfo: '> 📢 *معلومة 𓃠*\n\n',
mExito: '> ✅ *نجاح 𓃠*\n\n',
mError: '> ❌ *خطأ 𓃠*\n\n',

//_allantilink.js
mTiktok: '*اللينك بتاع TikTok مش مسموح!*\n*هحذفك دلوقتي*',
mYoutube: '*اللينك بتاع YouTube مش مسموح!*\n*هحذفك دلوقتي*',
mTelegram: '*اللينك بتاع Telegram مش مسموح!*\n*هحذفك دلوقتي*',
mFacebook: '*اللينك بتاع Facebook مش مسموح!*\n*هحذفك دلوقتي*',
mInstagram: '*اللينك بتاع Instagram مش مسموح!*\n*هحذفك دلوقتي*',
mX: '*اللينك بتاع X (Twitter) مش مسموح!*\n*هحذفك دلوقتي*',
mDiscord: '*اللينك بتاع Discord مش مسموح!*\n*هحذفك دلوقتي*',
mThreads: '*اللينك بتاع Threads مش مسموح!*\n*هحذفك دلوقتي*',
mTwitch: '*اللينك بتاع Twitch مش مسموح!*\n*هحذفك دلوقتي*',

//_antilink.js
mWhatsApp: '*اللينك ده بتاع WhatsApp مش مسموح!*\n*هحذفك دلوقتي*',

//_antilink2.js
mWhatsApp2: '*ممنوع أي نوع من اللينكات!*\n*هحذفك دلوقتي*',

//antiprivado.js
smsprivado: (m, cuentas) => `*@${m.sender.split`@`[0]} ممنوع تبعت في الخاص*\n\n> *انضم لمجتمع GataBot عشان تعرف ازاي تعمل بوت خاص بيك لواتساب*\n${cuentas}\n\n⚠️ \`\`\`هتم حظرك\`\`\` ⚠️`,

//_anti-internacional.js
mFake: (m) => `✋ *المستخدم @${m.sender.split`@`[0]} مش مسموح ليه يكون في الجروب ده!*`,
mFake2: (user) => `🚫 *المستخدم @${user.split`@`[0]} مش مرحب بيه في الجروب ده!*`,

//antispam.js
smsNoSpam: "سبام خفيف",
smsNoSpam1: (m, motive) => `*@${m.sender.split`@`[0]} مش مسموح ليك تستخدم الأوامر لمدة 30 ثانية*\n\n*السبب: ${motive}*`,
smsNoSpam2: "سبام متوسط",
smsNoSpam3: (m, motive) => `*@${m.sender.split`@`[0]} مش مسموح ليك تستخدم الأوامر لمدة دقيقة*\n\n*السبب: ${motive}*`,
smsNoSpam4: "سبام مزعج",
smsNoSpam5: (m, motive) => `*@${m.sender.split`@`[0]} مش مسموح ليك تستخدم الأوامر لمدة دقيقتين*\n\n*السبب: ${motive}*`,
smsNoSpam6: (mention) => `*${mention} ممنوع تعمل سبام للرسائل!!*`,

//antitraba.js
smsAntiTraba: (sender) => `الأدمن @${m.sender.split("@")[0]} لسه بعت رسالة فيها حروف كتير -.-!`,
smsAntiTraba2: '[ ! ] تم اكتشاف رسالة فيها حروف كتير [ ! ]',
smsAntiTraba3: 'علامة الشات كمقروء ✓',
smsAntiTraba4: (sender, name) => `الرقم: wa.me/${m.sender.split("@")[0]}\n• الاسم: ${name}\n‼️لسه بعت رسالة فيها حروف كتير ممكن تسبب مشاكل في الأجهزة`,

//_autodetec.js
smsAutodetec1: (usuario, m) => `*» ${usuario}*\n*غير اسم الجروب*\n\n🔰 *الاسم الجديد للجروب:* \n*${m.messageStubParameters[0]}*`,
smsAutodetec2: (usuario, groupMetadata) => `*» ${usuario}*\n*غير صورة الجروب:* \n*${groupMetadata.subject}*`,
smsAutodetec3: (usuario, m) => `*» ${usuario}*\n*غير وصف الجروب*\n🔰 *الوصف الجديد هو:*`,
smsAutodetec4: (usuario, m, groupMetadata) => `🔒 ${usuario}*\n*سمح بـ ${m.messageStubParameters[0] == 'on' ? 'الأدمنز بس' : 'الكل'} انهم يقدروا يغيروا في إعدادات ${groupMetadata.subject}*`,
smsAutodetec5: (groupMetadata, usuario) => `*لينك الجروب ${groupMetadata.subject} تم إعادته بواسطة:*\n*» ${usuario}*`,
smsAutodetec6: (m) => `الجروب *${m.messageStubParameters[0] == 'on' ? 'مغلق 🔒' : 'مفتوح 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'الأدمنز بس يقدروا يكتبوا' : 'الكل يقدر يكتب'} في الجروب ده`,
smsAutodetec7: (m, usuario) => `@${m.messageStubParameters[0].split`@`[0]} بقى أدمن في الجروب ده\n\n😼🫵أكشن تم تنفيذه بواسطة: ${usuario}`,
smsAutodetec8: (m, usuario) => `@${m.messageStubParameters[0].split`@`[0]} مش أدمن في الجروب ده بعد دلوقتي\n\n😼🫵أكشن تم تنفيذه بواسطة: ${usuario}`,
smsAutodetec9: (usuario, m) => `*» ${usuario}*\n*غير مدة الرسائل المؤقتة إلى: *@${m.messageStubParameters[0]}*`,
smsAutodetec10: (usuario, m) => `تم التعطيل`,
  
//información
smsinfo: "💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*", 
name: "𝙉𝙊𝙈𝘽𝙍𝙀", 
user: "𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼)", 

//Descargar 
smsYT1: "𝙏𝙄𝙏𝙐𝙇𝙊", 
smsYT2: "𝘼𝙐𝙏𝙊𝙍(𝘼)", 
smsYT3: "𝙇𝙀𝙏𝙍𝘼", 
smsYT4: "𝙀𝙉𝙇𝘼𝘾𝙀:", 
smsYT5: "𝘿𝙐𝙍𝘼𝘾𝙄𝙊́𝙉:", 
smsYT6: "𝘼𝙍𝙏𝙄𝙎𝙏𝘼", 
smsYT7: "𝘼́𝙇𝘽𝙐𝙈", 
smsYT8: "𝙁𝙀𝘾𝙃𝘼", 
smsYT9: "𝙂𝙀𝙉𝙀𝙍𝙊𝙎", 
smsYT9: "𝙎𝙐𝘽𝙄𝘿𝙊", 
smsYT10: "𝙑𝙄𝙎𝙏𝘼𝙎", 
smsYT11: "𝙋𝙀𝙎𝙊", 
smsYT12: "𝙏𝙄𝙋𝙊", 
smsYT13: "𝘼𝙍𝙏𝙄𝙎𝙏𝘼", 
smsYT14: "𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉", 
smsYT15: "𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊", 
smsinsta1: "𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙍𝙀𝙎", 
smsinsta2: "𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙎", 
smsinsta3: "𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘾𝙄𝙊𝙉𝙀𝙎", 
smsinsta4: "𝘽𝙄𝙊𝙂𝙍𝘼𝙁Í𝘼", 
smsinsta5: "𝙈𝙀 𝙂𝙐𝙎𝙏𝘼", 

//descarga
smsYtlist: (usedPrefix) => `𝙋𝙐𝙀𝘿𝙀𝙎 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝘼𝙎 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼:\n${usedPrefix}video <numero>\n${usedPrefix}audio <numero>\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*`, 
smsfb: '𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆', 
smsfb2: '𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆', 
smsfb3: '𝘼𝙇𝙂𝙊 𝙎𝘼𝙇𝙄𝙊 𝙈𝘼𝙇, 𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙐𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆', 
smsgit: '𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊. 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙎𝙀𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙂𝙄𝙏𝙃𝙐𝘽', 
smsgit2: '𝙀𝙉𝙑𝙄𝘼𝙉𝘿𝙊 𝘼𝙍𝘾𝙃𝙄𝙑𝙊, 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 🚀\n𝙎𝙄 𝙉𝙊 𝙇𝙀 𝙇𝙇𝙀𝙂𝘼 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝙀𝙎 𝘿𝙀𝘽𝙄𝘿𝙊 𝘼 𝙌𝙐𝙀 𝙀𝙇 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊 𝙀𝙎 𝙋𝙀𝙎𝘼𝘿𝙊. 🚀', 
smsInsta: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsInsta2: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙇𝘼𝙎 𝙃𝙄𝙎𝙏𝙊𝙍𝙄𝘼𝙎\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsInsta3: '𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙄𝙉𝙑𝘼́𝙇𝙄𝘿𝙊𝙎 𝙊 𝙎𝙄𝙉 𝙃𝙄𝙎𝙏𝙊𝙍𝙄𝘼𝙎', 
smsFire: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀.', 
smsApk: '*ESCRIBA EL NOMBRE DEL APK*', 
smsApk2: '𝙐𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏𝙐𝙇𝙄𝙕𝘼𝘾𝙄𝙊𝙉', 
smsApk3: '𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝘿𝙊 𝘼𝙋𝙆𝙎', 
smsApk4: 'EL APK ES MUY PESADO.', 
smsTikTok: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 (@)\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsTikTok1: '𝙁𝙊𝙏𝙊 𝘿𝙀 𝙋𝙀𝙍𝙁𝙄𝙇', 
smsTikTok2: '𝘿𝙀𝘽𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsTikTok3: '𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙎 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊, 𝙋𝙍𝙊𝘾𝙐𝙍𝙀 𝙌𝙐𝙀 𝙀𝙎𝙏𝙀 𝙑𝘼𝙇𝙄𝘿𝙊', 
smsTikTok4: '𝙋𝙍𝙊𝙉𝙏𝙊 𝙏𝙀𝙉𝘿𝙍𝘼 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 😸', 
smsTikTok5: (anu) => `*Se ha enviado 1 de ${anu.length} imágenes.* ✅\n_El resto podrá ser visible en el chat privado del bot_ 😸`, 
smsTikTok6: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 (@)\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsSpoti: 'Enviando canción...', 
smsAguarde: (additionalText) => `𝙀𝙉𝙑𝙄𝘼𝘿𝙊 ${additionalText}, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊`, 
smsAud: '𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝘼𝙐𝘿𝙄𝙊, 𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍', 
smsVid: '𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊, 𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍',
smsYT: '𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊́ 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀𝙎 𝙋𝘼𝙍𝘼 𝙀𝙎𝙀 𝙉𝙐́𝙈𝙀𝙍𝙊, 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙉𝙐́𝙈𝙀𝙍𝙊 𝙀𝙉𝙏𝙍𝙀 1 𝙔 𝙀𝙇', 
smsY2: (usedPrefix, command) => `𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝙇𝘼 𝘽𝙐́𝙎𝙌𝙐𝙀𝘿𝘼 𝘿𝙀 𝙑𝙄́𝘿𝙀𝙊𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊`, 

//ejemplos
smsMalused: "𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙇𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝘽𝙐𝙎𝘾𝘼𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n", 
smsMalused2: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝘼𝙉𝙄𝙈𝙀', 
smsMalused3: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉𝘼 𝘾𝘼𝙉𝘾𝙄𝙊𝙉 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙇𝘼 𝙇𝙀𝙏𝙍𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsMalused4: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝘾𝘼𝙉𝘼𝙇 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀', 
smsMalused4: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsMalused5: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsMalused6: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙂𝙄𝙏𝙃𝙐𝘽\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊', 
smsMalused7: '⚡ *USAR EL COMANDO DE ESTA FORMA:*\n', 
smsMalused8: `🐈 *DEBE DE USAR EL COMANDO COMO EN ESTE EJEMPLO:*\n`, 
smsMalused9: `🐈 *RESPONDE A UN MENSAJE CON EL COMANDO O USE ESTE EJEMPLO:*\n`, 

//Error
smsMalError: `\`\`\`OCURRIÓ UN ERROR INESPERADO.\`\`\``, 
smsMalError2: `\`\`\`SURGIÓ UN INCONVENIENTE.\`\`\`\n`, 
smsMalError3: `\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`, 

//grupos
smsAdd: 'Hola! me presento, soy GataBot-MD 🐈, soy un Bot de WhatsApp, una persona del grupo utilizo el comando para añadirte al grupo, pero no pude agregarte, asi que te mando la invitacion para que te unas al grupo, te esperamos con ansias!!', 
smsAdd2: 'Enviando invitacion a su privado...', 
smsGrup: '𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!', 
smaGrup2: '𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!', 

//buscadores
buscador: "*RESULTADOS DE:* ", 
buscador2: "𝙀𝙋𝙄𝙎𝙊𝘿𝙄𝙊𝙎:", 
buscador3: "𝙁𝙊𝙍𝙈𝘼𝙏𝙊:", 
buscador3: "𝘽𝘼𝙎𝘼𝘿𝙊 𝙀𝙉:", 
buscador4: "𝙀𝙎𝙏𝙍𝙀𝙉𝘼𝘿𝙊:", 
buscador5: "𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎:", 
buscador6: "𝙁𝘼𝙑𝙊𝙍𝙄𝙏𝙊𝙎:", 
buscador7: "𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝘾𝙄𝙊𝙉:", 
buscador8: "𝙏𝙍𝘼𝙄𝙇𝙀𝙍:", 
buscador9: "*🔎 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙀 𝙀𝙎𝙏𝙊:*", 
buscador10: "𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙉𝙄𝙉𝙂𝙐𝙉𝘼 𝙋𝙀𝙇𝙄𝘾𝙐𝙇𝘼", 
buscador11: "𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙉𝙐𝙉𝘾𝙄𝙊𝙎 𝙍𝙀𝘾𝙊𝙈𝙀𝙉𝘿𝘼𝘿𝙊", 

//convertido
smsconvert: "𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝙊 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉", 
smsconvert1: "𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙀𝙎𝙏𝙊𝙔 𝘾𝙊𝙉𝙑𝙄𝙍𝙏𝙄𝙀𝙉𝘿𝙊 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝘼 𝘿𝙄𝙎𝙀𝙉̃𝙊 𝘼𝙉𝙄𝙈𝙀, 𝙎𝙀𝘼 𝙋𝘼𝘾𝙄𝙀𝙉𝙏𝙀 𝙀𝙉 𝙇𝙊 𝙌𝙐𝙀 𝙀𝙉𝙑𝙄𝙊 𝙀𝙇 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊", 
smsconvert2: "𝙀𝙍𝙍𝙊𝙍, 𝙑𝙀𝙍𝙄𝙁𝙄𝙌𝙐𝙀 𝙌𝙐𝙀 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙎𝙀𝘼 𝙀𝙇 𝙍𝙊𝙎𝙏𝙍𝙊 𝘿𝙀 𝙐𝙉𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼", 
smsconvert3: "𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼 𝙐𝙉 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙀𝙉 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉, 𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊", 
smsconvert4: "𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙀𝙉 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3", 
smsconvert5: "𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍", 
smsconvert6: "𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙎𝙐 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕 𝘼 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍", 
smsconvert7: "𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝘼𝙐𝘿𝙄𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝘼 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕", 
smsconvert8: "𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍", 
smsconvert9: "𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 𝘼 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍", 
smsconvert10: "𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙊 𝙑𝙄𝘿𝙀𝙊", 
smsconvert11: "𝙏𝘼𝙈𝘼𝙉𝙊", 
smsconvert12: "𝙀𝙓𝙋𝙄𝙍𝘼𝘾𝙄𝙊𝙉", 
smsconvert13: "𝘼𝘾𝙊𝙍𝙏𝘼𝘿𝙊", 
smsconvert14: "𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼𝙇 𝘼𝙐𝘿𝙄𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙀𝙉 𝙑𝙄𝘿𝙀𝙊", 
smsconvert15: "𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝘼 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊", 
smsconvert16: "𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼𝙇 𝘼𝙐𝘿𝙄𝙊 𝙊 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕 𝙋𝘼𝙍𝘼 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍𝙇𝙊 𝙐𝙎𝙀 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊", 

//herramientas.js
smsAcorta: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝘼𝙍𝘼 𝘼𝘾𝙊𝙍𝙏𝘼𝙍', 
smsAcorta2: (text) => `✅ 𝙎𝙀 𝙍𝙀𝘼𝙇𝙄𝙕𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊\n\n𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝘼𝙉𝙏𝙀𝙎\n*${text}*\n\n𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝘼𝙃𝙊𝙍𝘼`, 

//comando +18
smshorny: "𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙓𝙉𝙓𝙓, 𝙀𝙅𝙀𝙈𝙋𝙇𝙊:", 
smshorny2: "➤ 𝙀𝙎𝙋𝙀𝙍𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘼 𝙌𝙐𝙀 𝙎𝙀 𝙀𝙉𝙑𝙄𝙀 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊"
}

export default MID_CD

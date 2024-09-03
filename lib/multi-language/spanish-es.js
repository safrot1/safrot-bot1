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
  
//معلومات
smsinfo: "💖 *اتطلع على الجديد وافتكر يكون عندك آخر نسخة.*", 
name: "الاسم", 
user: "المستخدم",

//تحميل
smsYT1: "العنوان", 
smsYT2: "المؤلف", 
smsYT3: "الكلمات", 
smsYT4: "الرابط:", 
smsYT5: "المدة:", 
smsYT6: "الفنان", 
smsYT7: "الألبوم", 
smsYT8: "التاريخ", 
smsYT9: "الأنواع", 
smsYT9: "تم الرفع", 
smsYT10: "المشاهدات", 
smsYT11: "الحجم", 
smsYT12: "النوع", 
smsYT13: "الفنان", 
smsYT14: "الوصف", 
smsYT15: "نُشر", 

//تحميل من إنستجرام
smsinsta1: "المتابعين", 
smsinsta2: "المتابَعين", 
smsinsta3: "المنشورات", 
smsinsta4: "السيرة الذاتية", 
smsinsta5: "أعجبني",

//تحميل
smsYtlist: (usedPrefix) => `ممكن تحمل الفيديو اللي عايزه بالشكل ده:\n${usedPrefix}فيديو <رقم>\n${usedPrefix}صوت <رقم>\n\n*مثال:*`, 
smsfb: 'فيديو من فيسبوك', 
smsfb2: 'استنى لحظة، الفيديو بتاعك من فيسبوك بيتحمل', 
smsfb3: 'فيه حاجة غلط، اتأكد إنك استخدمت رابط صحيح من فيسبوك', 
smsgit: 'الرابط مش صحيح. لازم يكون رابط من GitHub', 
smsgit2: 'جارِ إرسال الملف، استنى لحظة 🚀\nلو الملف ما وصلش ليك، ده علشان الريبو تقيل. 🚀', 

//تحميل من إنستجرام
smsInsta: 'اكتب رابط إنستجرام لتحميل الفيديو أو الصورة\nمثال', 
smsInsta2: 'اكتب اسم مستخدم إنستجرام لتحميل القصص\nمثال', 
smsInsta3: 'اسم مستخدم غير صالح أو مفيش قصص',

//تحميل من MediaFire
smsFire: 'اكتب رابط صحيح من MediaFire.', 

//تحميل APK
smsApk: '*اكتب اسم الـ APK*', 
smsApk2: 'آخر تحديث', 
smsApk3: 'تم تحميل APKs', 
smsApk4: 'الـ APK تقيل.', 

//تحميل من TikTok
smsTikTok: 'اكتب اسم مستخدم TikTok بدون استخدام (@)\nمثال', 
smsTikTok1: 'صورة الملف الشخصي', 
smsTikTok2: 'لازم تدخل رابط TikTok لتحميل الفيديو\nمثال', 
smsTikTok3: 'رابط TikTok غير صحيح، اتأكد إنه صحيح', 
smsTikTok4: 'الفيديو من TikTok هيكون جاهز قريب 😸', 
smsTikTok5: (anu) => `*تم إرسال 1 من ${anu.length} صور.* ✅\n_باقي الصور هتشوفها في الدردشة الخاصة بالبوت_ 😸`, 
smsTikTok6: 'اكتب اسم مستخدم TikTok بدون استخدام (@)\nمثال',

//إرسال أغنية
smsSpoti: 'جارِ إرسال الأغنية...', 
smsAguarde: (additionalText) => `تم إرسال ${additionalText}، استنى لحظة`, 
smsAud: 'بيتم تحميل الصوت، من فضلك انتظر لحظة', 
smsVid: 'بيتم تحميل الفيديو، من فضلك انتظر لحظة',
smsYT: 'ما تمش العثور على روابط للرقم ده، من فضلك اكتب رقم بين 1 و',

//تنبيهات
smsY2: (usedPrefix, command) => `عشان تستخدم الأمر ده (${usedPrefix + command} <رقم>), من فضلك اعمل بحث عن الفيديوهات باستخدام الأمر`,
smsMalused: "اكتب اللي عايز تدور عليه\nمثال", 
smsMalused2: 'اكتب اسم أنمي', 
smsMalused3: 'ادخل اسم أغنية علشان تجيب كلماتها\nمثال', 
smsMalused4: 'اكتب اسم فيديو أو قناة على يوتيوب', 
smsMalused4: 'اكتب الاسم أو العنوان\nمثال', 
smsMalused5: 'ادخل رابط فيسبوك لتحميل الفيديو\nمثال', 
smsMalused6: 'اكتب رابط GitHub\nمثال', 
smsMalused7: '🧚🏻‍♂️ *استخدم الأمر بالشكل ده:*', 
smsMalused8: `🧚🏻‍♂️ *لازم تستخدم الأمر زي المثال ده:*`, 
smsMalused9: `🧚🏻‍♂️ *رد على رسالة بالأمر أو استخدم المثال ده:*`, 

// Error
smsMalError: `\`\`\`حصل خطأ غير متوقع.\`\`\``, 
smsMalError2: `\`\`\`حصلت مشكلة.\`\`\`\n`, 
smsMalError3: `\`\`\`حاجة غلط حصلت، بلغ عن الأمر باستخدام:\`\`\`\n`, 

// Groups
smsAdd: 'أهلاً! أنا 𝑺𝐴𝐹𝑅O𝑇-𝐵O𝑇، أنا بوت على واتساب، حد في الجروب استخدم الأمر علشان يضيفك للجروب، بس ما قدرتش أضيفك، فببعتلك الدعوة علشان تنضم للجروب، مستنيينك بفارغ الصبر!!', 
smsAdd2: 'إرسال الدعوة في الخاص...', 
smsGrup: 'دلوقتي الكل يقدر يكتب في الجروب ده!!',
smaGrup2: 'فقط الأدمنز هما اللي يقدروا يكتبوا في الجروب ده!!',

// Searchers
buscador: "*نتائج البحث:* ", 
buscador2: "الحلقات:", 
buscador3: "الصيغة:", 
buscador3: "مبني على:", 
buscador4: "اتعرضت في:", 
buscador5: "الأعضاء:", 
buscador6: "المفضلة:", 
buscador7: "التقييم:", 
buscador8: "الإعلان:", 
buscador9: "*🔎 لقيت ده:*", 
buscador10: "مفيش فيلم اتلاقى", 
buscador11: "بلوك الإعلانات الموصى به", 

// Converter
smsconvert: "رد أو اعمل تاغ على صورة", 
smsconvert1: "استنى شوية، بحول الصورة لتصميم أنمي، اصبر لغاية ما أبعتلك النتيجة", 
smsconvert2: "حصل خطأ، اتأكد إن الصورة هي وش شخص", 
smsconvert3: "رد على استيكر علشان يتحول لصورة، استخدم الأمر", 
smsconvert4: "رد على فيديو أو رسالة صوتية علشان يتحول لصوت|MP3", 
smsconvert5: "مقدرتش أحمل الفيديو، حاول تاني من فضلك", 
smsconvert6: "مقدرتش أحول الرسالة الصوتية لصوت|MP3، حاول تاني من فضلك", 
smsconvert7: "رد على فيديو أو صوت علشان يتحول لرسالة صوتية", 
smsconvert8: "مقدرتش أحمل الفيديو، حاول تاني من فضلك", 
smsconvert9: "مقدرتش أحول من صوت لرسالة صوتية، حاول تاني من فضلك", 
smsconvert10: "رد على صورة أو فيديو", 
smsconvert11: "الحجم", 
smsconvert12: "تاريخ الانتهاء", 
smsconvert13: "مقصر", 
smsconvert14: "رد على الصوت علشان يتحول لفيديو", 
smsconvert15: "اكتب نص لتحويله لرسالة صوتية\nمثال", 
smsconvert16: "رد على الصوت أو رسالة صوتية لتعديلها باستخدام الأمر ده", 


smsAcorta: 'اكتب لينك علشان أقصره', 
smsAcorta2: (text) => `✅ تم بنجاح\n\nاللينك القديم\n*${text}*\n\nواللينك دلوقتي`, 

//comando +18
smshorny: "اكتب لينك صالح من موقع XNXX، مثال:", 
smshorny2: "➤ من فضلك استنى لحد ما الفيديو يتبعت"
}

export default MID_CD

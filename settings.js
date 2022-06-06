//═══════════════════════════════════════════════════════//
// ᴛʜɪs ʙᴏᴛ ᴄᴏᴅᴇʀ ᴏɴʟʏ ᴀʙᴜ
// ʏᴏᴜ ʀᴇ ᴇᴅɪᴛɪɴɢ ᴏʀ ᴄᴏᴘʏɪɴɢ
// ʏᴏᴜ ᴄʀᴇᴅɪᴛ ʀᴇᴍᴏᴠᴇ ʙᴜᴛ
// ᴊᴇsᴛ sᴜᴘᴘᴏʀᴛ ᴍᴇ
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94702979973']
global.premium = ['94702979973']
global.ownernomer = '94702979973'
global.ownername = 'ayodya'
global.botname = 'Prince Muthu🥀'
global.footer = 'ayodya.'
global.ig = 'https://github.com/fuckoff'
global.region = 'sri lanka'
global.sc = 'https://github.com/fuckoff'
global.myweb = 'https://youtu.be/'
global.packname = 'Ayo'
global.author = 'Ayo'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ᴅᴏɴᴇ',
    admin: 'ᴛʜɪs ғᴇᴀᴛᴜʀsɪs ᴏɴʟʏ ғᴏʀ ᴀᴅᴍɪɴ !',
    botAdmin: 'ɢɪᴠᴇ ᴀᴅᴍɪɴ ʙᴏᴛ ᴍᴜsᴛ!',
    owner: 'ᴛʜɪs ᴏɴʟʏ ᴡᴏʀᴄᴋ ғᴏʀ ᴏᴡɴᴇʀ !',
    group: 'ᴛʜɪs ᴏɴʟʏ ᴡᴏʀᴄᴋ ғᴏʀ ɢʀᴏᴜᴘ !',
    private: 'ᴏɴʟʏ ᴘʀɪᴠɪᴛᴇ ᴜsᴇ !',
    bot: 'ᴛʜɪs ᴏɴʟʏ ᴡᴏʀᴄᴋ ғᴏʀ ʙᴏᴛ !',
    wait: 'ʟᴏᴀᴅɪɴɢ...',
    error: 'ɴᴏᴛ ᴠᴇʀғɪᴅᴇ ᴀᴘɪ ᴋᴇʏ !',
    endLimit: 'ʏᴏᴜʀ ᴅɪʟʏ ʟɪᴍɪᴛᴇ ʀᴇᴀᴄʜ',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.ownernomer = process.env.OWNER_NUMBER || '94702979973'
global.packname = process.env.PACKNAME ||'Prince Muthu🥀'
global.author = process.env.AUTHOR ||'ayodya'
global.botname = process.env.BOT_NAME ||'Prince Muthu🥀'
global.myweb = process.env.INSTA_LINK ||'https://instagram.com/'
global.footer = process.env.FOOTER_CAPTION ||'ayodya'
global.myweb = process.env.GIT_LINK ||'https://github.com/MD'
global.name = 'ABU MULTI-DEVICE'
global.myweb = 'https://instagram.com/'
global.sc = 'https://github.com/AD'
global.session = process.env.SESSION_ID|| ''
global.wm = process.env.WATERMARK|| 'Prince Muthu🥀'
global.owner_name = process.env.OWNER_NAME || 'Jsl/Abu'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}

global.thumb = fs.readFileSync('logo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

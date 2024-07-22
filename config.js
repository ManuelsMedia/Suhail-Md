const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348077862217";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_32_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NixcbiAgICAgICAgMjI2LFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg3LFxuICAgICAgICA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaUjlLaXZQTmdVSGZ5TEFIZWhHTVdmZ2d2bjlSWWVEK0xHMzBpc2llY0R3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3b2VRTUxMT1FmeVBnUExVNkZ1WU13XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0YTgwMDg1LWU1Y2YtNGFmMy05MmY5LWE3NmRlYzEyNTEwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMjE4LFxuICAgICAgMTAsXG4gICAgICAxMjIsXG4gICAgICAxMDMsXG4gICAgICA2MixcbiAgICAgIDIyOCxcbiAgICAgIDM0LFxuICAgICAgMjM2LFxuICAgICAgNjksXG4gICAgICA3OCxcbiAgICAgIDQ1LFxuICAgICAgMTg0LFxuICAgICAgNDEsXG4gICAgICA0NSxcbiAgICAgIDUyLFxuICAgICAgMjUzLFxuICAgICAgMTExLFxuICAgICAgMTA3LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMjMsXG4gICAgICAyOCxcbiAgICAgIDIxMixcbiAgICAgIDEwMixcbiAgICAgIDgyLFxuICAgICAgMTE4LFxuICAgICAgMTExLFxuICAgICAgMTI1LFxuICAgICAgMjI4LFxuICAgICAgMTkzLFxuICAgICAgMTA1LFxuICAgICAgMTYwLFxuICAgICAgMTY5LFxuICAgICAgMjMzLFxuICAgICAgNDcsXG4gICAgICAyMzIsXG4gICAgICA2NSxcbiAgICAgIDE5MCxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM1Q0dRUkFQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc3ODYyMjE3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYW51ZWwncyBNZWRpYVwiLFxuICAgIFwibGlkXCI6IFwiMTk0MTc1OTQxMjQ3MDUzOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2pQNFlRSEVJdjMrYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRWG8vemxyR3Q2WlhrdkdPbWNCdUNuMWd0OU5zbXU1QzQvajFScVlLKzFrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlMwZThtT2NDV1owNXJmaU5xZ0x0TEpiOVQ4bHhvUGtaQi82NWl5V25lSGp6VXZRelRYTU5TUks2Uzg3MDBxOFVkamJrSW9zMENZcVc4NmFtdmFuT0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImY4MGVLVVdRYjRPZ0pPUEhwbVoyajJjY1VaWWYxcmg5VGZGLzFmWmZicmwvSkgraXgrYTcvb1BxckRoNElwdXQvRGUyb3I2SldPc3JpcWhiM1ZSZ2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzc4NjIyMTc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjYyMzUxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

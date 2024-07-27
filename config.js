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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250566757132";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_15_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDI0LFxuICAgICAgICAyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NixcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIktueXE0Tk1SYUoxa01YVTNmWllYZyt0bWc5Wmo1NHQ1M0d5MjM4TFEvaFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVteWhNT1d3UjJxS2dDalluRzdQWFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmM3MzE3NjEtYzA4Mi00OTcwLWFjMTQtYmU1NTJlYzNmMjkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMjM0LFxuICAgICAgMjI2LFxuICAgICAgMTAzLFxuICAgICAgNTksXG4gICAgICAyNTEsXG4gICAgICAxNDIsXG4gICAgICA5NyxcbiAgICAgIDg2LFxuICAgICAgMTgsXG4gICAgICA4LFxuICAgICAgMjAsXG4gICAgICAxNzMsXG4gICAgICAxNTcsXG4gICAgICAxMzYsXG4gICAgICA2MCxcbiAgICAgIDEwNCxcbiAgICAgIDEyMixcbiAgICAgIDE3NixcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICA3NixcbiAgICAgIDExMyxcbiAgICAgIDIxNSxcbiAgICAgIDIyNCxcbiAgICAgIDg5LFxuICAgICAgMTY0LFxuICAgICAgMTQ0LFxuICAgICAgNDAsXG4gICAgICAxOTgsXG4gICAgICA4NixcbiAgICAgIDEzMCxcbiAgICAgIDIxMyxcbiAgICAgIDI4LFxuICAgICAgMzMsXG4gICAgICA2NSxcbiAgICAgIDYzLFxuICAgICAgMjE2LFxuICAgICAgMTIxLFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbkg3ZThGRUt6Sms3VUdHRXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9RcFpSaTRpWUlia0VqZWhaaW9SNjRHYzR2U2s3cXBYajZ2K0NTaE1CZ0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOE51UmFRMzJaMXVXcTl3bzhLQ1RWK09vcG5veFZJVGRWT0VkUEw3LzlzSkdlTW4wL2NWbkJMOEpnTjltN1R0WER6MkFWZnUzVmd1NFRLZlFFOENaQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiellPMlJCbndlNmkveWIrOGdPZTFKZ1R0ZVhSMzB4YXJqWHpQa1JyU3hTdkVXaDM1ek1xZVFTMEdtYkVHMjM5NlM2K01RWHptdG9vbFZoMEFoV2NMRGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU2Njc1NzEzMjozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY2Nzc4MTA5OTUyNjE6MzdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU2Njc1NzEzMjozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwODI0OTVcbn0iCn0="  // PUT your SESSION_ID 


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

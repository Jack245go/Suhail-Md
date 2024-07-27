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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_57_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMyxcbiAgICAgICAgODcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICA2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibkh6MHMxcTZiUFg2ZjlmTVdxMXVhdG50bjBRZE5JR1JzNTVEcncraTVNND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOGFuUHF3RWZSRTYyZ0VtRlYzTEZLd1wiLFxuICBcInBob25lSWRcIjogXCI0MzVkMjUxNy0wZDI0LTQ2NDktYjQwNS1mNzRhYjJiMzQ4YTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTEwLFxuICAgICAgMTkzLFxuICAgICAgMjIyLFxuICAgICAgMjA0LFxuICAgICAgMjI1LFxuICAgICAgMjE2LFxuICAgICAgMTEyLFxuICAgICAgNzEsXG4gICAgICAyMjQsXG4gICAgICAyNixcbiAgICAgIDIzOSxcbiAgICAgIDE0OCxcbiAgICAgIDUwLFxuICAgICAgMTk5LFxuICAgICAgMTgzLFxuICAgICAgMTY5LFxuICAgICAgMTczLFxuICAgICAgNjUsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgNjQsXG4gICAgICAxNjksXG4gICAgICAzNixcbiAgICAgIDI1NSxcbiAgICAgIDE1NSxcbiAgICAgIDk4LFxuICAgICAgMTU3LFxuICAgICAgMjE1LFxuICAgICAgODEsXG4gICAgICAxMTksXG4gICAgICAxOTcsXG4gICAgICAxNjksXG4gICAgICA3NCxcbiAgICAgIDk4LFxuICAgICAgMTY0LFxuICAgICAgMzAsXG4gICAgICA4NCxcbiAgICAgIDE1MyxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIxRldCOFNTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTkyODI2NTA6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzA5MTk5NzI5MTc0ODM6OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLqp4Hwk4qI8JKGnCDwnZCK8J2QlPCdmqrwnZqr8J2auPCdmrDwnZCK8J2aqyDwnZCD8J2atfCdm4HwnZqw8J2QiyfwnZCSIPCShpzwk4qJ6qeCXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0t5MDNJUWl1cVV0UVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhNlhWYTNFMUZVWjVXbVJLc1UyeG1QNDVQcDM2Zm5KR2lmSzNCQkxwV1I4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZXTVdDdFY5aVRkM2h6RWFyS3NqbCs4RjhUS1A5Q3RaeWlid09qdkxiU0kwNFJLeGhjZkNMczU5SDkvazh6THRTNjNsK1VJYXdFOUFPVkx0aEI1K2dRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInorMzhyK2NHY2RPUVhNeU9iazNBTmRXT0ZWOGc2bi9rY2FQV1Avb21nR3E5MnZBSnZrTEVUaXBpQUtwNkV2K2pMQXNKQ2E2dGFmbTVJcnp6blBZVWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5OTI4MjY1MDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTAzMDUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDNaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEM1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkTU5wc0JPR2xsQkN4MTZadUdxbmRyeTJkWjBvcVpQMWdaVUE3Y1l0MGtzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0MDQ0MTYzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDExNTk5MzU3XCJ9Igp9"  // PUT your SESSION_ID 


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

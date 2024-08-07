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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347062097147";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_31_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNCxcbiAgICAgICAgNixcbiAgICAgICAgMTgsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyLFxuICAgICAgICA2NixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICA2NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2eDlPV1UzOTFua1UzSDJhY1NXc3VFRTlISVVWYm5aS05GVHZDRTB3cmt3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiOFRnd3dpalJ4YTl3SlNTSUgxazJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmZDRmMTgxLTdkYjAtNDA3Ny05MTc2LTRkYWRjZTdiMmUyOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAxMzAsXG4gICAgICA3MCxcbiAgICAgIDIwNSxcbiAgICAgIDExOSxcbiAgICAgIDIzNyxcbiAgICAgIDE5NyxcbiAgICAgIDE0NixcbiAgICAgIDIwOCxcbiAgICAgIDI1MyxcbiAgICAgIDE1OCxcbiAgICAgIDE5MyxcbiAgICAgIDE0NCxcbiAgICAgIDg5LFxuICAgICAgMjM1LFxuICAgICAgMjE0LFxuICAgICAgNTIsXG4gICAgICA1NSxcbiAgICAgIDE4OSxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMTQ0LFxuICAgICAgNixcbiAgICAgIDEwMyxcbiAgICAgIDIzMCxcbiAgICAgIDEyMixcbiAgICAgIDIxOSxcbiAgICAgIDExOCxcbiAgICAgIDIwNyxcbiAgICAgIDIwMixcbiAgICAgIDE1MCxcbiAgICAgIDk5LFxuICAgICAgOTAsXG4gICAgICAyMTYsXG4gICAgICAyMDcsXG4gICAgICAxMDIsXG4gICAgICA3LFxuICAgICAgMzEsXG4gICAgICAxOSxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpETFMxUjI2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYyMDk3MTQ3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBYmR1bHJhbW9uIE11dGl1bGxhaGlcIixcbiAgICBcImxpZFwiOiBcIjE5Mjk0Mjk4MzYzOTEyNjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01PcmlMc0VFSWI3enJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODdBMytJRE42Q1NnbGVObURMVzZ2NENZdVZrRXA5Sjg0WEV5M3lpUStodz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvYzhmUkNwZEJCS2pqRUxKWjVVMTUwTXNMbFNJeFp6YTVleXBJYzlkTVQ5VHN1bmVoRS9XVmJhQ1lPcGE2SjV2UFRwa0gvN1Iva2FpTEtSQ0ZMZGRBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUdGVuaUNzOFRweURFREoreHNDQ054SGM2T3UzNks1bk52WG9nNXdvcGNRR3p0UzZ6U1J4bmFVeGY1MkJZeVZNVGwxTFRyL0JsSE55OElyUHE4c25nUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYyMDk3MTQ3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwNTU0OTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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

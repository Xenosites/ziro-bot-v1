//buatan zyko-md, jgn hapus atuh 😊
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendFile(m.chat, pickRandom(memeindo), null, `Nih *${name}* meme indo..`, m)
}
handler.tags = ['internet']
handler.help = ['memeindo']
handler.command = /^(memeindo)$/i

handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const memeindo = [


  "https://telegra.ph/file/caeb91ce9c7c3c30c306e.jpg",
  "https://telegra.ph/file/eecd9e708ec0d411b41da.jpg",
  "https://telegra.ph/file/f9ed2a6894efa41ea1ace.jpg",
  "https://telegra.ph/file/b8ee217780d89f37b8521.jpg",
  "https://telegra.ph/file/36a6ab1c1b579acf8fffe.jpg",
  "https://telegra.ph/file/4d94d2b6eeb60bf220aa3.jpg",
  "https://telegra.ph/file/dc7680c01ad7f63e9f554.jpg",
  "https://telegra.ph/file/7420b735af1ca0cef41d4.jpg",
  "https://telegra.ph/file/b36d4caf6cb7f59f3a6c6.jpg",
  "https://telegra.ph/file/d4cc7eca71bff0135c8c7.jpg",
  "https://telegra.ph/file/2a566f049d4d1f0f29531.jpg",
  "https://telegra.ph/file/d6ee05b2a53e0289acc79.jpg",
  "https://telegra.ph/file/e9657097154195058dd2d.jpg",
  "https://telegra.ph/file/f6eedbfd8b7bd2ceca195.jpg",
  "https://telegra.ph/file/af276c57a89721136439a.jpg",
  "https://telegra.ph/file/d9410f046cc8a761126e1.jpg",
  "https://telegra.ph/file/509c394f284b32709d810.jpg",
  "https://telegra.ph/file/011c2643012e1acc5f7b0.jpg",
  "https://telegra.ph/file/7767f9e6d630c2c32f0e0.jpg",
  "https://telegra.ph/file/ac02a1d92449f0510d4cd.jpg",
  "https://telegra.ph/file/b6cf47b4f725f7fa1ef30.jpg",
  "https://telegra.ph/file/ebe3ab4bfb146be44666e.jpg",
  "https://telegra.ph/file/244c6a80830d577bd9f99.jpg",
  "https://telegra.ph/file/03832f65c305e03c1cf22.jpg",
  "https://telegra.ph/file/e3ec20e086d56b00f4d58.jpg",
  "https://telegra.ph/file/11d91233c83805169229a.jpg",
  "https://telegra.ph/file/eb2f3eea1a66818ab5153.jpg",
  "https://telegra.ph/file/5bb2c07529b1b3dc67668.jpg",
  "https://telegra.ph/file/1d02ea4c04f3572d42d97.jpg",
  "https://telegra.ph/file/03a6e7047457e32d1d865.jpg",
  "https://telegra.ph/file/14e33c7b6d9fbbf1c6eba.jpg",
  "https://telegra.ph/file/36692150861e27f6bd553.jpg",
  "https://telegra.ph/file/6da6bc2e092cdf9af4b52.jpg",
  "https://telegra.ph/file/c6bb1920be33eab0048d3.jpg",
  "https://telegra.ph/file/f6b106201cf7114fbf8c4.jpg",
  "https://telegra.ph/file/24a41cacd7bc715607af0.jpg",
  "https://telegra.ph/file/789b57f2b5bd1096a2eba.jpg",
  "https://telegra.ph/file/4bf8a91030da9cd2f1b17.jpg",
  "https://telegra.ph/file/76b2bb23425a49ee7cb98.jpg"
]
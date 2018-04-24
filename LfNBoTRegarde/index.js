var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", async () => {

	console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
	bot.user.setActivity("NDNG - Mehmet60", {type: "WATCHING"});
  
  });
bot.login('ToKeN');
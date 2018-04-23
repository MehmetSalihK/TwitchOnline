var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
	console.log("Vous êtes connecté à " + bot.guilds.size + " servers!");
	bot.user.setGame("JE SUIS EN LIVE! :D", "https://www.twitch.tv/kmehmetsalih/")
  });
bot.login('ToKeN');
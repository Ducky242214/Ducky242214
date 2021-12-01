const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'd!'
function presence() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "Bot by Ducky242214ᵈᵉᵛ#5277 | d!help",
      type: "PLAYING"
    }
  });
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  presence ();
});
const { MessageEmbed } = require('discord.js');
client.on('message', msg => {
  const args = msg.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
  if (msg.content === 'ping') {
    msg.reply('Pong!');}
  if (msg.content === 'hola') {
    msg.reply('Hola!');
  }if (msg.content === 'Que pasa?') {
    msg.reply('Un burro por tu casa xD!');
  }
  if (msg.content === 'cristiano') {
    msg.reply('Ronaldo xD');
  }
  if (msg.content === 'd!twitch') {
    msg.reply('Hola humano, el canal de twitch de Ducky es este https://www.twitch.tv/reyduckyomgomg'); 
  }
  if (msg.content === 'adios') {
    msg.reply('Adios campeón!'); 
  }
  if (msg.content === 'Quiero tener una conversacion') {
    msg.reply('Ok, ¿como estas?'); 
  }
  if (msg.content === 'estoy bien') {
    msg.reply('Que bien!! ¿como te ha ído el día?'); 
  }
  if (msg.content === 'estoy mal') {
    msg.reply(':( esperemos que mañana sea mejor'); 
  }
  if (msg.content === 'cocacola') {
    msg.reply('Espuma xD'); 
  }
  if (msg.content === 'insultame') {
    msg.reply('Eres puto xD'); 
  }
  if (msg.content === 'xD') {
    msg.reply('xD'); 
  }
  if (msg.content === 'bien') {
    msg.reply('oh que bien! espero que tu día siga así :)'); 
  }
  if (msg.content === 'mal') {
    msg.reply('jope :( espero que mañana sea mejor'); 
  }
  if (msg.content === 'd!ESPAÑA') {
    msg.reply('CUANDO ME PREGUNTAN PORQUE SOY ESPAÑOL?  YO AUTOMATICAMENTE https://cdn.discordapp.com/attachments/893896181606920202/893896223889702992/Francisco_franco_edit480P.mp4 '); 
  }
  if (msg.channel.type === 'dm') return;
  if(msg.content.startsWith('d!clear')) {
      if (!msg.guild.me.hasPermission("MANAGE_MESSAGES")) {
          return msg.channel.send("No tengo los permisos reglamentarios!!");
        }
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
          return msg.channel.send("Usted no tiene permisos suficientes!!");
        }
        if (!args)
          return msg.channel.send("Tiene que escribir un número");
        let cantidadm = parseInt(args[0]);
        if (!cantidadm) return msg.reply("Necesitaría que fueran núemros!!");
        if (cantidadm > 98) {
          msg.channel.send(
            "Máximo de números 100!"
          );
          cantidadm = 98;
        }
        msg.channel.send(`Borrando ${cantidadm} Mensajes `);
        setTimeout(() => {
          msg.channel
            .bulkDelete(cantidadm + 2)
            .then(() => {})
            .catch(e => {
              console.log(e);
              msg.channel.send(
                "Parece qeu algo no va bien :exclamation:"
              );
            });
        }, 3000);
        msg.delete();
  }
  if (msg.content.startsWith('d!say')) {
    if(args.length === 0){
      return msg.reply('Tiene que escribir algo!!')
    }
    const saymsg = args.join(" ")
    msg.delete()
    msg.channel.send(saymsg)
  }
  if (msg.author.bot) return;
  if (msg.channel.type === 'dm') return;
  if(msg.content === 'd!serverinfo') {

      let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Server info")
      .setThumbnail(msg.guild.iconURL())
      .setDescription(`Info de ${msg.guild}`)
      .addField("Server ID", `La ID de este server es ${msg.guild.id}`)
      .addField("Owner", `El owner de este server es ${msg.guild.owner}`)
      .addField(`Fecha de creación del server`, `${msg.guild.createdAt}`)
      .addField("Member count", `Este server tiene ${msg.guild.memberCount} miembros`)
      .addField("Emoji count", `Este server tiene ${msg.guild.emojis.cache.size} emojis`)
      .addField("Roles count", `Este server tiene ${msg.guild.roles.cache.size} roles`)
      .addField(`Región del servidor`, `${msg.guild.region}`)
      .addField('Tiempo antes de que te muevan al canal AFK:', `${msg.guild.afkTimeout/60} minutos`)
      .addField('Boosts totales en el server', `${msg.guild.premiumSubscriptionCount}`)
      .addField('Canal de reglas', `${msg.guild.rulesChannel}`)
      .addField('Nivel de verificación', `${msg.guild.verificationLevel}`)
  
      msg.channel.send(embed)
  }
    if (msg.author.bot) return;
  if (msg.channel.type === 'dm') return;
  if(msg.content === 'd!help') {
          let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Ayuda de D-BOT")
      .setDescription(`Comandos d!twitch,d!meme,d!clear,d!say,d!serverinfo, d!ESPAÑA se irán metiendo más comandos :smile:`)
      msg.channel.send(embed)
  }
  client.on("message", message => {
    if (message.author.bot) return;
    if(message.content === 'd!meme') {
        var titlememe = [
        "Un buen momardo","ale un momaso xD","WTF","un meme pa disfruta","Meme que te define bRo"] // Titulos que quieres que los embeds tengan, es aleatorio
        var rpts = [
          "https://files.rcnradio.com/public/styles/d_img_850x580/public/2019-08/meme__0.jpg.webp?itok=sECpz_Cm", //Enlace de la imagen
          "https://www.partidopirata.cl/wp-content/uploads/2018/06/trump-pepe.jpg",//Enlace de la imagen
          "https://i.ytimg.com/vi/oP8KrzvdlMU/maxresdefault.jpg",//Enlace de la imagen
          "https://piks-eldesmarqueporta.netdna-ssl.com/thumbs/680/bin/2021/01/31/memes.jpeg",//Enlace de la imagen
          "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2020/06/meme-tenemos.jpeg",//Enlace de la imagen
          "https://sdmedia.playser.cadenaser.com/2020/9/5/1599296645_616752_still.jpg",//Enlace de la imagen
          "https://mk0lanoticiapwmx1x6a.kinstacdn.com/wp-content/uploads/2020/08/5d4d6bf58207a.png",//Enlace de la imagen
          "https://i.blogs.es/0299f0/creanme/450_1000.jpeg",//Enlace de la imagen
          "https://lh3.googleusercontent.com/proxy/5Z75ItfU5qa0T2t25xX6Ei-CMWEk-GArhmrzBnUgK5no3SD-L3L7GA2pKA2WiG0j847-ac8wy-zyMdY8jPJdG4TIKrLkzwiGjuygXi6_IMZLQ-Ty6HW8_K23IbVdgymv6RRC2DDibEvRqC0",//Enlace de la imagen
          "https://i.ytimg.com/vi/HHm9hPbEWXc/maxresdefault.jpg",//Enlace de la imagen
          "https://media.discordapp.net/attachments/818908467318226944/820417335940743198/2Q.png",//Enlace de la imagen
          "https://media.discordapp.net/attachments/818908467318226944/820417758595383306/2Q.png"
        ]
        const memembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(titlememe[Math.floor(Math.random() * titlememe.length)])
        .setImage(rpts[Math.floor(Math.random() * rpts.length)])
        message.channel.send(memembed)
    }
})
client.on("guildMemberAdd", async member => {
  if(!member.guild) return;
  client.channels.get("818923967443632148").send(`BUENAS <@${member.id}>, BIENVENIDO A LA COMUNIDAD DE LAS COMUNDADES, ${member.guild.name}`);
})


});
client.login(`OTE1NTg3MzA3Njk0ODUwMDY5.YadxIA.Y0KFYuQGVeVcSbJ0Zzr1LgdmOGE`);
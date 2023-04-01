module.exports = middlewares
const {isCommand, extractDataFromMessage} = require('./utils/index')

async function middlewares(bot) {
    bot.ev.on('messages.upsert', async({messages}) => {
        const baileysMessage = messages[0]

        if(!baileysMessage?.message || isCommand(baileysMessage)) {
            return
        }
        
        const {command, remoteJid} = extractDataFromMessage(baileysMessage)

        switch(command.toLowerCase()) {
            case 'ping':
                await bot.sendMessage(remoteJid, {text: 'Pong!'})
                break
        }

    })
}
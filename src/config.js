const path = require('path')

// Acredito que o PREFIX seja o comando para chamar a ação, ex: /ping em vez de somente usar ping
const PREFIX = ''
const BOT_EMOJI = 'ROBO'
const TEMP_FOLDER = path.resolve(__dirname, "..", "assets", "temp")

module.exports = {
    BOT_EMOJI,
    PREFIX,
    TEMP_FOLDER
}
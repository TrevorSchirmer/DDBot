const moment = require('moment')
const chalk = require('chalk')
const status = {
    online: `${chalk.green('"online"')}`,
    idle: `${chalk.yellow('"idle"')}`,
    dnd: `${chalk.red('"dnd"')} (Do Not Disturb)`,
    invisible: '"invisible"'
}

function configErr(text) {
    console.error(`\n[${chalk.cyan(moment().format('H:mm:ss'))}]${chalk.bgRed.bold(' Config Error ')} ${text}\n`)
    process.exit()
}

function logger(bg, title, text, timed = true) { console.log(`${timed ? `[${chalk.cyan(moment().format('H:mm:ss'))}]` : ''}${chalk[bg].bold(` ${title} `)} ${text}`) }

module.exports = {
    log(text, title = 'Log', bg = 'bgCyan', timed = false) { logger(bg, title, text, timed) },
    warn(text) { logger('bgYellow', 'Warning', text) },
    err(err, title = 'Bot') { logger('bgRed', `${title} Error`, `\n${(err && err.stack) || err}`) },
    fs(text, title) { logger('bgGreen', title, text) },
    cmd(msg, self) {
        if (typeof msg === 'object') {
            const cleanMsg = msg.cleanContent.replace(/\n/g, ' ')
            if (msg.author.id !== self.user.id) return
            logger('bgYellow', 'Msg', `|> ${chalk.magenta.bold(msg.channel.guild ? msg.channel.guild.name : 'in PMs')}: ${cleanMsg}`)
        }
    },
    mention(msg) {
        if (typeof msg === 'object') {
            const cleanMsg = msg.cleanContent.replace(/\n/g, ' ')
            logger('magenta', 'Mention', `|> ${chalk.bgYellow.bold(msg.channel.guild.name)}|> #${chalk.bgYellow.bold(msg.channel.name)}|> ${msg.author.username} (${msg.author.id}):\n\n${cleanMsg}\n`)
        }
    },
    keyword(msg, word = '') {
        if (typeof msg === 'object') {
            const cleanMsg = msg.cleanContent.replace(/\n/g, ' ')
            logger('magenta', `Keyword Mention: "${word}"`, `|> ${chalk.bgYellow.bold(msg.channel.guild.name)}|> #${chalk.bgYellow.bold(msg.channel.name)}|> ${msg.author.username} (${msg.author.id}):\n\n${cleanMsg}\n`)
        }
    },
    ready(text) {

        console.log(chalk.bgBlue(text));
    
    }
  }
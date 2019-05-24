const kick = require("../commands/kick");
const challenges = require("../commands/challenges");

module.exports = (client, message) => {
    if (message.content.startsWith("!kick")) {
        return kick(message);
    }
    if (message.content === 'ping') {
        msg.reply('Pong!');
    }
    if (message.content.startsWith("!challenges")) {
        return challenges(client, message);
    }
};
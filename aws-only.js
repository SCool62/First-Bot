module.exports = {
    name: 'aws-only',
    execute(message, args) {
        if (message.member.roles.cache.has('827646723576430642')) {
            message.channel.send('Yay! It works.')
        } else {
            message.channel.send('You can\'t use that command')
        }
    }
}
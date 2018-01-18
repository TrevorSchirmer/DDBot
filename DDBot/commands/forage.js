



exports.run = (client, message, args) => {

    var max = 350 * 1000;
    var min = 305 * 1000;
    var cycles;

    if (!args[0]) cycles = 10;
    else cycles = args[0];

    message.channel.send('#!forage');
    message.channel.send('#!chop');
    message.channel.send('#!mine');
    message.channel.send('#!fish');

    var delay = Math.floor(Math.random() * (max - min + 1)) + min;
    var i;


    //Assign forage commands
    for (i = 0; i < cycles; i++) {

        //Assign Forage Commands
        setTimeout(() => {

            message.channel.send('#!forage');
        }, delay)

        //Assign Chop Commands
        setTimeout(() => {

            message.channel.send('#!chop');
        }, delay + 2000)

        //Assign Mine Commands
        setTimeout(() => {

            message.channel.send('#!mine');
        }, delay + 4000)

        //Assign Fish Commands
        setTimeout(() => {

            message.channel.send('#!fish');
        }, delay + 6000)


        delay = delay + Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Tell user script is complete
    setTimeout(() => {

        message.channel.send('Complete skills!');
    }, delay + 1200)





}
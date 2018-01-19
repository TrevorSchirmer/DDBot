



exports.run = (client, message, args) => {

    var max = 20 * 1000;
    var min = 16 * 1000;
    var cycles;

    if (!args[0]) cycles = 10;
    else cycles = args[0];

    message.channel.send('#!adv 2');


    var delay = Math.floor(Math.random() * (max - min + 1)) + min;
    var i;


    //Assign Adv commands
    for (i = 0; i < cycles; i++) {

        //Assign Adv Commands
        setTimeout(() => {

            message.channel.send('#!adv 2');
        }, delay)


        delay = delay + Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Tell user script is complete
    setTimeout(() => {

        message.channel.send('Complete adv!');
    }, delay + 1200)





}
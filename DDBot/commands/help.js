exports.run = (client, message, args) => {

    //Intro
    message.channel.send("Commands I can do:").catch(console.error);

    //Adv
    message.channel.send("-adv    Run '#!adv 2 ' 10 times. Watch your health!").catch(console.error);
    message.channel.send("-adv x  Run '#!adv 2 ' x times. Watch your health! (x is an int)").catch(console.error);
    

    //For
    message.channel.send("-forage    Run side skills 10 times").catch(console.error);
    message.channel.send("-forage x  Run side skills x times").catch(console.error);

    //Gen
    message.channel.send("To stop the bot close the terminal opened when you ran it").catch(console.error);
    
    
}
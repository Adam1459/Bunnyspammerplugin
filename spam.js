console.log("Spam plugin loaded!");

export default {
    name: "Spammer",
    description: "Spams a message a limited number of times with a sound effect.",
    command: {
        name: "spam",
        description: "Spam a message multiple times.",
        options: [
            {
                name: "message",
                description: "The message to spam",
                type: 3, // String type
                required: true
            },
            {
                name: "times",
                description: "How many times to spam (max 60)",
                type: 4, // Integer type
                required: true
            }
        ]
    },
    async run(ctx) {
        let message = ctx.options.getString("message");
        let times = ctx.options.getInteger("times");

        // Limit the spam amount to 60
        if (times > 60) times = 60;

        // Play a sound effect once (replace with a valid URL)
        new Audio("https://www.myinstants.com/media/sounds/vine-boom.mp3").play();

        // Spam the message
        for (let i = 0; i < times; i++) {
            await ctx.send(message);
        }
    }
};
const projectsData = [
    {
        title: "Terrain Renderer",
        description: "Simple terrain renderer built using OpenGL",
        cardImage: "/images/terrain-card.png",
        coverImage: "/images/terrain-cover.png", 
        tech: ["C++", "OpenGL", "GLSL"],
    },
    {
        title: "COVIDSOS Bot",
        description: "Twitter Bot to help people during the COVID19 pandemic",
        cardImage: "/images/tweet-bot-card.png",
        coverImage: "/images/tweet-bot-cover.png",
        repoLink: "https://github.com/rishimungia/COVIDSOS-TweetBot",
        tech: ["Python", "Tweepy"],

        content: [
            {
                paragraph: {
                    content: "The idea for this bot originated from the #COVIDSOS trend on Twitter. The goal was to create a bot that can help users find relevant information without going through the hassel of digging through thousands of tweets."
                }
                
            },
            {
                paragraph: {
                    title: "| Auto-reply",
                    content: "The bot can reply to mention tweets on it's timeline. It is configured to automaticly reply to mentions with hashtags like #reply, #COVIDSOS, #covidDM, etc.\nThis module also manages enrollment of users to the Direct Messages feature, it looks for keywords like: '#coviddm start' and initiates the CovidDM module."
                }
            },
            {
                imagePara: {
                    style: 1,
                    title: "| CovidDM",
                    image: "/images/tweet-bot-a.png",
                    content: "If the user is following the Bot account, they can get any information related to COVID19 directly through their personal messages. The availabe commands for DM module are:\n\n> CovidStatus: Get details of present COVID cases.\n> CovidSOS [Location] [Requirement]: Get relevant #COVIDSOS Tweets.\n> Stop: Unenroll from the CovidDM module."
                }
            },
            {
                paragraph: {
                    title: "| Terminal Interface",
                    content: "The terminal interface is designed to be user friendly. It also has some audio output for accesibility. It contains commands to control the TweetBot like:\n\n> Custom Tweet\n> Check for unreplied tweets\n> Covid Status - Get details of present COVID cases\n> Search Tweets by hashtag\n> Search Tweets by Username\n> Search for #COVIDSOS Tweets"
                }
            }

        ]
    },
    {
        title: "Nano Slayer",
        description: "2D Action Platformer Game made using Unity Engine",
        cardImage: "/images/nano-slayer-card-2.png",
        coverImage: "/images/nano-slayer-cover.png",
        repoLink: "https://github.com/rishimungia/NanoSlayer-Redux",
        tech: ["Unity", "C#", "Photoshop"],

        content: [
            {
                paragraph: {
                    content: "This was a semester project that I made with my friends for Computer Graphics course. But just like any other game developer, I was not satisfied with the end result. So I did what any other game developer would do, is to remaster the entire game.\nSo what exactly is Nano Slayer? Well it's an 2D Action Platformer in which you have to fight through endless hoards of enemies. The idea was heighly inspired from the classic FPS Shooter DOOM."
                }
            },
            {
                button: {
                    title: "| Play Now",
                    content: "Download for Windows PC / Mac / Linux",
                    buttonTitle: "Download - Itch.io",
                    buttonLink: "https://pixelbit-r.itch.io/nano-slayer",
                }
            },
            {
                imagePara: {
                    style: 1,
                    title: "| Player Mechanics",
                    image: "/images/nano-slayer-a.png",
                    content: "Since this is core part of the game, it took the most time to perfect. A bad player controller can easily break immersion and break the game so I put a lot of effort to make the movement as fluid as possible. There are some special player mechanics apart from base movement: \n> Wall Sliding\n> Double Jump\n> Wall Jump"
                }
            },
            {
                paragraph: {
                    title: "| Enemies and Powers",
                    content: "Currently there are three enemy types each with it's own behaviour and attacks so they give the player a good amount of challenge. But fret not as our protagonist has some cool gadgets and powerups in it's arsenal. I am not going to spoil all the fun so instead let's take a look at the different foes you'll be facing..."
                }
            },
            {
                imagePara: {
                    style: 0,
                    title: "| Jumper",
                    image: "/images/nano-slayer-b.png",
                    content: "This is one of the more annoing ones to kill. It jumps above the player and does a massive damage by directly landing on the head."
                }
            },
            {
                imagePara: {
                    style: 1,
                    title: "| Atomic Crab",
                    image: "/images/nano-slayer-c.png",
                    content: "It's the result of a radioactive experiment on a crab gone very WRONG! It shoots radioactive projectiles that explode instantly on impact. However it dosent like to be in close contact to the player."
                }
            },
            {
                imagePara: {
                    style: 0,
                    title: "| Robo Spider",
                    image: "/images/nano-slayer-d.png",
                    content: "This sneaky spider has just one goal, to sneak up behind the Slayer and Go BOOM! And it is most definately not a reskined Minecraft Creeper."
                }
            },
            {
                paragraph: {
                    title: "| Graphics and Art",
                    content: "The game assets all follow pixel-art style. It makes the task of asset creation easy and is pleasing to look at. Along with that Unity's new 2D Lights bundled with the Universal Render Pipeline gives the whole level a sense of depth. And not to forget Unity's amazing Particle System which brings the game world to life, it gives simple boring looking scenes a sence of motion."
                }
            },
            
        ]
    },
];

export default projectsData;
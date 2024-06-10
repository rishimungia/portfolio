const projectsData = [
    {
        title: "Pegasus Cab",
        description: "Script Mod for Grand Theft Auto V",
        cardImage: "/images/pegasus-cab/card.png",
        coverImage: "/images/pegasus-cab/cover.png", 
        tech: ["C#", "Script Hook V .NET"],
        repoLink: "https://github.com/rishimungia/pegasus-cab",

        content: [
            {
                paragraph: {
                    content: "This mod elevates the GTA 5 experience, offering players a customizable and immersive cab service within the game world. Pegasus Cabs is an online cab service rivaling Downtown Cab Co. Offering various tiers of cabs, from economic to luxurious options, Pegasus Cabs is your new go-to for all your transportation needs. To order, simply call the Pegasus Cab contact from your in-game phone and choose your preferred cab type."
                }
            },
            {
                imagePara: {
                    title: "| Features",
                    content: "> Cab Types: Choose from 6 pre-defined cab types, with the option to customize and add more via the 'OnlineCabData.xml' file.\n> Cab Options: Enjoy features like Rush mode for faster travel, Skip for instant teleportation (for an extra cost), and the ability to update or cancel your ride mid-trip.\n> XML Customization: Customize cab types, vehicle spawns, driver models, fares, and more through XML configuration.",
                    image: "/images/pegasus-cab/features.png"
                }
            },
            {
                button: {
                    title: "| Download Now",
                    content: "The mod has already been downloaded by more than 3000 players. And the total downloads on my gta5-mods profile has crossed 35k unique downloads.",
                    buttonTitle: "GTA5-Mods",
                    buttonLink: "https://www.gta5-mods.com/scripts/pegasus-cab",
                }
            }
        ]
    },
    {
        title: "Terrain Renderer",
        description: "Simple terrain renderer built using OpenGL",
        cardImage: "/images/opengl-renderer/terrain-card.png",
        coverImage: "/images/opengl-renderer/terrain-cover.png", 
        tech: ["C++", "OpenGL", "GLSL"],
        repoLink: "https://github.com/rishimungia/opengl-terrain-renderer",

        content: [
            {
                paragraph: {
                    content: "This project features a basic OpenGL renderer that generates realistic terrains from provided heightmap. It includes Blinn-Phong shading for natural lighting, normal map support for enhanced surface detail, and texture mapping based on terrain height for varied appearances like grass, rock, and snow. Additionally, it incorporates billboard vegetation, using 2D images for plants and trees."
                }
            },
            {
                imagePara: {
                    title: "| Terrain Displacement Map",
                    content: "The terrain is rendered as a triangle strip. It involves loading a heightmap texture and sending it to the vertex shader, where encoded height value is decoded using shift operations. The calculated height is then used to displace the vertices to render a detailed and realistic terrain mesh.",
                    image: "/images/opengl-renderer/heightmap.png"
                }
            },
            {
                imagePara: {
                    style: 0,
                    title: "| Shading",
                    content: "The renderer employs Phong shading to simulate a global directional light, managed through the fragment shader. This shading technique considers the material's roughness and metallic properties, resulting in realistic lighting effects. \n\nSurface normals are calculated in the vertex shader using the decoded height map values and are used by the fragment shader for normal mapping when shading.",
                    image: "/images/opengl-renderer/normalmap.png"
                }
            },
            {
                paragraph: {
                    title: "| Billboards",
                    content: "The vegetation is rendered using Billboards which are rendered using a geometry shader which processes the vertex positions to create and position quads for the billboards. It outputs the quads only when the random value condition is met, ensuring billboards appear at random locations. The fragment shader renders the billboards on lower height parts of the terrain, discarding the background from the texture."
                }
            },
            {
                paragraph: {
                    title: "| Skybox",
                    content: "Using a vertex shader, the skybox vertices and matrices transform the view to include only rotation, ensuring constant depth. The fragment shader utilizes these transformed coordinates and cubemap textures to render the skybox, creating a seamless background for the scene."
                }
            }
        ]
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
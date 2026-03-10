export interface Card {
    name: string;
    description: string;
    resources: url[];
    socials: url[];
}

export interface url {
    name: string;
    url: string;
    icon? : string; 
}

export let template: Card[] = [{
    "name": "YOUR NAME",
    "description": "ABOUT YOU - Here Add something about yourself.",
    // Max 3 Resources
    "resources": [
        {
            "name": "RESOURCE 1",
            "url": "https://typesafe-rusty.github.io/contribute-to-this-repo/"
        },
        {
            "name": "RESOURCE 2",
            "url": "https://typesafe-rusty.github.io/contribute-to-this-repo/"
        },
        {
            "name": "RESOURCE 3",
            "url": "https://typesafe-rusty.github.io/contribute-to-this-repo/"
        }
    ],
    /* Max 5 Socials
     * socials: [
     *     { name: "github", url: "https://your-link-to-github/" },
     *     { name: "linkedin", url: "https://your-link-to-linkedin/" },
     *     { name: "instagram", url: "https://your-link-to-instagram/" },
     *     { name: "facebook", url: "https://your-link-to-facebook/" },
     *     { name: "twitter", url: "https://your-link-to-twitter/" }
     * ],
     */
    "socials": [
        {
            "name": "github",
            "url": "https://typesafe-rusty.github.io/contribute-to-this-repo/"
        },
        {
            "name": "linkedin",
            "url": "#"
        },
        {
            "name": "instagram",
            "url": "#"
        },
        {
            "name": "facebook",
            "url": "#"
        },
        {
            "name": "twitter",
            "url": "#"
        }
    ]
}]
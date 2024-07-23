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
    "description": "ABOUT YOU",
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
    "socials": [
        {
            "name": "SOCIAL 1",
            "url": "https://typesafe-rusty.github.io/contribute-to-this-repo/"
        },
        {
            "name": "SOCIAL 2",
            "url": "https://typesafe-rusty.github.io/contribute-to-this-repo/"
        },
        {
            "name": "SOCIAL 3",
            "url": "https://typesafe-rusty.github.io/contribute-to-this-repo/"
        }
    ]
}]
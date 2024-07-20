export interface Card {
    name: string;
    description: string;
    resources: url[];
    socials: url[];
}

export interface url {
    name: string;
    url: string;
}

export let template: Card[] = [{
    "name": "YOUR NAME",
    "description": "ABOUT YOU",
    "resources": [
        {
            "name": "RESOURCE 1",
            "url": "/"
        },
        {
            "name": "RESOURCE 2",
            "url": "/"
        },
        {
            "name": "RESOURCE 3",
            "url": "/"
        }
    ],
    "socials": [
        {
            "name": "SOCIAL 2",
            "url": "/"
        },
        {
            "name": "SOCIAL 2",
            "url": "/"
        },
        {
            "name": "SOCIAL 3",
            "url": "/"
        }
    ]
}]
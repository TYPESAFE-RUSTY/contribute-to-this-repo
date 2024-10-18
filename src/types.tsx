import { IconType } from "react-icons";

export interface Resource {
  name: string;
  url: string;
  icon?: IconType;
}

export interface Social {
  name:
    | "github"
    | "linkedin"
    | "instagram"
    | "facebook"
    | "twitter"
    | "youtube"
    | "tiktok"
    | "website"
    | "discord"
    | "twitch"
    | "reddit"
    | "pinterest"
    | "snapchat"
    | "whatsapp"
    | "telegram"
    | "medium"
    | "devto"
    | "dribbble"
    | "behance"
    | "stackOverflow"
    | "gitlab"
    | "codepen"
    | "vimeo"
    | "soundcloud"
    | "spotify"
    | "appleMusic"
    | "bandcamp"
    | "flickr"
    | "quora"
    | "tumblr"
    | "kickstarter"
    | "patreon";
  url: string;
}

export interface Card {
  name: string;
  description: string;
  resources: Resource[];
  socials: Social[];
}

export let template: Card[] = [
  {
    name: "YOUR NAME",
    description: "ABOUT YOU",
    resources: [
      {
        name: "RESOURCE 1",
        url: "https://typesafe-rusty.github.io/contribute-to-this-repo/",
      },
      {
        name: "RESOURCE 2",
        url: "https://typesafe-rusty.github.io/contribute-to-this-repo/",
      },
      {
        name: "RESOURCE 3",
        url: "https://typesafe-rusty.github.io/contribute-to-this-repo/",
      },
    ],
    socials: [
      {
        name: "SOCIAL 1",
        url: "https://typesafe-rusty.github.io/contribute-to-this-repo/",
      },
      {
        name: "SOCIAL 2",
        url: "https://typesafe-rusty.github.io/contribute-to-this-repo/",
      },
      {
        name: "SOCIAL 3",
        url: "https://typesafe-rusty.github.io/contribute-to-this-repo/",
      },
    ],
  },
];

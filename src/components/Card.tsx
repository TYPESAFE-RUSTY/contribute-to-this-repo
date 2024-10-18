"use client";

import React from "react";
import { Card as C, Resource } from "@/types";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaDiscord,
  FaTwitch,
  FaReddit,
  FaPinterest,
  FaSnapchat,
  FaWhatsapp,
  FaTelegram,
  FaMedium,
  FaDev,
  FaDribbble,
  FaBehance,
  FaStackOverflow,
  FaGitlab,
  FaCodepen,
  FaVimeo,
  FaSoundcloud,
  FaSpotify,
  FaApple,
  FaFlickr,
  FaQuora,
  FaTumblr,
  FaKickstarter,
  FaPatreon,
} from "react-icons/fa6";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const MAX_DESCRIPTION_LENGTH = 100;
const MAX_SOCIALS = 5;
const MAX_NAME_LENGTH = 25;

const socialIcons: Record<string, JSX.Element> = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  youtube: <FaYoutube />,
  tiktok: <FaTiktok />,
  discord: <FaDiscord />,
  twitch: <FaTwitch />,
  reddit: <FaReddit />,
  pinterest: <FaPinterest />,
  snapchat: <FaSnapchat />,
  whatsapp: <FaWhatsapp />,
  telegram: <FaTelegram />,
  medium: <FaMedium />,
  devto: <FaDev />,
  dribbble: <FaDribbble />,
  behance: <FaBehance />,
  stackOverflow: <FaStackOverflow />,
  gitlab: <FaGitlab />,
  codepen: <FaCodepen />,
  vimeo: <FaVimeo />,
  soundcloud: <FaSoundcloud />,
  spotify: <FaSpotify />,
  appleMusic: <FaApple />,
  flickr: <FaFlickr />,
  quora: <FaQuora />,
  tumblr: <FaTumblr />,
  kickstarter: <FaKickstarter />,
  patreon: <FaPatreon />,
};

function getIcon(data: Resource, key: number) {
  const { name, url } = data;
  const IconComponent = socialIcons[name];

  if (!IconComponent) return null;

  return (
    <Button variant="ghost" asChild size={"icon"}>
      <a key={key} href={url} target="_blank" rel="noopener noreferrer">
        {IconComponent}
      </a>
    </Button>
  );
}

export default function BlogCard({ data }: { data: C }) {
  return (
    <TooltipProvider>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold capitalize">{data.name}</CardTitle>
          <div className="flex items-center gap-1">
            {data.socials.map(
              (element, index) => index < MAX_SOCIALS && getIcon(element, index)
            )}
          </div>
          <CardDescription>
            {data.description.length <= MAX_DESCRIPTION_LENGTH
              ? data.description
              : `${data.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-sm font-medium mb-2">
            Resources I'd love to share:
          </h3>
          <ScrollArea className="h-24">
            {data.resources.map((resource, index) => {
              return (
                <div key={index} className="mb-1">
                  <Tooltip>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <span>
                        {resource.icon && (
                          <resource.icon className="ml-2" fill="#478cbf" />
                        )}
                      </span>
                      <TooltipTrigger>
                        {resource.name.length <= MAX_NAME_LENGTH
                          ? resource.name
                          : `${resource.name.slice(0, MAX_NAME_LENGTH)}...`}
                      </TooltipTrigger>
                    </a>
                    <TooltipContent>
                      <p>{resource.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}

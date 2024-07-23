"use client";
import React from "react";
import { Card as C, url } from '@/types';
import { Tilt } from 'react-tilt';

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { SiGodotengine } from "react-icons/si";

const MAX_DESCRIPTION_LENGTH = 100;
const MAX_SOCIALS = 5;
const MAX_RESOURCE = 3;
const MAX_NAME_LENGTH = 27;

function getIcon(data: url, key: number) {
    let { name, url } = data;
    //(note for future me) remember to compare url to name 
    switch (name.toLowerCase().trim()) {
        case "github" || "git hub" || "git-hub":
            return <a key={key} href={url} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        case "linkedin" || "linked in":
            return <a key={key} href={url} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        case "instagram":
            return <a key={key} href={url} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        case "facebook":
            return <a key={key} href={url} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        case "twitter" || "x":
            return <a key={key} href={url} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    }

    return <></>
}

const defaultOptions = {
    reverse: true,  // reverse the tilt direction
    max: 20,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 50,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Card({ className, data }: { className: string, data: C }) {
    return (
        <Tilt options={defaultOptions} className={className} style={{ height: 300, width: 300 }}>
            <h2>{data.name}</h2>
            <div className="socials">
                {
                    // display only top 5 social media handles
                    data.socials.map((element, index) => index < MAX_SOCIALS && <React.Fragment key={index}>{getIcon(element, index)}</React.Fragment>)
                }
            </div>
            <p style={{ width: "100%", marginBlockStart: "0.5rem" }}>
                {
                    // dont display extra long descriptions
                    data.description.length <= MAX_DESCRIPTION_LENGTH ? data.description : `${data.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
                }</p>

            <h3 style={{ fontSize: "medium", marginBlock: "1rem 0.5rem" }}>Resources I&apos;d love to share:</h3>
            <ul>
                {
                    data.resources.map((resource, index) => (index <=MAX_RESOURCE && <li key={index} style={{ marginBlockEnd: "0.25rem" }}>
                        <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {resource.name.length <= MAX_NAME_LENGTH ? resource.name : `${resource.name.slice(0,MAX_NAME_LENGTH )}...`}
                            {resource.icon && <SiGodotengine fill="#478cbf"/>}
                        </a>
                    </li>))
                }
            </ul>
        </Tilt>
    )
}

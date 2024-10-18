"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Fuse from "fuse.js"; // Import Fuse.js

import Card from "@/components/Card";
import { data } from "@/DataStore";
import { Card as C, template } from "@/types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import RetroGrid from "@/components/ui/retro-grid";
import NumberTicker from "@/components/ui/number-ticker";
import { Info, MoveRight } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

let cards: C[] = [...template, ...data];

export default function Home() {
  const [items, setItems] = useState<C[]>(cards.slice(0, 20));
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [searchResults, setSearchResults] = useState<C[]>([]); // State to store the search results

  // Configure Fuse.js options
  const fuse = new Fuse(cards, {
    keys: ["name","description"], // Specify the fields to search through
    threshold: 0.4, // Adjust the search sensitivity (lower value = more strict matches)
  });

  // Handle the search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      // Perform the search using Fuse.js
      const results = fuse.search(query).map((result) => result.item); // Extract the matching items
      setSearchResults(results);
    } else {
      // If query is empty, reset to the original card list
      setSearchResults([]);
    }
  };

  // Function to load more data when using infinite scroll
  const loadMoreData = () => {
    setItems(items.concat(cards.slice(items.length, items.length + 20)));
  };

  // Data to be rendered (either search results or the original list)
  const displayedCards = searchQuery ? searchResults : items;

  return (
    <TooltipProvider>
      <main className="flex flex-col">
        <div className="relative flex h-auto md:h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl m-4">
          <span className="z-10 whitespace-pre-wrap text-center font-bold leading-none tracking-tighter p-4">
            <section className="flex flex-col gap-4">
              <div>
                <NumberTicker
                  value={2100}
                  className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter text-transparent"
                />
                <h3 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter text-transparent">
                  Contributions so far
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-center text-sm md:text-base">
                  Contributing to open-source can be intimidating, but we make
                  it simple. Learn the basics of GitHub and{" "}
                  <br className="hidden md:block" /> submit your first pull
                  request today.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                  <div className="flex items-center gap-2 border rounded-lg p-2">
                    <Info />
                    <span>Start by editing</span>
                    <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      src/DataStore.json
                    </code>
                  </div>

                  <a
                    href="https://github.com/TYPESAFE-RUSTY/contribute-to-this-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="mt-2 md:mt-0">
                      Start Contributing <MoveRight />
                    </Button>
                  </a>
                </div>
              </div>
            </section>
          </span>
          <RetroGrid />
        </div>
        <div className="flex justify-center p-4">
          <input
            type="text"
            placeholder="Search cards..."
            value={searchQuery}
            onChange={handleSearch}
            className="border rounded-lg p-2 w-80"
          />
        </div>
        {/* Infinite Scroll for Cards */}
        <InfiniteScroll
          dataLength={displayedCards.length}
          next={loadMoreData}
          hasMore={items.length < cards.length}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-4">
            {displayedCards.map((card, index) => (
              <Card key={index} data={card} />
            ))}
          </div>
        </InfiniteScroll>

        <footer className="bg-background text-center p-4 mt-8 border-t flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <span>In Collaboration With</span>
          <a
            href="https://dbit.acm.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="./acm.png"
              alt="ACM Logo"
              className={styles.vercelLogo}
              width={40}
              height={40}
            />
          </a>
        </footer>
      </main>
    </TooltipProvider>
  );
}

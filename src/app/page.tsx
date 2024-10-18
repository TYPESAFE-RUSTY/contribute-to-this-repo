"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Fuse from "fuse.js";

import Card from "@/components/Card";
import { data } from "@/DataStore";
import { Card as C, template } from "@/types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react"; // Import useEffect
import RetroGrid from "@/components/ui/retro-grid";
import NumberTicker from "@/components/ui/number-ticker";
import { Info, MoveRight, ArrowUp } from "lucide-react"; // Import ArrowUp icon
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

let cards: C[] = [...template, ...data];

export default function Home() {
  const [items, setItems] = useState<C[]>(cards.slice(0, 20));
  const [showScroll, setShowScroll] = useState(false); // State to show/hide the button

  // Function to load more data when using infinite scroll
  const loadMoreData = () => {
    setItems((prevItems) => prevItems.concat(cards.slice(prevItems.length, prevItems.length + 20)));
  };

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TooltipProvider>
      <main className="flex flex-col">
        <div className="relative flex h-auto md:h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl m-4">
          <span className="z-10 whitespace-pre-wrap text-center font-bold leading-none tracking-tighter p-4">
            <section className="flex flex-col gap-4">
              <div>
                <NumberTicker
                  value={cards.length}
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
                      src/DataStore.ts
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

        {/* Infinite Scroll for Cards */}
        <InfiniteScroll
          dataLength={items.length}
          next={loadMoreData}
          hasMore={items.length < cards.length}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-4">
            {items.map((card, index) => (
              <Card key={index} data={card} />
            ))}
          </div>
        </InfiniteScroll>

        {/* Back to Top Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 p-2 bg-zinc-950 text-white border rounded-full shadow-md hover:bg-zinc-900 transition duration-200"
            aria-label="Back to Top"
          >
            <ArrowUp />
          </button>
        )}

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

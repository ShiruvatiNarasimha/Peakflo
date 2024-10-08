import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
("use client");
import React from "react";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div>
        <h1>Put your Finance Operations on Auto-Pilot!</h1>
        <p>
          It’s time to put your accounts payable, receivable, payments, travel &
          expense management on auto-pilot, spend more time on growing your
          business, and less on managing your payments.
        </p>
        <div>
          <Link href={"/courses"}>
            <Button>GetStarted</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

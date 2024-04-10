'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Genres">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/rock">Rock</HoveredLink>
            <HoveredLink href="/pop">Pop</HoveredLink>
            <HoveredLink href="/hip-hop">Hip Hop</HoveredLink>
            <HoveredLink href="/jazz">Jazz</HoveredLink>
            <HoveredLink href="/classical">Classical</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Artists">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/artist/john-doe">Cold Play</HoveredLink>
            <HoveredLink href="/artist/jane-smith">One Direction</HoveredLink>
            <HoveredLink href="/artist/michael-jackson">Michael Jackson</HoveredLink>
            <HoveredLink href="/artist/beyonce">Beyoncé</HoveredLink>
            <HoveredLink href="/artist/elvis-presley">Dua Lipa</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Playlists">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/playlist/top-hits">Top Hits</HoveredLink>
            <HoveredLink href="/playlist/relaxing">Relaxing Vibes</HoveredLink>
            <HoveredLink href="/playlist/workout">Workout Mix</HoveredLink>
            <HoveredLink href="/playlist/focus">Focus Mode</HoveredLink>
            <HoveredLink href="/playlist/road-trip">Road Trip Jams</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us">

        </MenuItem>
        </Link>
      </Menu>
    </div>

  )
}

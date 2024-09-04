import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiGroupme } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          THS CCC
        </Link>
        <div className="flex space-x-4">
          <Button
            asChild
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Link
              href="https://groupme.com/join_group/12345678/abcdefgh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <SiGroupme className="h-4 w-4" />
              <span>GroupMe</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Link
              href="https://discord.gg/5XygwPjrMB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaDiscord className="h-4 w-4" />
              <span>Discord</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

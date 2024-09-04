"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { clubsData } from "@/app/data/clubs";

interface SubscribeResponse {
  message: string;
}

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const data = (await response.json()) as SubscribeResponse;
        throw new Error(data.message || "An error occurred");
      }
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred",
      );
    }
  }

  function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <>
      <section className="flex h-screen w-full items-center justify-center bg-black py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
                  THS CCC
                </h1>
                <p className="mx-auto max-w-[600px] text-zinc-200 dark:text-zinc-100 md:text-xl">
                  Join us for 2024-2025!
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form onSubmit={onSubmit} className="flex space-x-2">
                  <Input
                    className={`max-w-lg flex-1 border-gray-900 bg-gray-800 text-white ${
                      status === "error" ? "border-red-500" : ""
                    }`}
                    placeholder={
                      status === "success"
                        ? "Thanks for signing up!"
                        : "Enter your email"
                    }
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "success"}
                  />
                  <Button
                    className="bg-white text-black"
                    type="submit"
                    disabled={status === "success"}
                  >
                    Join Now
                  </Button>
                </form>
                {status === "error" && (
                  <p className="text-xs text-red-500">{errorMessage}</p>
                )}
                <p className="text-xs text-zinc-200 dark:text-zinc-100">
                  Get ready for our best year yet.
                  <br />
                  <br />
                  Updates and opportunities available soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Other Clubs to Check Out
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clubsData.map((club, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  <Link href={club.link}>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {club.name}
                  </h3>
                  <p className="mb-4 text-gray-300">{club.description}</p>
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

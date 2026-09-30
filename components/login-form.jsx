"use client";

import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";

export function LoginForm({ className, ...props }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/details", {
        name,
        email,
        details,
      });

      if (response.status === 201) {
        console.log("Saved successfully!");

        // Reset fields
        setName("");
        setEmail("");
        setDetails("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">LET'S CONNECT</span>
            </a>
            <h1 className="text-2xl font-bold ">LET'S CONNECT</h1>
            <div className="text-center text-sm text-gray-500">
              Have something worth building?
            </div>
            <div className="text-center text-xs">
              Whether it's a software engineering opportunity, a collaboration, or an interesting problem — I'd love to hear from you.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="Name">Your Name:</Label>
              <Input
                id="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                required
              />
              <Label htmlFor="Email">Email</Label>
              <Input
                id="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                required
              />
              <Label htmlFor="Details"> Message: </Label>
              <textarea
                id="Details"
                value={details}
                className=" h-24 rounded-md border p-2 placeholder:text-xs placeholder:lg:text-sm"
                type="text"
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Tell me what's on your mind..."
                required
              />
            </div>
            <Button type="submit" className="w-full p-3">
              Submit
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"></div>
          <span className="items-center text-center z-10 -my-2">Prefer Email? </span>
          <div className="w-2/3 flex items-center justify-center mx-auto">
            <Button
              variant="outline"
              type="button"
              className="w-full p-2 border-neutral-800 text-black"
            >
              <a href="mailto:keshavvsonii01@gmail.com?subject=Hey, Got a project">
                Send Me An Email!{" "}
              </a>
            </Button>
          </div>
        </div>
      </form>


      <div className="flex items-center justify-between">
        <a href="https://drive.google.com/file/d/1jx3RUHKOGKppmn8IeHQV1rHkb3nfFxZE/view?usp=drive_link" target="_blank">Resume ↗</a>
        <a href="https://www.linkedin.com/in/keshavvsoni01/" target="_blank">Linkedin ↗</a>
        <a href="https://github.com/keshavvsonii01" target="_blank">Github ↗</a>
        <a href="https://x.com/Keshavv01" target="_blank">X ↗</a>
      </div>

      <div className="text-muted-foreground  text-center text-xs text-balance ">
        @ 2025 Keshav Soni.
        <br />
        <Link
          href={"/"}
          className="hover:underline text-muted-foreground  text-center text-xs text-balance "
        >
          <span className="">Home</span>
        </Link>
      </div>
    </div>
  );
}

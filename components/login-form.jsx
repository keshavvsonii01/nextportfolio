'use client'

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

    if (response.status === 200) {
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
              <span className="sr-only">Hi There, I'm Keshav Soni.</span>
            </a>
            <h1 className="text-2xl font-bold">Hi There, I'm Keshav Soni.</h1>
            <div className="text-center text-sm">
              I would Love to hear from you.{" "}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="Name">Your Name:</Label>
              <Input
                id="Name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                required
              />
              <Label htmlFor="Email">Email</Label>
              <Input
                id="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                required
              />
              <Label htmlFor="Details"> More details about your Project</Label>
              <textarea
                id="Details"
                className=" h-24 rounded-md border p-2 placeholder:text-xs placeholder:lg:text-sm"
                type="text"
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Description of your project"
                required
              />
            </div>
            <Button type="submit"  className="w-full">
              Submit
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>
          <div className="w-2/3 flex items-center justify-center mx-auto">
            <Button
              variant="outline"
              type="button"
              className="w-full text-black"
            >
              <a href="mailto:keshavvsonii01@gmail.com?subject=Hey, Got a project">
                Send Me An Email!{" "}
              </a>
            </Button>
          </div>
        </div>
      </form>
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

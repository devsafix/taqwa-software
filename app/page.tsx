"use client";

import type React from "react";

import Image from "next/image";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-muted/20" />

      {/* Ambient glow effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px] animate-pulse"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      />

      {/* Content container */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-16 fade-in">
          <div className="relative">
            <Image
              src="/taqwasoftwarelogo.webp"
              alt="TawqaSoftware"
              width={180}
              height={60}
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Main content card */}
        <div className="glass-card rounded-4xl p-12 md:p-16 fade-in fade-in-delay-1">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-6 text-balance leading-tight">
            We are building something{" "}
            <span className="font-normal text-foreground/95">meaningful</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 text-pretty leading-relaxed max-w-2xl mx-auto">
            Crafting software with purpose, quality, and integrity.
            <br className="hidden sm:block" />
            Guided by values that endure.
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={isSubmitting || isSubmitted}
                className="glass-input flex-1 px-6 py-4 rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="glass-button px-8 py-4 rounded-2xl font-medium text-primary disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitted
                  ? "Thank you"
                  : isSubmitting
                  ? "Joining..."
                  : "Join Whitelist"}
              </button>
            </div>
          </form>

          {/* Success message */}
          {isSubmitted && (
            <p className="text-center mt-6 text-sm text-primary/90 animate-in fade-in duration-300">
              We&apos;ll keep you informed
            </p>
          )}
        </div>

        {/* Footer note */}
        <p className="text-center mt-12 text-sm text-muted-foreground/70 fade-in fade-in-delay-2">
          Building with care, launching with confidence
        </p>
      </div>
    </main>
  );
}

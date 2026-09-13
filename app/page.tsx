"use client";

import { useState } from "react";

function Student({ name, course }: { name: string; course: string }) {
  return (
    <div className="p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 w-full max-w-sm">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h2>
      <p className="text-gray-600 dark:text-gray-300">{course}</p>
    </div>
  );
}

export default function Home() {
  const [message, setMessage] = useState("Hello!");

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center gap-4 bg-white dark:bg-zinc-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Student Profile
      </h1>

      <Student name="Juan Dela Cruz" course="BSIT" />

      <button
        onClick={() => setMessage("Welcome to Next.js!")}
        className="mt-4 px-4 py-2 rounded-lg bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-gray-200 dark:text-black text-white font-medium transition-colors"
      >
        Click Me
      </button>

      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 font-medium">
        {message}
      </p>
    </main>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import SearchInputs, { UserInterface } from "~/app/_components/search-inputs";

export default function Home() {
  const [result, setResult] = useState<UserInterface[]>([]);

  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-5">
        <SearchInputs setResult={setResult} />
        <div className="flex flex-col gap-1 overflow-y-scroll max-h-72">
          {result &&
            result.map((chip) => (
              <div
                className="flex items-center justify-between w-full gap-3 px-3 py-5 bg-white rounded-md hover:bg-gray-100"
                key={chip.id}
              >
                <div className="flex items-center gap-5">
                  <Image
                    src="https://loremflickr.com/640/480/people"
                    alt={chip.name}
                    width={30}
                    height={45}
                    className="rounded-full"
                  />
                  <p>{chip.name}</p>
                </div>
                <p className="text-gray-300">{chip.email}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

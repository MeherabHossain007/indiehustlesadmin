import Image from "next/image";
import React from "react";

type CardProps = {
  title?: string;
  count: number;
};

export default function Card({ title, count }: CardProps) {
  return (
    <div className="flex w-full h-auto bg-white rounded-xl justify-between items-center px-6 dark:bg-zinc-950">
      <div className="flex flex-col space-y-1  justify-between h-full py-5">
        <div>
          <div className="font-bold text-lg text-black dark:text-white">
            {title}
          </div>
          <div className="text-3xl font-light text-black dark:text-white">
            {count}
          </div>
        </div>
      </div>
    </div>
  );
}

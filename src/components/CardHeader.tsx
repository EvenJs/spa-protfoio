import React from "react";

import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string;
}

const CardHeader = ({ title, description, className }: CardHeaderProps) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2 py-0.5 ">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>

      <p className="text-sm lg:text-base text-white/60 mt-2 max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;

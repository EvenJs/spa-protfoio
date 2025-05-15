import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  spin = true,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(spin && "animate-spin")}
        style={{
          animationDuration: spinDuration,
        }}
      >
        <div
          className=" flex items-start justify-start"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className=" inline-flex"
            style={{ transform: `rotate(${rotation * -1}deg)` }}
          >
            {children}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default HeroOrbit;

import { cn } from "@/utils/cn";

export const Meteors = ({
  number,
  className,
  meteorPositions,
}: {
  number?: number;
  className?: string;
  meteorPositions?: { left: string; delay: string; duration: string }[]; // Define type for meteorPositions
}) => {
  const meteors = new Array(number || 20).fill(true);

  const generateRandomPosition = () => {
    return Math.floor(Math.random() * (400 - -400) + -400) + "px";
  };

  const generateRandomDelay = () => {
    return Math.random() * (0.8 - 0.2) + 0.2 + "s";
  };

  const generateRandomDuration = () => {
    return Math.floor(Math.random() * (10 - 2) + 2) + "s";
  };

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: generateRandomPosition(),
            animationDelay: generateRandomDelay(),
            animationDuration: generateRandomDuration(),
          }}
        ></span>
      ))}
    </>
  );
};

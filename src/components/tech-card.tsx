"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { filePaths } from "@/data";

export function ThreeDCardDemo() {
  return (
    <>
      <div className="flex flex-wrap">
        {filePaths.map((path, index) => (
          <CardContainer className="inter-var" key={index}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-90 rounded-xl p-6 border m-10 " >
              <CardItem translateZ="100" className="w-full mt-4" >
                <Image
                  src={path}
                  height="150"
                  width="150"
                  className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`thumbnail-${index}`}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}

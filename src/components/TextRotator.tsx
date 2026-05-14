import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-4 rounded-md flex justify-center items-center overflow-hidden">
      
      <div className="flex items-center justify-center gap-2 whitespace-nowrap">
        
        <span className="font-poppins text-base sm:text-2xl text-gray-700">
          I am a {portfolioConfig.title} &
        </span>

        <div className="relative h-[40px] overflow-hidden">
          <ul className="animate-text-slide font-rubik text-lg sm:text-3xl leading-[40px]">
            {portfolioConfig.skills.roles.map((role, index) => (
              <li
                key={index}
                className="h-[40px] text-[#2f7df4]"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default TextRotator;
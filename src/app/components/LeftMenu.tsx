"use client";
import React from "react";
import Button from "./MenuButton";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { deploySafe } from "../utils/safe/protocol-kit/deploy-safe";
 


const LeftMenu = () => {
  const handleNavigation = (path: string, router: AppRouterInstance) => {
    router.push(path);
  };

  const router = useRouter();
  const pathName = usePathname;

  const safeConfig = {
    
  }

  return (
    <div className="rounded-2xl md:w-64 w-fit bg-white p-2 flex flex-col gap-1">
      <Button
        icon="🖊️"
        text="Subscriptions"
        onClick={() => handleNavigation("/", router)}
        isFocused={pathName() === "/" ? true : false}
      />
      <Button
        icon="📃"
        text="Billings"
        onClick={() => handleNavigation("/billings", router)}
        isFocused={pathName() === "/billings" ? true : false}
      />
      <Button
        icon="👔"
        text="Services"
        onClick={() => handleNavigation("/services", router)}
        isFocused={pathName() === "/services" ? true : false}
      />
      <Button
        icon="👔"
        text="Services"
        onClick={async () => deploySafe(safeConfig)}
      />
    </div>
  );
};

export default LeftMenu;

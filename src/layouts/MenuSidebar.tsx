import { useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import logo from "../assets/iBankLogo.svg";
import loanApplicantMenu from "../assets/loanApplicant.svg";
import masterDataMenu from "../assets/masterData.svg";
import loanMenu from "../assets/loan.svg";

const items = [
  { title: "ผู้ขอสินเชื่อ", url: "/loanApplicant", icon: loanApplicantMenu },
  { title: "Master Data", url: "/masterData", icon: masterDataMenu },
  { title: "สินเชื่อ", url: "/loan", icon: loanMenu },
];

export function MenuSidebar() {
  const [activeItem, setActiveItem] = useState("/loanApplicant");

  return (
    <Sidebar collapsible="none" className="overflow-x-hidden">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="mt-4">
            <img src={logo} />
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    
                    <Link
                      to={item.url} 
                      onClick={() => setActiveItem(item.url)} 
                      className={`flex items-center gap-2 rounded-md px-3 py-5 cursor-pointer transition-colors ${
                        activeItem === item.url
                          ? "bg-[#17471A] text-white"
                          : "hover:bg-transparent"
                      }`}
                    >
                      <img src={item.icon} alt={item.title} className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom"; 
import { useTranslation } from "react-i18next";

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


export function MenuSidebar() {
  const [activeItem, setActiveItem] = useState("/loanApplicant");
  const { t } = useTranslation();

  const items = [
  { key: "menuBar.loanAppliant", url: "/loanApplicant", icon: loanApplicantMenu },
  { key: "menuBar.masterData", url: "/masterData", icon: masterDataMenu },
  { key: "menuBar.loanMenu", url: "/loan", icon: loanMenu },
];


  return (
    <Sidebar collapsible="none" className="overflow-x-hidden">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="mt-4">
            <img src={logo} alt="iBank Logo" />
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.key}>
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
                      <img src={item.icon} alt={t(item.key)} className="w-5 h-5" />
                      <span>{t(item.key)}</span>
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

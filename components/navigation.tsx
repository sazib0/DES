"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Boxes,
  Settings,
  Activity,
  BarChart3,
  Link2,
  Paintbrush,
  Users2,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/user-profile";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Modules",
    icon: Boxes,
    href: "/modules",
    submenu: [
      { title: "Available Modules", href: "/modules/available" },
      { title: "Add/Remove Modules", href: "/modules/manage" },
      { title: "Module Configuration", href: "/modules/configure" },
    ],
  },
  {
    title: "Operations",
    icon: Activity,
    href: "/operations",
    submenu: [
      { title: "Workflow Automation", href: "/operations/workflow" },
      { title: "Process Optimization", href: "/operations/process" },
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    submenu: [
      { title: "Real-Time Analytics", href: "/analytics/real-time" },
      { title: "Reports & Insights", href: "/analytics/reports" },
      { title: "Custom Dashboards", href: "/analytics/dashboards" },
    ],
  },
  {
    title: "Integrations",
    icon: Link2,
    href: "/integrations",
    submenu: [
      { title: "Third-Party Integrations", href: "/integrations/third-party" },
      { title: "API Management", href: "/integrations/api" },
    ],
  },
  {
    title: "Customization",
    icon: Paintbrush,
    href: "/customization",
    submenu: [
      { title: "User Settings", href: "/customization/user" },
      { title: "Workflow Customization", href: "/customization/workflow" },
      { title: "System Preferences", href: "/customization/system" },
    ],
  },
  {
    title: "Collaboration",
    icon: Users2,
    href: "/collaboration",
    submenu: [
      { title: "Team Management", href: "/collaboration/teams" },
      { title: "Communication Hub", href: "/collaboration/communication" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    submenu: [
      { title: "User Roles & Permissions", href: "/settings/roles" },
      { title: "System Configuration", href: "/settings/system" },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    href: "/support",
    submenu: [
      { title: "Help Center", href: "/support/help" },
      { title: "Tutorials", href: "/support/tutorials" },
      { title: "Contact Support", href: "/support/contact" },
    ],
  },
];

export default function Navigation() {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex flex-col h-screen border-r bg-background px-2 pb-4 transition-all duration-300",
        expanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex h-16 items-center justify-between px-2">
        {expanded && (
          <Link href="/" className="flex items-center space-x-2">
            <LayoutDashboard className="h-6 w-6" />
            <span className="font-bold">DES</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="ml-auto"
        >
          {expanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <div key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent",
                pathname === item.href && "bg-accent",
                !expanded && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5" />
              {expanded && <span>{item.title}</span>}
            </Link>
            {expanded &&
              item.submenu?.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={cn(
                    "ml-8 flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent",
                    pathname === subItem.href && "bg-accent"
                  )}
                >
                  <span>{subItem.title}</span>
                </Link>
              ))}
          </div>
        ))}
      </nav>
      <UserProfile expanded={expanded} />
    </div>
  );
}
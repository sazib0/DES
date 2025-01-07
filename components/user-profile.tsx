"use client";

import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserProfile({ expanded }: { expanded: boolean }) {
  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  return (
    <div className="mt-auto p-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-full justify-start">
            <User className="h-5 w-5" />
            {expanded && <span className="ml-2">John Doe</span>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" alignOffset={11}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
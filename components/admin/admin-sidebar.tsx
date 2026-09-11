"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Building2,
  Users,
  UserCog,
  Landmark,
  Waves,
  Wrench,
  BookOpen,
  DollarSign,
  MessageSquareQuote,
  Settings,
} from "lucide-react";

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

const navigation = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
];

const siteInformation = [
  {
    label: "Meeting",
    href: "/admin/meeting",
    icon: CalendarDays,
  },
  {
    label: "HOA Information",
    href: "/admin/hoa",
    icon: Building2,
  },
];

const people = [
  {
    label: "Board Members",
    href: "/admin/board",
    icon: Users,
  },
  {
    label: "Officers",
    href: "/admin/officers",
    icon: UserCog,
  },
  {
    label: "Pool Liaison",
    href: "/admin/pool-liaison",
    icon: Waves,
  },
];

const property = [
  {
    label: "Amenities",
    href: "/admin/amenities",
    icon: Waves,
  },
  {
    label: "Responsibilities",
    href: "/admin/responsibilities",
    icon: Wrench,
  },
  {
    label: "Committees",
    href: "/admin/committees",
    icon: Landmark,
  },
];

const resources = [
  {
    label: "Resources",
    href: "/admin/resources",
    icon: BookOpen,
  },
  {
    label: "Fees",
    href: "/admin/fees",
    icon: DollarSign,
  },
  {
    label: "Testimonials",
    href: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
];

function NavSection({
  label,
  items,
}: {
  label: string;
  items: typeof siteInformation;
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const Icon = item.icon;

            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={active}>
                  <Link href={item.href}>
                    <Icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export default function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Deerfield HOA</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>
                        <Icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <NavSection label="Site Information" items={siteInformation} />

        <NavSection label="People" items={people} />

        <NavSection label="Property" items={property} />

        <NavSection label="Resources" items={resources} />
      </SidebarContent>
    </Sidebar>
  );
}

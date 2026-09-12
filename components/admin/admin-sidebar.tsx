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

// ---------------------------------------------------------
// Navigation item type
// ---------------------------------------------------------

type NavigationItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

// ---------------------------------------------------------
// Navigation
// ---------------------------------------------------------

const navigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
];

const siteInformation: NavigationItem[] = [
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

const people: NavigationItem[] = [
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

const property: NavigationItem[] = [
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

const resources: NavigationItem[] = [
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

// ---------------------------------------------------------
// Navigation Section
// ---------------------------------------------------------

function NavSection({
  label,
  items,
}: {
  label: string;
  items: NavigationItem[];
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
                <SidebarMenuButton
                  render={<Link href={item.href} />}
                  isActive={active}
                >
                  <Icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

// ---------------------------------------------------------
// Admin Sidebar
// ---------------------------------------------------------

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Deerfield HOA</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const Icon = item.icon;

                const active =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      render={<Link href={item.href} />}
                      isActive={active}
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Site Information */}
        <NavSection label="Site Information" items={siteInformation} />

        {/* People */}
        <NavSection label="People" items={people} />

        {/* Property */}
        <NavSection label="Property" items={property} />

        {/* Resources */}
        <NavSection label="Resources" items={resources} />
      </SidebarContent>
    </Sidebar>
  );
}

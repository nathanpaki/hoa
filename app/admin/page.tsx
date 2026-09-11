import Link from "next/link";

import {
  CalendarDays,
  Building2,
  Users,
  UserCog,
  Waves,
  Landmark,
  BookOpen,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import AdminPageHeader from "@/components/admin/admin-page-header";

const sections = [
  {
    title: "Meeting Information",
    description: "Manage board meeting details.",
    href: "/admin/meeting",
    icon: CalendarDays,
  },
  {
    title: "HOA Information",
    description: "Manage HOA contact information.",
    href: "/admin/hoa",
    icon: Building2,
  },
  {
    title: "Board Members",
    description: "Manage the HOA board.",
    href: "/admin/board",
    icon: Users,
  },
  {
    title: "Officers",
    description: "Manage HOA officers.",
    href: "/admin/officers",
    icon: UserCog,
  },
  {
    title: "Amenities",
    description: "Manage community amenities.",
    href: "/admin/amenities",
    icon: Waves,
  },
  {
    title: "Committees",
    description: "Manage HOA committees.",
    href: "/admin/committees",
    icon: Landmark,
  },
  {
    title: "Resources",
    description: "Manage community resources.",
    href: "/admin/resources",
    icon: BookOpen,
  },
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <AdminPageHeader
        title="Dashboard"
        description="Manage the content displayed on the Deerfield HOA website."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <Link key={section.href} href={section.href} className="group">
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-lg border bg-muted/30 p-3">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-semibold group-hover:underline">
                      {section.title}
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

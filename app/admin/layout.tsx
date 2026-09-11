import AdminSidebar from "@/components/admin/admin-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Separator } from "@/components/ui/separator";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />

      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />

          <Separator orientation="vertical" className="mr-2 h-4" />

          <div className="text-sm font-medium">
            Deerfield HOA Administration
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

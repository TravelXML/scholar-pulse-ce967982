
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">
          <div className="container py-6 animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

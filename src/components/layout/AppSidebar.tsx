
import {
  BookOpen,
  Calendar,
  Home,
  LayoutDashboard,
  MessageSquare,
  User,
  GraduationCap,
  Building,
  ShoppingBag,
  Award,
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
import { useNavigate } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Academic", icon: BookOpen, path: "/academic" },
  { title: "School Portal", icon: GraduationCap, path: "/school-upload" },
  { title: "Government Activities", icon: Award, path: "/government-activities" },
  { title: "Product Upload", icon: ShoppingBag, path: "/product-upload" },
  { title: "Messages", icon: MessageSquare, path: "/messages" },
  { title: "Calendar", icon: Calendar, path: "/calendar" },
  { title: "Profile", icon: User, path: "/profile" },
];

export default function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => navigate(item.path)}
                    style={{ color: "#0B6623" }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
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

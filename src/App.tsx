
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Messages from "./pages/Messages";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Academic from "./pages/Academic";
import NotFound from "./pages/NotFound";
import SchoolClassUpload from "./pages/SchoolClassUpload";
import GovernmentActivities from "./pages/GovernmentActivities";
import ProductUpload from "./pages/ProductUpload";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/school-upload" element={<SchoolClassUpload />} />
            <Route path="/government-activities" element={<GovernmentActivities />} />
            <Route path="/product-upload" element={<ProductUpload />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

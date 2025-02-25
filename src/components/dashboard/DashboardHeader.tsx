
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardHeader() {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-primary">Welcome to Scholar Plus</h1>
        <p className="text-muted-foreground">Your complete educational companion</p>
      </div>
      <Button onClick={() => navigate("/admin")}>
        Admin Panel
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}

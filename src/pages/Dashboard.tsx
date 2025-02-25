
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatisticsCards from "@/components/dashboard/StatisticsCards";
import SchoolCard from "@/components/dashboard/SchoolCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import SupplyCard from "@/components/dashboard/SupplyCard";
import SearchAndFilter from "@/components/dashboard/SearchAndFilter";
import { schools, activities, schoolItems, type SchoolItem } from "@/data/dashboardData";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = Array.from(new Set(schoolItems.map(item => item.category)));

  const filterItems = (items: SchoolItem[]) => {
    return items.filter(item => {
      const matchesSearch = searchQuery.toLowerCase() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      
      return matchesSearch && matchesFilter;
    });
  };

  return (
    <div className="space-y-6">
      <DashboardHeader />
      <StatisticsCards />

      <Tabs defaultValue="schools" className="space-y-4">
        <TabsList>
          <TabsTrigger value="schools">Schools</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="supplies">School Supplies</TabsTrigger>
        </TabsList>

        <TabsContent value="schools" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {schools.map((school) => (
              <SchoolCard key={school.id} {...school} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} {...activity} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="supplies" className="space-y-4">
          <SearchAndFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            categories={categories}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filterItems(schoolItems).map((item) => (
              <SupplyCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

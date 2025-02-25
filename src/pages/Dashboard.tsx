
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatisticsCards from "@/components/dashboard/StatisticsCards";
import SchoolCard from "@/components/dashboard/SchoolCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import SupplyCard from "@/components/dashboard/SupplyCard";
import SearchAndFilter from "@/components/dashboard/SearchAndFilter";
import { schools, activities, schoolItems, type SchoolItem } from "@/data/dashboardData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { School, Activity, ShoppingCart, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ITEMS_PER_PAGE = 8;

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [standardFilter, setStandardFilter] = useState("all");

  const categories = Array.from(new Set(schoolItems.map(item => item.category)));
  const standards = ["Playschool", "Nursery", "Daycare", "1-5", "6-8", "9-10", "11-12"];

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

  const filteredItems = filterItems(schoolItems);
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  
  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enhanced schools with additional info
  const enhancedSchools = schools.map(school => ({
    ...school,
    board: ["CBSE", "ICSE", "State Board", "IB"][Math.floor(Math.random() * 4)],
    standards: standards.slice(0, Math.floor(Math.random() * 7) + 1),
    hasPlayschool: Math.random() > 0.5,
    hasNursery: Math.random() > 0.3,
    hasDaycare: Math.random() > 0.7
  }));

  const filteredSchools = enhancedSchools.filter(school => {
    if (standardFilter === "all") return true;
    if (standardFilter === "Playschool" && school.hasPlayschool) return true;
    if (standardFilter === "Nursery" && school.hasNursery) return true;
    if (standardFilter === "Daycare" && school.hasDaycare) return true;
    return school.standards.includes(standardFilter);
  });

  return (
    <div className="space-y-6">
      <DashboardHeader />
      <StatisticsCards />

      <Tabs defaultValue="schools" className="space-y-4">
        <TabsList>
          <TabsTrigger value="schools" className="flex items-center">
            <School className="mr-2 h-4 w-4" style={{ color: "#0B6623" }} />
            Schools
          </TabsTrigger>
          <TabsTrigger value="activities" className="flex items-center">
            <Activity className="mr-2 h-4 w-4" style={{ color: "#0B6623" }} />
            Activities
          </TabsTrigger>
          <TabsTrigger value="supplies" className="flex items-center">
            <ShoppingCart className="mr-2 h-4 w-4" style={{ color: "#0B6623" }} />
            School Supplies
          </TabsTrigger>
        </TabsList>

        <TabsContent value="schools" className="space-y-4">
          <div className="flex gap-4 items-center mb-4">
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2" style={{ color: "#0B6623" }} />
              <select
                className="border rounded p-2"
                value={standardFilter}
                onChange={(e) => setStandardFilter(e.target.value)}
              >
                <option value="all">All Standards</option>
                <option value="Playschool">Playschool</option>
                <option value="Nursery">Nursery</option>
                <option value="Daycare">Daycare</option>
                <option value="1-5">Classes 1-5</option>
                <option value="6-8">Classes 6-8</option>
                <option value="9-10">Classes 9-10</option>
                <option value="11-12">Classes 11-12</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredSchools.map((school) => (
              <div key={school.id} className="flex flex-col h-full">
                <SchoolCard {...school} />
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge className="bg-[#0B6623]">{school.board}</Badge>
                  {school.hasPlayschool && <Badge variant="outline">Playschool</Badge>}
                  {school.hasNursery && <Badge variant="outline">Nursery</Badge>}
                  {school.hasDaycare && <Badge variant="outline">Daycare</Badge>}
                  <Badge variant="secondary">Classes: {school.standards.join(', ')}</Badge>
                </div>
                <div className="mt-auto pt-2">
                  <Button variant="outline" className="w-full">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex flex-col h-full">
                <ActivityCard {...activity} />
                <div className="mt-auto pt-2">
                  <Button variant="outline" className="w-full">Book Now</Button>
                </div>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {getCurrentPageItems().map((item) => (
              <div key={item.id} className="flex flex-col h-full">
                <SupplyCard {...item} />
                <div className="mt-auto pt-2">
                  <Button className="w-full" style={{ backgroundColor: "#0B6623" }}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        onClick={() => handlePageChange(index + 1)}
                        isActive={currentPage === index + 1}
                        className="cursor-pointer"
                      >
                        {index + 1}
                      
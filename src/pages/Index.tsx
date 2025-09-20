import { useState } from "react";
import { CourseSearch } from "@/components/CourseSearch";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { SearchFilters, Course } from "@/types/course";
import { BookOpen, GraduationCap } from "lucide-react";

const Index = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    topic: '',
    level: 'all'
  });
  const [searchResults, setSearchResults] = useState<Course[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const filteredCourses = courses.filter(course => {
      const topicMatch = course.topic.toLowerCase().includes(filters.topic.toLowerCase()) ||
                        course.title.toLowerCase().includes(filters.topic.toLowerCase()) ||
                        course.skills.some(skill => skill.toLowerCase().includes(filters.topic.toLowerCase()));
      
      const levelMatch = filters.level === 'all' || course.level === filters.level;
      
      return topicMatch && levelMatch;
    });
    
    setSearchResults(filteredCourses);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <GraduationCap className="w-8 h-8" />
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Course Recommendation System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect courses for your learning journey. Enter your topic and skill level to get personalized recommendations.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <CourseSearch 
            filters={filters}
            onFiltersChange={setFilters}
            onSearch={handleSearch}
          />
        </div>
      </div>

      {/* Results Section */}
      {hasSearched && (
        <div className="pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {searchResults.length > 0 
                  ? `Found ${searchResults.length} course${searchResults.length === 1 ? '' : 's'} for "${filters.topic}"`
                  : `No courses found for "${filters.topic}"`
                }
              </h2>
              {searchResults.length === 0 && (
                <p className="text-muted-foreground">
                  Try searching for: React, Python, JavaScript, Machine Learning, or Data Science
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

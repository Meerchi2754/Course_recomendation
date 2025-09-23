import { useState } from "react";
import { CourseSearch } from "@/components/CourseSearch";
import { CourseCard } from "@/components/CourseCard";
import { SkillTest } from "@/components/SkillTest";
import { courses } from "@/data/courses";
import { BookOpen, GraduationCap, Brain, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [filters, setFilters] = useState({
    topic: '',
    level: 'all'
  });
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [testResult, setTestResult] = useState(null);

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

  const handleTestComplete = (result) => {
    setTestResult(result);
    const newFilters = {
      topic: result.recommendedTopics[0] || '',
      level: result.recommendedLevel
    };
    setFilters(newFilters);
    
    // Automatically search for courses with the recommended filters
    const filteredCourses = courses.filter(course => {
      const topicMatch = course.topic.toLowerCase().includes(newFilters.topic.toLowerCase()) ||
                        course.title.toLowerCase().includes(newFilters.topic.toLowerCase()) ||
                        course.skills.some(skill => skill.toLowerCase().includes(newFilters.topic.toLowerCase()));
      
      const levelMatch = course.level === newFilters.level;
      
      return topicMatch && levelMatch;
    });
    
    setSearchResults(filteredCourses);
    setHasSearched(true);
  };

  const handleTestClose = () => {
    setShowTest(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-hero py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex items-center justify-center gap-3 text-primary-foreground mb-6 scale-in">
            <GraduationCap className="w-10 h-10 animate-pulse" />
            <BookOpen className="w-10 h-10 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground slide-up">
            Course Recommendation System
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed fade-in">
            Discover the perfect courses for your learning journey. Enter your topic and skill level to get personalized recommendations.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent-light/20 rounded-full blur-3xl"></div>
      </div>

      {/* Test Modal */}
      {showTest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <SkillTest 
            onTestComplete={handleTestComplete}
            onClose={handleTestClose}
            topic={filters.topic}
          />
        </div>
      )}

      {/* Search Section */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {testResult && (
            <div className="mb-8 p-6 gradient-card rounded-xl border border-primary/20 shadow-colored fade-in">
              <div className="flex items-center gap-3 text-gradient-primary mb-3">
                <Award className="w-6 h-6" />
                <span className="font-bold text-lg">Test Results Applied</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Based on your test score ({testResult.score}/{testResult.totalQuestions}), we've set your level to <strong className="text-gradient-primary">{testResult.recommendedLevel}</strong> and suggested <strong className="text-gradient-accent">{testResult.recommendedTopics[0]}</strong> as your topic.
              </p>
            </div>
          )}
          <CourseSearch 
            filters={filters}
            onFiltersChange={setFilters}
            onSearch={handleSearch}
          />
          
          {/* Take a Test Section - Show after topic is entered */}
          {filters.topic && (
            <div className="mt-8 p-8 glass rounded-2xl border shadow-elegant scale-in">
              <div className="flex items-center justify-center gap-3 text-gradient-accent mb-4">
                <Brain className="w-8 h-8 animate-pulse" />
                <Award className="w-8 h-8 animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gradient-primary text-center">
                Test your knowledge in {filters.topic}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-2xl mx-auto">
                Take a quick assessment test to evaluate your current skill level in {filters.topic} and get better course recommendations.
              </p>
              <div className="text-center">
                <Button 
                  onClick={() => setShowTest(true)}
                  size="lg"
                  className="font-bold btn-hover-lift shadow-colored px-8 py-3"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Take {filters.topic} Test
                </Button>
              </div>
            </div>
          )}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((course, index) => (
                <div key={course.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
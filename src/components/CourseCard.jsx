import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, ExternalLink } from "lucide-react";

export function CourseCard({ course }) {
  const getLevelVariant = (level) => {
    switch (level) {
      case 'beginner':
        return 'success';
      case 'intermediate':
        return 'warning';
      case 'expert':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner':
        return 'text-success';
      case 'intermediate':
        return 'text-warning';
      case 'expert':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card className="h-full card-hover shadow-elegant glass group cursor-pointer fade-in">
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg leading-tight group-hover:text-gradient-primary transition-all duration-300">
            {course.title}
          </CardTitle>
          <Badge variant={getLevelVariant(course.level)} className="shadow-md">
            {course.level}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="font-medium gradient-primary bg-clip-text text-transparent">{course.provider}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span className="font-semibold">{course.rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {course.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {course.skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs hover:bg-primary/10 transition-colors duration-200">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="font-bold text-gradient-primary text-lg">
            {course.price}
          </div>
        </div>
        
        <Button 
          asChild 
          className="w-full btn-hover-lift shadow-md group"
          variant="default"
        >
          <a href={course.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View Course
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { testQuestions } from "@/data/testQuestions";
import { BookOpen, Award, TrendingUp } from "lucide-react";

export const SkillTest = ({ onTestComplete, onClose, topic }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Filter and randomly select 5 questions based on topic
  const [selectedQuestions] = useState(() => {
    const topicKeywords = topic.toLowerCase().split(' ');
    const relevantQuestions = testQuestions.filter(question => 
      topicKeywords.some(keyword => 
        question.topic.toLowerCase().includes(keyword) ||
        question.question.toLowerCase().includes(keyword)
      )
    );
    
    // If we have relevant questions, use them; otherwise fall back to all questions
    const questionsToUse = relevantQuestions.length >= 3 ? relevantQuestions : testQuestions;
    const shuffled = [...questionsToUse].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  });

  const handleNextQuestion = () => {
    if (selectedAnswer === "") return;
    
    const answers = [...selectedAnswers];
    answers[currentQuestion] = parseInt(selectedAnswer);
    setSelectedAnswers(answers);
    setSelectedAnswer("");

    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(answers);
    }
  };

  const calculateResult = (answers) => {
    let score = 0;
    const topicCounts = {};
    
    selectedQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
      topicCounts[question.topic] = (topicCounts[question.topic] || 0) + 1;
    });

    const recommendedTopics = Object.keys(topicCounts).sort(
      (a, b) => topicCounts[b] - topicCounts[a]
    ).slice(0, 3);

    let recommendedLevel;
    if (score <= 2) recommendedLevel = 'beginner';
    else if (score <= 4) recommendedLevel = 'intermediate';
    else recommendedLevel = 'expert';

    const result = {
      score,
      totalQuestions: selectedQuestions.length,
      recommendedLevel,
      recommendedTopics
    };

    setShowResult(true);
    onTestComplete(result);
  };

  const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;

  if (showResult) {
  return (
    <Card className="w-full max-w-2xl mx-auto glass shadow-colored scale-in">
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-3 text-3xl text-gradient-primary">
          <Award className="w-8 h-8" />
          Test Complete!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 text-center">
        <div className="relative">
          <div className="text-8xl font-bold text-gradient-primary animate-pulse">
            {selectedAnswers.filter((answer, index) => answer === selectedQuestions[index].correctAnswer).length}/{selectedQuestions.length}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"></div>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Based on your results, we recommend starting with <strong className="text-gradient-accent">{selectedAnswers.filter((answer, index) => answer === selectedQuestions[index].correctAnswer).length <= 2 ? 'beginner' : selectedAnswers.filter((answer, index) => answer === selectedQuestions[index].correctAnswer).length <= 4 ? 'intermediate' : 'expert'}</strong> level courses.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={onClose} variant="outline" className="btn-hover-lift">
            Back to Search
          </Button>
          <Button onClick={() => {
            onClose();
            // You can add logic here to auto-fill the search with recommended topics
          }} className="btn-hover-lift shadow-colored">
            Find Courses
          </Button>
        </div>
      </CardContent>
    </Card>
  );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto glass shadow-elegant fade-in">
      <CardHeader className="border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="flex items-center gap-3 text-gradient-primary">
            <BookOpen className="w-6 h-6" />
            Skill Assessment Test
          </CardTitle>
          <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
            Question {currentQuestion + 1} of {selectedQuestions.length}
          </span>
        </div>
        <Progress value={progress} className="w-full h-2 shadow-sm" />
      </CardHeader>
      <CardContent className="space-y-8 pt-6">
        <div>
          <h3 className="text-xl font-bold mb-6 text-gradient-accent leading-relaxed">
            {selectedQuestions[currentQuestion].question}
          </h3>
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="space-y-4">
            {selectedQuestions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 border border-transparent hover:border-primary/20">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} className="shadow-sm" />
                <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1 text-sm font-medium">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div className="flex gap-4 justify-end pt-4 border-t border-border/50">
          <Button variant="outline" onClick={onClose} className="btn-hover-lift">
            Cancel
          </Button>
          <Button 
            onClick={handleNextQuestion}
            disabled={selectedAnswer === ""}
            className="btn-hover-lift shadow-colored"
          >
            {currentQuestion === selectedQuestions.length - 1 ? "Finish Test" : "Next Question"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
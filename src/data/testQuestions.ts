import { TestQuestion } from "@/types/test";

export const testQuestions: TestQuestion[] = [
  {
    id: "1",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language", 
      "Hyperlinks and Text Markup Language",
      "Hyper Text Making Language"
    ],
    correctAnswer: 0,
    topic: "web development",
    level: "beginner"
  },
  {
    id: "2", 
    question: "Which of these is a JavaScript framework?",
    options: ["React", "HTML", "CSS", "Python"],
    correctAnswer: 0,
    topic: "javascript",
    level: "intermediate"
  },
  {
    id: "3",
    question: "What is machine learning?",
    options: [
      "A type of computer hardware",
      "A subset of AI that learns from data",
      "A programming language",
      "A database system"
    ],
    correctAnswer: 1,
    topic: "machine learning",
    level: "beginner"
  },
  {
    id: "4",
    question: "In Python, what does 'def' keyword do?",
    options: [
      "Defines a variable",
      "Defines a function", 
      "Defines a class",
      "Defines a loop"
    ],
    correctAnswer: 1,
    topic: "python",
    level: "beginner"
  },
  {
    id: "5",
    question: "What is a neural network?",
    options: [
      "A computer network",
      "A computing system inspired by biological neural networks",
      "A type of database",
      "A programming paradigm"
    ],
    correctAnswer: 1,
    topic: "machine learning",
    level: "intermediate"
  },
  {
    id: "6",
    question: "What is React's virtual DOM?",
    options: [
      "A real DOM element",
      "A lightweight copy of the real DOM in memory",
      "A CSS framework",
      "A database"
    ],
    correctAnswer: 1,
    topic: "react",
    level: "intermediate"
  },
  {
    id: "7",
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets", 
      "Colorful Style Sheets"
    ],
    correctAnswer: 1,
    topic: "web development",
    level: "beginner"
  },
  {
    id: "8",
    question: "What is data science?",
    options: [
      "A type of computer science",
      "Extracting insights from data using statistics and programming",
      "A database management system",
      "A web development framework"
    ],
    correctAnswer: 1,
    topic: "data science",
    level: "beginner"
  }
];
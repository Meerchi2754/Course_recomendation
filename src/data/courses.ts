import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete React Developer Course',
    provider: 'CodeAcademy',
    topic: 'react',
    level: 'beginner',
    rating: 4.8,
    duration: '40 hours',
    price: '$89',
    url: 'https://codecademy.com',
    description: 'Learn React from scratch with hands-on projects and real-world applications.',
    skills: ['JSX', 'Components', 'State Management', 'Hooks']
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    provider: 'Frontend Masters',
    topic: 'react',
    level: 'expert',
    rating: 4.9,
    duration: '25 hours',
    price: '$199',
    url: 'https://frontendmasters.com',
    description: 'Master advanced React patterns, performance optimization, and complex state management.',
    skills: ['Render Props', 'Higher-Order Components', 'Context API', 'Performance']
  },
  {
    id: '3',
    title: 'Python for Beginners',
    provider: 'edX',
    topic: 'python',
    level: 'beginner',
    rating: 4.6,
    duration: '30 hours',
    price: 'Free',
    url: 'https://edx.org',
    description: 'Introduction to Python programming with practical exercises and projects.',
    skills: ['Variables', 'Functions', 'Loops', 'Data Structures']
  },
  {
    id: '4',
    title: 'Machine Learning with Python',
    provider: 'Coursera',
    topic: 'machine learning',
    level: 'intermediate',
    rating: 4.7,
    duration: '60 hours',
    price: '$79/month',
    url: 'https://coursera.org',
    description: 'Comprehensive course on ML algorithms and their implementation in Python.',
    skills: ['Scikit-learn', 'NumPy', 'Pandas', 'Neural Networks']
  },
  {
    id: '5',
    title: 'JavaScript Fundamentals',
    provider: 'MDN',
    topic: 'javascript',
    level: 'beginner',
    rating: 4.5,
    duration: '20 hours',
    price: 'Free',
    url: 'https://developer.mozilla.org',
    description: 'Learn the basics of JavaScript programming language.',
    skills: ['Variables', 'Functions', 'DOM Manipulation', 'ES6+']
  },
  {
    id: '6',
    title: 'Advanced JavaScript Concepts',
    provider: 'Udemy',
    topic: 'javascript',
    level: 'expert',
    rating: 4.8,
    duration: '35 hours',
    price: '$149',
    url: 'https://udemy.com',
    description: 'Deep dive into advanced JavaScript concepts like closures, prototypes, and async programming.',
    skills: ['Closures', 'Prototypes', 'Async/Await', 'Event Loop']
  },
  {
    id: '7',
    title: 'Data Science Fundamentals',
    provider: 'DataCamp',
    topic: 'data science',
    level: 'beginner',
    rating: 4.6,
    duration: '45 hours',
    price: '$29/month',
    url: 'https://datacamp.com',
    description: 'Introduction to data science concepts, tools, and methodologies.',
    skills: ['Statistics', 'Data Visualization', 'R/Python', 'SQL']
  },
  {
    id: '8',
    title: 'Deep Learning Specialization',
    provider: 'Coursera',
    topic: 'machine learning',
    level: 'expert',
    rating: 4.9,
    duration: '80 hours',
    price: '$99/month',
    url: 'https://coursera.org',
    description: 'Master deep learning and neural networks with practical implementations.',
    skills: ['TensorFlow', 'Keras', 'CNN', 'RNN', 'GANs']
  }
];
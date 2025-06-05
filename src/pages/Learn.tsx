
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Play, 
  Award, 
  Target,
  Clock,
  Users,
  Star,
  ChevronRight,
  Search,
  Filter,
  Trophy,
  Calendar
} from 'lucide-react';

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState('beginner');

  const courses = [
    {
      id: 1,
      title: "ISL Basics - Getting Started",
      description: "Learn fundamental ISL signs and gestures",
      level: "Beginner",
      duration: "2 hours",
      lessons: 12,
      progress: 75,
      enrolled: 1250,
      rating: 4.8,
      category: "beginner"
    },
    {
      id: 2,
      title: "Daily Conversations in ISL",
      description: "Common phrases and everyday communication",
      level: "Intermediate",
      duration: "4 hours",
      lessons: 24,
      progress: 40,
      enrolled: 890,
      rating: 4.9,
      category: "intermediate"
    },
    {
      id: 3,
      title: "Professional ISL Vocabulary",
      description: "Workplace and professional terminology",
      level: "Advanced",
      duration: "6 hours",
      lessons: 36,
      progress: 0,
      enrolled: 456,
      rating: 4.7,
      category: "advanced"
    },
    {
      id: 4,
      title: "Emergency & Medical Signs",
      description: "Essential signs for healthcare and emergencies",
      level: "Intermediate",
      duration: "3 hours",
      lessons: 18,
      progress: 100,
      enrolled: 678,
      rating: 4.9,
      category: "specialized"
    }
  ];

  const achievements = [
    { title: "First Steps", description: "Completed your first lesson", earned: true },
    { title: "Week Warrior", description: "7 consecutive days of learning", earned: true },
    { title: "Sign Master", description: "Learned 100 signs", earned: false },
    { title: "Community Helper", description: "Helped 5 fellow learners", earned: true },
  ];

  const practiceAreas = [
    { name: "Alphabet & Numbers", difficulty: "Beginner", time: "10 min" },
    { name: "Common Greetings", difficulty: "Beginner", time: "15 min" },
    { name: "Family & Relationships", difficulty: "Intermediate", time: "20 min" },
    { name: "Food & Dining", difficulty: "Intermediate", time: "25 min" },
    { name: "Travel & Directions", difficulty: "Advanced", time: "30 min" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Learn Indian Sign Language
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master ISL with interactive courses, practice sessions, and community support. 
            Learn at your own pace with personalized progress tracking.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="border-none shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-ishara-blue mb-1">156</div>
                <p className="text-gray-600 text-sm">Signs Learned</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ishara-teal mb-1">12</div>
                <p className="text-gray-600 text-sm">Courses Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ishara-orange mb-1">45h</div>
                <p className="text-gray-600 text-sm">Study Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">7</div>
                <p className="text-gray-600 text-sm">Day Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="dictionary">Dictionary</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            {/* Course Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filter by level:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  className="cursor-pointer"
                >
                  All
                </Badge>
                <Badge 
                  variant={selectedCategory === 'beginner' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('beginner')}
                  className="cursor-pointer"
                >
                  Beginner
                </Badge>
                <Badge 
                  variant={selectedCategory === 'intermediate' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('intermediate')}
                  className="cursor-pointer"
                >
                  Intermediate
                </Badge>
                <Badge 
                  variant={selectedCategory === 'advanced' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('advanced')}
                  className="cursor-pointer"
                >
                  Advanced
                </Badge>
                <Badge 
                  variant={selectedCategory === 'specialized' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('specialized')}
                  className="cursor-pointer"
                >
                  Specialized
                </Badge>
              </div>
            </div>

            {/* Course Listing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses
                .filter(course => selectedCategory === 'all' || course.category === selectedCategory)
                .map(course => (
                <Card key={course.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge variant="outline" className={
                        course.level === "Beginner" ? "bg-green-100 text-green-800 hover:bg-green-100" : 
                        course.level === "Intermediate" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" :
                        "bg-purple-100 text-purple-800 hover:bg-purple-100"
                      }>
                        {course.level}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {course.lessons} lessons
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          {course.rating}
                        </div>
                      </div>

                      {course.progress > 0 && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}

                      <Button className={course.progress === 100 
                        ? "w-full bg-green-600 hover:bg-green-700 text-white" 
                        : "w-full bg-ishara-gradient hover:opacity-90 text-white"
                      }>
                        {course.progress === 0 
                          ? "Start Course" 
                          : course.progress === 100 
                            ? "Course Completed" 
                            : "Continue Learning"
                        }
                        {course.progress < 100 && <ChevronRight className="h-4 w-4 ml-1" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-ishara-blue" />
                    Daily Practice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-4 space-y-4">
                    <div className="w-20 h-20 bg-ishara-gradient rounded-full mx-auto flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Today's Challenge</h3>
                    <p className="text-gray-600">
                      15 minutes of focused practice on emergency signs
                    </p>
                    <Button className="bg-ishara-gradient hover:opacity-90 text-white">
                      <Play className="h-4 w-4 mr-2" />
                      Start Practice
                    </Button>
                    <p className="text-sm text-gray-500">
                      Complete daily challenges to maintain your streak!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-ishara-orange" />
                    Weekly Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-4 space-y-4">
                    <div className="w-20 h-20 bg-ishara-orange rounded-full mx-auto flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Master 30 New Signs</h3>
                    <p className="text-gray-600">
                      Learn professional workplace signs this week
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Progress</span>
                        <span>15/30 signs</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <Button className="bg-ishara-orange hover:bg-orange-600 text-white">
                      Continue Challenge
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Practice Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {practiceAreas.map((area, index) => (
                    <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{area.name}</h3>
                          <Badge variant="outline" className={
                            area.difficulty === "Beginner" ? "bg-green-100 text-green-800 hover:bg-green-100" :
                            area.difficulty === "Intermediate" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" :
                            "bg-purple-100 text-purple-800 hover:bg-purple-100"
                          }>{area.difficulty}</Badge>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 flex justify-between items-center">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {area.time}
                          </span>
                          <Button variant="ghost" size="sm" className="text-ishara-blue hover:text-ishara-teal hover:bg-blue-50">
                            Practice
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dictionary Tab */}
          <TabsContent value="dictionary" className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>ISL Dictionary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search for ISL signs..."
                    className="w-full pl-10 py-2 border rounded-lg"
                  />
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {["Hello", "Thank you", "Sorry", "Please", "Family", "Friend", "Water", "Food", "Help", "Work", "School", "Home", "Hospital", "Emergency", "Happy", "Sad", "Yes", "No", "Good", "Bad"].map((word, i) => (
                    <Card key={i} className="border cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-3 text-center">
                        <div className="text-3xl mb-1">🤟</div>
                        <p className="text-sm font-medium">{word}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="outline">Load More Signs</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {["Greetings", "Family & Relationships", "Food & Dining", "Healthcare", "Emergency", "Travel", "Education", "Workplace", "Technology", "Sports & Recreation", "Time & Calendar", "Numbers"].map((category, i) => (
                    <Button key={i} variant="outline" className="justify-start">
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-500" />
                  Your Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className={`border ${achievement.earned ? 'border-yellow-200 bg-yellow-50' : ''}`}>
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.earned 
                            ? 'bg-yellow-100 text-yellow-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className={`font-medium ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                            {achievement.title}
                          </h3>
                          <p className={`text-sm ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.earned && (
                          <div className="ml-auto">
                            <Badge className="bg-yellow-500">Earned</Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <Target className="h-10 w-10 text-ishara-blue mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">16/50</h3>
                  <p className="text-gray-600">Achievements Earned</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <Trophy className="h-10 w-10 text-ishara-orange mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">Intermediate</h3>
                  <p className="text-gray-600">Current Level</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-ishara-teal mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">12</h3>
                  <p className="text-gray-600">Community Contributions</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Learn;

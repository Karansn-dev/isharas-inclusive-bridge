
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Users, 
  MessageSquare, 
  MessageCircle, 
  Heart, 
  ThumbsUp, 
  ThumbsDown, 
  Calendar,
  BookOpen,
  Award,
  Edit,
  Filter,
  Search,
  Flag,
  Share,
  Tag
} from 'lucide-react';

const Community = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const discussions = [
    {
      id: 1,
      author: {
        name: "Priya Singh",
        avatar: "P",
        type: "Student"
      },
      title: "Regional variations in North Indian ISL signs",
      content: "I'm learning ISL in Delhi but noticed some signs differ from what my friend uses in Punjab. Has anyone else experienced regional variations in Northern India's ISL?",
      category: "learning",
      responses: 23,
      likes: 45,
      createdAt: "2 days ago",
      tags: ["regional-variations", "north-india", "learning"]
    },
    {
      id: 2,
      author: {
        name: "Dr. Anita Mehta",
        avatar: "A",
        type: "ISL Educator"
      },
      title: "Best practices for teaching ISL to hearing children",
      content: "I'm developing a program to teach ISL to hearing children in schools. Looking for effective methods that have worked in similar programs.",
      category: "education",
      responses: 34,
      likes: 87,
      createdAt: "3 days ago",
      tags: ["education", "children", "teaching-methods"]
    },
    {
      id: 3,
      author: {
        name: "Raj Kumar",
        avatar: "R",
        type: "Software Developer"
      },
      title: "Tech accessibility features you wish existed for the deaf community",
      content: "As a deaf software developer, I'm interested in building new accessibility tools. What features do you wish existed that would make technology more accessible?",
      category: "technology",
      responses: 56,
      likes: 132,
      createdAt: "1 week ago",
      tags: ["technology", "accessibility", "development"]
    },
    {
      id: 4,
      author: {
        name: "Meera Joshi",
        avatar: "M",
        type: "Healthcare Worker"
      },
      title: "Medical terminology in ISL - resources needed",
      content: "I work in healthcare and need resources for medical terminology in ISL. Does anyone know of good vocabulary sets specifically for medical settings?",
      category: "resources",
      responses: 18,
      likes: 42,
      createdAt: "5 days ago",
      tags: ["healthcare", "medical", "vocabulary"]
    }
  ];

  const successStories = [
    {
      id: 1,
      author: {
        name: "Vikram Patel",
        avatar: "V",
        type: "Software Engineer"
      },
      title: "From communication barriers to team leader",
      content: "Growing up deaf in a small town near Mumbai, I faced countless barriers in education and employment. Learning ISL changed my life, but technology truly bridged the gap. Ishara's translation tools helped me excel in job interviews and now I lead a development team at a major tech company. Our workplace has become more inclusive, with three deaf team members and regular ISL workshops for hearing colleagues.",
      image: null,
      likes: 235,
      comments: 45,
      createdAt: "2 weeks ago"
    },
    {
      id: 2,
      author: {
        name: "Sarika Gupta",
        avatar: "S",
        type: "University Student"
      },
      title: "How ISL technology helped me complete my degree",
      content: "When I started university, lectures were nearly impossible to follow despite having an occasional interpreter. Using Ishara's translation technology, I could finally participate fully in classes and group discussions. My professors were amazed at the technology and now recommend it to other students. I'm graduating next month with honors in Computer Science and have already accepted a job offer.",
      image: null,
      likes: 189,
      comments: 37,
      createdAt: "1 month ago"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "National ISL Day Celebration",
      date: "September 23, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "India Habitat Centre, New Delhi",
      description: "Join us for performances, workshops, and community building activities celebrating Indian Sign Language.",
      attendees: 125
    },
    {
      id: 2,
      title: "ISL Workshop for Healthcare Professionals",
      date: "July 15, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "AIIMS, Delhi",
      description: "Learn essential medical ISL signs to better communicate with deaf and hard-of-hearing patients.",
      attendees: 75
    },
    {
      id: 3,
      title: "Virtual ISL Technology Showcase",
      date: "August 5, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Online (Zoom)",
      description: "Demonstration of the latest ISL translation technologies and accessibility tools.",
      attendees: 210
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Ishara Community
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with other ISL users, share experiences, and participate in discussions
            to build a stronger, more inclusive community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-none shadow-md text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-ishara-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">12,450+</div>
              <p className="text-sm text-gray-600">Community Members</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md text-center">
            <CardContent className="p-6">
              <MessageSquare className="h-8 w-8 text-ishara-teal mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">5,280+</div>
              <p className="text-sm text-gray-600">Discussions</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-ishara-orange mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">345+</div>
              <p className="text-sm text-gray-600">Learning Resources</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md text-center">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">24+</div>
              <p className="text-sm text-gray-600">Upcoming Events</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="discussions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="success-stories">Success Stories</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Search */}
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="w-full md:w-80 pl-10 py-2 border rounded-lg"
                />
              </div>
              
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center">
                  <Filter className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600 mr-2">Filter:</span>
                </div>
                <Badge 
                  variant={activeFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('all')}
                  className="cursor-pointer"
                >
                  All
                </Badge>
                <Badge 
                  variant={activeFilter === 'learning' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('learning')}
                  className="cursor-pointer"
                >
                  Learning
                </Badge>
                <Badge 
                  variant={activeFilter === 'technology' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('technology')}
                  className="cursor-pointer"
                >
                  Technology
                </Badge>
                <Badge 
                  variant={activeFilter === 'education' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('education')}
                  className="cursor-pointer"
                >
                  Education
                </Badge>
                <Badge 
                  variant={activeFilter === 'resources' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('resources')}
                  className="cursor-pointer"
                >
                  Resources
                </Badge>
              </div>
              
              {/* Create Discussion */}
              <Button className="bg-ishara-gradient hover:opacity-90 text-white">
                <Edit className="h-4 w-4 mr-2" />
                New Discussion
              </Button>
            </div>

            {/* Discussion Listing */}
            <div className="space-y-4">
              {discussions
                .filter(discussion => activeFilter === 'all' || discussion.category === activeFilter)
                .map(discussion => (
                <Card key={discussion.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{discussion.author.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{discussion.author.name}</div>
                          <div className="text-xs text-gray-500">{discussion.author.type}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">{discussion.createdAt}</div>
                    </div>
                    <CardTitle className="text-lg mt-2">
                      {discussion.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-700">{discussion.content}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {discussion.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-gray-50">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{discussion.responses}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{discussion.likes}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline">Load More Discussions</Button>
            </div>

            {/* Community Guidelines */}
            <Card className="border-none shadow-md bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ishara-blue rounded-full p-2 text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ishara-blue mb-1">Community Guidelines</h3>
                    <p className="text-sm text-gray-700">
                      Our community thrives on respect and inclusivity. Please ensure all discussions are constructive
                      and respectful. We encourage sharing experiences and asking questions.
                      <Button variant="link" className="p-0 h-auto text-ishara-blue">View full guidelines</Button>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Success Stories Tab */}
          <TabsContent value="success-stories" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Real Success Stories
              </h2>
              <Button className="bg-ishara-gradient hover:opacity-90 text-white">
                <Edit className="h-4 w-4 mr-2" />
                Share Your Story
              </Button>
            </div>

            {/* Success Stories */}
            <div className="space-y-6">
              {successStories.map(story => (
                <Card key={story.id} className="border-none shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>{story.author.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{story.author.name}</div>
                        <div className="text-xs text-gray-500">{story.author.type}</div>
                      </div>
                      <div className="ml-auto text-xs text-gray-500">{story.createdAt}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{story.content}</p>
                    
                    {story.image && (
                      <div className="mt-4">
                        <img 
                          src={story.image} 
                          alt="Success story image" 
                          className="w-full rounded-lg"
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between pt-1">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{story.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{story.comments}</span>
                      </Button>
                    </div>
                    <div>
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="border-none shadow-md bg-gradient-to-r from-ishara-blue to-ishara-teal text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Your Story Matters</h3>
                <p className="mb-6">
                  Share your journey and inspire others in the community. How has ISL or Ishara made a difference in your life?
                </p>
                <Button className="bg-white text-ishara-blue hover:bg-gray-100">
                  Submit Your Success Story
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Upcoming Events
              </h2>
              <Button className="bg-ishara-gradient hover:opacity-90 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Submit Event
              </Button>
            </div>

            {/* Events List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <Card key={event.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-ishara-gradient h-2 rounded-t-lg" />
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start">
                        <MessageSquare className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{event.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="text-sm text-gray-600">
                      <Users className="h-4 w-4 inline mr-1" />
                      {event.attendees} attending
                    </div>
                    <Button size="sm" className="bg-ishara-gradient hover:opacity-90 text-white">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Calendar */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-ishara-blue" />
                  Community Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4 text-gray-600">
                  <p>View all community events in our interactive calendar</p>
                  <Button variant="outline" className="mt-2">
                    Open Full Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Community;

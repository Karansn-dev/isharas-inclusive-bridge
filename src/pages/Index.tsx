
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Play, 
  Users, 
  Camera, 
  MessageSquare, 
  BookOpen, 
  Globe, 
  Heart,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  HandHeart,
  Zap,
  Shield
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Breaking Barriers with{' '}
                <span className="bg-ishara-gradient bg-clip-text text-transparent">
                  Sign Language Translation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Ishara empowers the deaf and hard-of-hearing community with real-time ISL translation, 
                making every conversation accessible and inclusive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signup">
                  <Button className="bg-ishara-gradient hover:opacity-90 text-white px-8 py-3 text-lg">
                    Try Ishara Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-3 text-lg border-ishara-blue text-ishara-blue hover:bg-ishara-blue hover:text-white">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                <Users className="inline h-4 w-4 mr-1" />
                Join 10,000+ users breaking communication barriers
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-ishara-gradient rounded-2xl p-8 text-white animate-float">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <HandHeart className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Real-time ISL</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Text & Speech</p>
                  </div>
                </div>
                <div className="text-center">
                  <Camera className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Translation in Progress...</p>
                  <div className="mt-4 bg-white/10 rounded-lg p-3">
                    <p className="text-sm">"नमस्ते, आप कैसे हैं?" → ISL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Communication Gap is Real
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the challenges faced by the deaf and hard-of-hearing community in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-ishara-blue mb-2">18M+</div>
                <p className="text-gray-600 mb-2">Deaf & Hard-of-Hearing Indians</p>
                <p className="text-sm text-gray-500">Who rely on ISL as their primary language</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-ishara-orange mb-2">250+</div>
                <p className="text-gray-600 mb-2">Certified ISL Interpreters</p>
                <p className="text-sm text-gray-500">Nationwide shortage creating barriers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-ishara-teal mb-2">85%</div>
                <p className="text-gray-600 mb-2">Face Employment Barriers</p>
                <p className="text-sm text-gray-500">Due to communication challenges</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About ISL Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Indian Sign Language Matters
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Indian Sign Language (ISL) is the primary language for over 18 million Indians, 
                  representing a rich linguistic tradition with its own grammar, syntax, and cultural significance.
                </p>
                <p>
                  Unlike spoken languages, ISL has unique regional variations across states, 
                  making it crucial to preserve and promote this diverse form of communication 
                  that connects communities nationwide.
                </p>
                <p>
                  Currently, India faces significant challenges in ISL accessibility compared to 
                  countries like the USA (ASL) and UK (BSL), where technology adoption has 
                  improved educational and employment opportunities for deaf communities.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="outline" className="border-ishara-blue text-ishara-blue hover:bg-ishara-blue hover:text-white">
                    Learn More About ISL
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 border-l-4 border-ishara-blue">
                <Globe className="h-8 w-8 text-ishara-blue mb-3" />
                <h3 className="font-semibold mb-2">Cultural Heritage</h3>
                <p className="text-sm text-gray-600">Rich linguistic tradition across Indian states</p>
              </Card>
              <Card className="p-6 border-l-4 border-ishara-teal">
                <BookOpen className="h-8 w-8 text-ishara-teal mb-3" />
                <h3 className="font-semibold mb-2">Educational Impact</h3>
                <p className="text-sm text-gray-600">Breaking learning barriers in schools</p>
              </Card>
              <Card className="p-6 border-l-4 border-ishara-orange">
                <TrendingUp className="h-8 w-8 text-ishara-orange mb-3" />
                <h3 className="font-semibold mb-2">Economic Opportunity</h3>
                <p className="text-sm text-gray-600">Improving workplace accessibility</p>
              </Card>
              <Card className="p-6 border-l-4 border-blue-500">
                <Heart className="h-8 w-8 text-blue-500 mb-3" />
                <h3 className="font-semibold mb-2">Community Building</h3>
                <p className="text-sm text-gray-600">Connecting deaf and hearing communities</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple. Fast. Accurate.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience seamless bidirectional translation between ISL and text/speech
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-ishara-gradient rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Capture</h3>
              <p className="text-gray-600">Camera detects sign language gestures with high precision</p>
            </div>
            
            <div className="text-center">
              <div className="bg-ishara-gradient rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Process</h3>
              <p className="text-gray-600">AI analyzes and interprets ISL patterns in real-time</p>
            </div>
            
            <div className="text-center">
              <div className="bg-ishara-gradient rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Translate</h3>
              <p className="text-gray-600">Converts to text/speech with context awareness</p>
            </div>
            
            <div className="text-center">
              <div className="bg-ishara-gradient rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Reverse</h3>
              <p className="text-gray-600">Text/speech converts back to sign language display</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              More Than Just Translation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed for the deaf and hard-of-hearing community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardContent className="p-0">
                <Zap className="h-12 w-12 text-ishara-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Real-time Translation</h3>
                <p className="text-gray-600 mb-4">Instant ISL ↔ text/speech conversion with 95% accuracy</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Works offline for basic translations</li>
                  <li>• Supports regional ISL variations</li>
                  <li>• Low-latency processing</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardContent className="p-0">
                <BookOpen className="h-12 w-12 text-ishara-teal mb-4" />
                <h3 className="text-xl font-semibold mb-3">Learning Mode</h3>
                <p className="text-gray-600 mb-4">Interactive ISL lessons with personalized progress tracking</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Step-by-step ISL courses</li>
                  <li>• Practice with AI feedback</li>
                  <li>• Achievement certificates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-ishara-orange mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600 mb-4">Connect with other ISL users and share experiences</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Discussion forums</li>
                  <li>• Success story sharing</li>
                  <li>• Peer support network</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
                <p className="text-gray-600 mb-4">Your conversations stay private with on-device processing</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• No video storage</li>
                  <li>• Encrypted data transmission</li>
                  <li>• User-controlled permissions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-gray-600 mb-4">WCAG 2.1 AA compliant with comprehensive accessibility features</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• High contrast modes</li>
                  <li>• Screen reader support</li>
                  <li>• Customizable text sizes</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">Continuously improving with user feedback and AI learning</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Community-driven improvements</li>
                  <li>• Regular accuracy updates</li>
                  <li>• Expert ISL validation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-ishara-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Building an Inclusive Tomorrow
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12">
            Our mission is to create a world where communication barriers don't limit potential. 
            Every conversation, every opportunity, every dream should be accessible to all.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-lg p-6">
              <BookOpen className="h-10 w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Educational Impact</h3>
              <p className="text-blue-100">Making learning accessible in schools and universities across India</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <TrendingUp className="h-10 w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Growth</h3>
              <p className="text-blue-100">Breaking workplace barriers and creating equal opportunities</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <Heart className="h-10 w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Connection</h3>
              <p className="text-blue-100">Connecting deaf and hearing communities through understanding</p>
            </div>
          </div>
          
          <Link to="/signup">
            <Button className="bg-white text-ishara-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from our community members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-none shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ishara-gradient rounded-full flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Priya Singh</p>
                    <p className="text-sm text-gray-500">Student, Delhi University</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Ishara has transformed my university experience. I can now participate fully in lectures and group discussions. 
                  It's not just a tool, it's my bridge to education."
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-none shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ishara-gradient rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Thanks to Ishara, I can communicate effectively with my team at work. 
                  The real-time translation has made me more confident in meetings and presentations."
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-none shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ishara-gradient rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Dr. Anita Mehta</p>
                    <p className="text-sm text-gray-500">ISL Educator</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As an ISL educator, I'm impressed by Ishara's accuracy and cultural sensitivity. 
                  It's a wonderful tool that respects the richness of Indian Sign Language."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Break Communication Barriers?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of users who are already experiencing the power of inclusive communication
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-ishara-gradient hover:opacity-90 text-white px-8 py-3 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/learn">
              <Button variant="outline" className="px-8 py-3 text-lg border-ishara-blue text-ishara-blue hover:bg-ishara-blue hover:text-white">
                Learn ISL First
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>WCAG 2.1 AA compliant</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;


import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Camera, 
  Mic, 
  Volume2, 
  Copy, 
  Download, 
  Play, 
  Pause, 
  RotateCcw,
  Settings,
  Users,
  Zap,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  Hand
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Community = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectedGesture, setDetectedGesture] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'pending'>('pending');
  const [language, setLanguage] = useState('hindi');
  const [confidence, setConfidence] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraPermission('granted');
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch {
      setCameraPermission('denied');
    }
  };

  const startGestureDetection = () => {
    setIsDetecting(true);
    toast({
      title: "Gesture Detection Started",
      description: "Position your hand in front of the camera",
    });

    // Simulate gesture detection
    setTimeout(() => {
      setDetectedGesture("Hello");
      setTranslatedText("नमस्ते");
      setConfidence(0.92);
    }, 2000);
  };

  const stopGestureDetection = () => {
    setIsDetecting(false);
    toast({
      title: "Detection Stopped",
      description: "Gesture detection has been paused",
    });
  };

  const speakText = () => {
    if ('speechSynthesis' in window && translatedText) {
      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.lang = language === 'hindi' ? 'hi-IN' : 'en-US';
      speechSynthesis.speak(utterance);
      toast({
        title: "Speaking",
        description: "Converting text to speech...",
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    toast({
      title: "Copied!",
      description: "Translation copied to clipboard",
    });
  };

  const clearSession = () => {
    setDetectedGesture('');
    setTranslatedText('');
    setConfidence(0);
    setIsDetecting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hand Gesture Translator
          </h1>
          <p className="text-gray-600">
            Real-time hand gesture recognition with text and speech output
          </p>
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Camera Section */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  Camera Input
                </span>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                    {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cameraPermission === 'granted' ? (
                <div className="relative">
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      className="w-full h-64 object-cover"
                    />
                    <canvas
                      ref={canvasRef}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                    />
                    {isDetecting && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                        Detecting
                      </div>
                    )}
                    {detectedGesture && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                        {detectedGesture} ({Math.round(confidence * 100)}%)
                      </div>
                    )}
                  </div>
                  
                  {/* Detection Overlay */}
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center space-x-4">
                      {isDetecting ? (
                        <Button onClick={stopGestureDetection} variant="destructive">
                          <Pause className="h-4 w-4 mr-2" />
                          Stop Detection
                        </Button>
                      ) : (
                        <Button onClick={startGestureDetection} className="bg-ishara-gradient hover:opacity-90 text-white">
                          <Hand className="h-4 w-4 mr-2" />
                          Start Detection
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    {cameraPermission === 'denied' ? (
                      <>
                        <EyeOff className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Camera access denied</p>
                        <Button className="mt-2" onClick={checkCameraPermission}>
                          Grant Permission
                        </Button>
                      </>
                    ) : (
                      <>
                        <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Camera access required</p>
                      </>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Translation Output</span>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                  </SelectContent>
                </Select>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Detected Gesture */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Detected Gesture</h3>
                <div className="bg-blue-50 rounded-lg p-4 min-h-16">
                  {detectedGesture ? (
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-900">{detectedGesture}</span>
                      <span className="text-sm text-blue-600">{Math.round(confidence * 100)}% confidence</span>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No gesture detected</p>
                  )}
                </div>
              </div>

              {/* Translated Text */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Translated Text</h3>
                <div className="bg-gray-50 rounded-lg p-4 min-h-16">
                  {translatedText ? (
                    <p className="text-lg text-gray-900">{translatedText}</p>
                  ) : (
                    <p className="text-gray-500 italic">Translation will appear here...</p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              {translatedText && (
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button size="sm" variant="outline" onClick={speakText}>
                    <Volume2 className="h-4 w-4 mr-1" />
                    Speak
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <Card className="border-none shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline" onClick={clearSession}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Clear Session
              </Button>
              
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Detection Settings
              </Button>
              
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Gesture Library
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-none shadow-md">
            <CardContent className="p-6">
              <Zap className="h-10 w-10 text-ishara-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-time Detection</h3>
              <p className="text-gray-600 text-sm">
                Instant hand gesture recognition with high accuracy
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-md">
            <CardContent className="p-6">
              <Volume2 className="h-10 w-10 text-ishara-teal mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Text-to-Speech</h3>
              <p className="text-gray-600 text-sm">
                Natural voice synthesis in multiple languages
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-md">
            <CardContent className="p-6">
              <Hand className="h-10 w-10 text-ishara-orange mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Gesture Library</h3>
              <p className="text-gray-600 text-sm">
                Extensive collection of ISL gestures and expressions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;

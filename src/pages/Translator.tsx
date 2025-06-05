
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
  Minimize2
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Translator = () => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [inputMethod, setInputMethod] = useState<'camera' | 'text' | 'voice'>('camera');
  const [outputMethod, setOutputMethod] = useState<'text' | 'avatar' | 'both'>('both');
  const [textInput, setTextInput] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [language, setLanguage] = useState('hindi');
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'pending'>('pending');
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'pending'>('pending');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [conversationMode, setConversationMode] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    try {
      const cameraResult = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraPermission('granted');
      if (videoRef.current) {
        videoRef.current.srcObject = cameraResult;
      }
    } catch {
      setCameraPermission('denied');
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicPermission('granted');
    } catch {
      setMicPermission('denied');
    }
  };

  const startTranslation = () => {
    setIsTranslating(true);
    toast({
      title: "Translation Started",
      description: "Real-time ISL translation is now active",
    });

    // Simulate translation process
    setTimeout(() => {
      setTranslatedText("नमस्ते, आप कैसे हैं?");
    }, 2000);
  };

  const stopTranslation = () => {
    setIsTranslating(false);
    toast({
      title: "Translation Stopped",
      description: "Translation session ended",
    });
  };

  const startVoiceRecording = () => {
    setIsRecording(true);
    toast({
      title: "Recording Started",
      description: "Speak clearly for best results",
    });
  };

  const stopVoiceRecording = () => {
    setIsRecording(false);
    // Simulate voice to text conversion
    setTextInput("Hello, how are you today?");
    setTranslatedText("नमस्ते, आज आप कैसे हैं?");
    toast({
      title: "Voice Captured",
      description: "Converting speech to ISL...",
    });
  };

  const translateText = () => {
    if (!textInput.trim()) return;
    
    // Simulate text to ISL translation
    setTranslatedText(textInput);
    toast({
      title: "Text Translated",
      description: "Converting to ISL gestures...",
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    toast({
      title: "Copied!",
      description: "Translation copied to clipboard",
    });
  };

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(translatedText);
      speechSynthesis.speak(utterance);
    }
  };

  const clearSession = () => {
    setTextInput('');
    setTranslatedText('');
    setIsTranslating(false);
    setIsRecording(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ISL Real-Time Translator
          </h1>
          <p className="text-gray-600">
            Experience seamless bidirectional translation between ISL and text/speech
          </p>
        </div>

        {/* Translation Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Input Section */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Input</span>
                <div className="flex items-center space-x-2">
                  <Select value={inputMethod} onValueChange={(value) => setInputMethod(value as any)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="camera">
                        <Camera className="h-4 w-4 mr-2 inline" />
                        Camera
                      </SelectItem>
                      <SelectItem value="text">
                        <Textarea className="h-4 w-4 mr-2 inline" />
                        Text
                      </SelectItem>
                      <SelectItem value="voice">
                        <Mic className="h-4 w-4 mr-2 inline" />
                        Voice
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {inputMethod === 'camera' && (
                <div className="relative">
                  {cameraPermission === 'granted' ? (
                    <div className="relative bg-black rounded-lg overflow-hidden">
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="w-full h-64 object-cover"
                      />
                      <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full"
                      />
                      {isTranslating && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                          Live
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="bg-black/50 text-white hover:bg-black/70"
                          onClick={() => setIsFullscreen(!isFullscreen)}
                        >
                          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        {cameraPermission === 'denied' ? (
                          <>
                            <EyeOff className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600">Camera access denied</p>
                            <Button className="mt-2" onClick={checkPermissions}>
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
                </div>
              )}

              {inputMethod === 'text' && (
                <div className="space-y-4">
                  <Textarea
                    placeholder="Type your message here..."
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    className="min-h-32"
                  />
                  <div className="flex items-center space-x-2">
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
                    <Button onClick={translateText} className="bg-ishara-gradient hover:opacity-90 text-white">
                      Translate
                    </Button>
                  </div>
                </div>
              )}

              {inputMethod === 'voice' && (
                <div className="text-center space-y-4">
                  {micPermission === 'granted' ? (
                    <>
                      <div className="relative">
                        <div className={`w-32 h-32 rounded-full mx-auto flex items-center justify-center ${
                          isRecording ? 'bg-red-100 border-4 border-red-500' : 'bg-gray-100'
                        }`}>
                          <Mic className={`h-12 w-12 ${isRecording ? 'text-red-500' : 'text-gray-400'}`} />
                        </div>
                        {isRecording && (
                          <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-pulse" />
                        )}
                      </div>
                      <div>
                        {isRecording ? (
                          <Button onClick={stopVoiceRecording} variant="destructive">
                            <Pause className="h-4 w-4 mr-2" />
                            Stop Recording
                          </Button>
                        ) : (
                          <Button onClick={startVoiceRecording} className="bg-ishara-gradient hover:opacity-90 text-white">
                            <Mic className="h-4 w-4 mr-2" />
                            Start Recording
                          </Button>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <Mic className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Microphone access required</p>
                      <Button className="mt-2" onClick={checkPermissions}>
                        Grant Permission
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Output</span>
                <Select value={outputMethod} onValueChange={(value) => setOutputMethod(value as any)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Text Only</SelectItem>
                    <SelectItem value="avatar">Avatar Only</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(outputMethod === 'avatar' || outputMethod === 'both') && (
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-ishara-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-white text-2xl">🤟</div>
                    </div>
                    {translatedText ? (
                      <p className="text-gray-700">Performing ISL gesture...</p>
                    ) : (
                      <p className="text-gray-500">ISL avatar will appear here</p>
                    )}
                  </div>
                </div>
              )}

              {(outputMethod === 'text' || outputMethod === 'both') && (
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 min-h-32">
                    {translatedText ? (
                      <p className="text-lg text-gray-900">{translatedText}</p>
                    ) : (
                      <p className="text-gray-500 italic">Translation will appear here...</p>
                    )}
                  </div>
                  
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
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <Card className="border-none shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {inputMethod === 'camera' && (
                <>
                  {isTranslating ? (
                    <Button onClick={stopTranslation} variant="destructive" size="lg">
                      <Pause className="h-5 w-5 mr-2" />
                      Stop Translation
                    </Button>
                  ) : (
                    <Button onClick={startTranslation} className="bg-ishara-gradient hover:opacity-90 text-white" size="lg">
                      <Play className="h-5 w-5 mr-2" />
                      Start Translation
                    </Button>
                  )}
                </>
              )}
              
              <Button variant="outline" onClick={clearSession}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Clear Session
              </Button>
              
              <Button variant="outline" onClick={() => setConversationMode(!conversationMode)}>
                <Users className="h-4 w-4 mr-2" />
                {conversationMode ? 'Exit' : 'Enter'} Conversation Mode
              </Button>
              
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-none shadow-md">
            <CardContent className="p-6">
              <Zap className="h-10 w-10 text-ishara-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-time Processing</h3>
              <p className="text-gray-600 text-sm">
                Sub-500ms latency for instant communication
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-md">
            <CardContent className="p-6">
              <Eye className="h-10 w-10 text-ishara-teal mx-auto mb-3" />
              <h3 className="font-semibold mb-2">High Accuracy</h3>
              <p className="text-gray-600 text-sm">
                95%+ accuracy with regional ISL support
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-md">
            <CardContent className="p-6">
              <Users className="h-10 w-10 text-ishara-orange mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Conversation Mode</h3>
              <p className="text-gray-600 text-sm">
                Multi-participant real-time translation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Translator;

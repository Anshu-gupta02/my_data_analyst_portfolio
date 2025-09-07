import { Download, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef, memo } from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';

// Memoized animated background for better performance
const AnimatedBackground = memo(() => (
  <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 mix-blend-screen blur-3xl animate-float" style={{ animationDelay: '0s' }} />
    <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/20 mix-blend-screen blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
    <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-accent/20 mix-blend-screen blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
    
    {/* Decorative grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
  </div>
));
AnimatedBackground.displayName = 'AnimatedBackground';

const Hero = () => {
  const techWords = [
    'Data Analyst'
  ];
  const [currentWord, setCurrentWord] = useState(0);
  const [fade, setFade] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % techWords.length);
        setFade(true);
      }, 0); // fade out duration
    }, 0);
    
    setIsVisible(true);
    
    return () => clearInterval(interval);
  }, []);

  // Use preloaded resume to avoid loading delay when clicking
  useEffect(() => {
    const preloadResume = new Image();
    preloadResume.src = '/Anshu_resume.pdf';
  }, []);

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/Anshu_resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Anshu_resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden py-16"
    >
      {/* Animated Background Elements */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 lg:pt-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-4 sm:gap-6 lg:gap-12">
          {/* Content */}
          <div className={`flex-1 text-center lg:text-left mb-4 sm:mb-6 lg:mb-0 max-w-2xl lg:max-w-xl md:max-w-lg md:mx-auto lg:mx-0 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <div className="text-xs uppercase tracking-widest text-accent mb-3 font-medium">Welcome to my portfolio</div>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:text-left leading-tight">
                <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-2">I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-accent mb-2">Anshu Gupta</span>
                <span className="block">
                  <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium align-baseline mr-2">as</span>
                  <span
                    className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-secondary align-baseline transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    style={{ minHeight: '1.2em', display: 'inline-block' }}
                  >
                    {techWords[currentWord]}
                  </span>
                </span>
              </h1>
              <div className="text-lg sm:text-xl md:text-xl lg:text-xl text-muted-foreground font-medium mb-4 sm:mb-5 lg:mb-6 lg:text-left leading-relaxed">
                I transform complex data into clear, actionable insights that drive better business decisions.
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-glow relative z-50 text-sm sm:text-base group overflow-hidden"
              >
                <span className="absolute inset-0 w-0 bg-secondary transition-all duration-300 group-hover:w-full opacity-90"></span>
                <span className="relative flex items-center">
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce transition-all" />
                  Download Resume
                </span>
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base group"
              >
                <span className="relative flex items-center">
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce transition-all" />
                  Contact Me
                  <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
            
            {/* Social proof or badges */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2 opacity-70">
              <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Microsoft Excel</span>
              <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Power BI</span>
              <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">SQL</span>
              <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Python</span>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex-1 flex justify-center lg:justify-end md:max-w-md lg:max-w-lg xl:max-w-none ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Animated Background Elements */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl opacity-60 animate-rotate" style={{ transformOrigin: 'center' }}></div>
              
              {/* Main Profile Image */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden shadow-glow relative z-10 animate-float" style={{ animationDuration: '6s' }}>
                <OptimizedImage
                  src="/profilePhoto.jpg"
                  alt="Anshu Gupta"
                  className="w-full h-full object-cover"
                  priority={true}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent/20 blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/30 blur-lg animate-float" style={{ animationDelay: '-4s' }}></div>
              
              {/* Tech icons floating around */}
              <div className="absolute top-1/4 -left-8 w-12 h-12 rounded-lg bg-muted flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '-1s' }}>
                <span className="text-lg font-bold text-accent">SQL</span>
              </div>
              <div className="absolute bottom-1/4 -right-8 w-12 h-12 rounded-lg bg-muted flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '-3s' }}>
                <span className="text-lg font-bold text-primary">BI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} style={{ transitionDelay: '1s' }}>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative group">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 group-hover:h-5 transition-all duration-300" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'FRONTEND DEVELOPER',
    'UI/UX DESIGNER',
    'CREATIVE CODER'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Hello, I'm <span className="heading-gradient">Moncy</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 h-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {text}<span className="animate-cursor-blink">|</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            I design and build clean, functional websites and applications with focus on usability and modern aesthetics.
            Based in San Francisco, working globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-background">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

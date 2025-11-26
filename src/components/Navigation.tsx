import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold gradient-text"
        >
          Portfolio
        </button>
        
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            À propos
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Projets
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Compétences
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>

        <Button
          onClick={() => scrollToSection('contact')}
          className="gradient-primary"
        >
          Me contacter
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;

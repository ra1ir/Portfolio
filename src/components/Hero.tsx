import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 gradient-primary opacity-10" />

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Bonjour, je suis <span className="gradient-text">Abd al hamid Rair</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
  Étudiant en informatique fondamentale à l’Université Ibn Tofaïl, je combine développement web/logiciel et bases théoriques pour concevoir, au fil de mes projets et stages, des applications fiables et bien structurées.

</p>

        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="gradient-primary"
            onClick={() => scrollToSection('projects')}
          >
            Voir mes projets
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
          >
            Me contacter
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;

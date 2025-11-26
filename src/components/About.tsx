import { Card } from '@/components/ui/card';
import { Code2, Palette, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Développement',
      description: 'Code propre et performant avec les dernières technologies',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Interfaces modernes et intuitives centrées sur l\'utilisateur',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Applications rapides et optimisées pour tous les appareils',
    },
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionné par l’informatique, je transforme les idées en solutions numériques concrètes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center card-elevated bg-card hover:bg-card-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Avec plusieurs années d'expérience dans le développement web, je me spécialise 
            dans la création d'applications modernes et performantes. Mon approche combine 
            expertise technique et sensibilité au design pour offrir des expériences 
            utilisateur exceptionnelles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

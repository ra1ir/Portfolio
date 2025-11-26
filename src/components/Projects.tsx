import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Language Translation Tool',
      description:
        "Application web en cours de développement qui permet à l’utilisateur de saisir un texte, de choisir une langue source et une langue cible, puis d’obtenir la traduction. Le texte est envoyé à une API de traduction (Google Translate ou Microsoft Translator) et le résultat est affiché clairement à l’écran. Des fonctionnalités comme le bouton de copie ou la lecture vocale (text-to-speech) sont prévues pour améliorer l’ergonomie.",
      tags: ['JavaScript/TypeScript', 'API de traduction', 'REST', 'UI/UX'],
      gradient: 'from-sky-500 to-cyan-500',
      image: '/projects/translation-tool.jpg',
    },
    {
      title: 'Chatbot pour FAQs',
      description:
        "Chatbot en cours de réalisation qui répond automatiquement à des questions fréquentes à partir d’une base de FAQ (questions/réponses). Les textes sont prétraités avec des librairies NLP (NLTK ou spaCy), puis les questions des utilisateurs sont comparées aux FAQ via des techniques comme la similarité cosinus ou l’analysis d’intention. Le chatbot affiche la réponse la plus pertinente dans une interface de chat simple.",
      tags: ['Python', 'NLP', 'NLTK / spaCy', 'Cosine similarity'],
      gradient: 'from-purple-500 to-indigo-500',
      image: '/projects/chatbot-faq.jpg',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quelques projets académiques en cours qui illustrent mon intérêt
            pour le développement, les API et le traitement du langage naturel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-elevated bg-card hover:bg-card-hover group"
            >
              {/* Image du projet */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 gradient-primary">
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

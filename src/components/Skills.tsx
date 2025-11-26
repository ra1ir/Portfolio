import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'HTML,CSS', 'JAVASRIPT,JQUERY'],
    },
    {
      category: 'Backend',
      skills: ['C / C++', 'Java', 'Python', 'SQL (MySQL / PostgreSQL)'],
    },
    {
      category: 'Outils',
      skills: ['Git / GitHub', 'VS Code', 'Linux', 'Anaconda/Jupyter' , 'Docker'],
    },
    {
      category: 'Soft Skills',
      skills: ['Pensée analytique ', 'Gestion du temps', 'Résolution de problèmes', 'Communication et travail en équipe ','Arabe Français Anglais'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compétences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise au quotidien
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card hover:bg-card-hover card-elevated">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-secondary rounded-lg text-secondary-foreground text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

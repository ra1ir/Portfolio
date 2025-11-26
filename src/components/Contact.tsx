import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  // États du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = 'Contact depuis le portfolio';
    const body = `
Nom : ${name}
Email : ${email}

Message :
${message}
    `;

    const mailtoLink = `mailto:rairhamid18@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Ouvre le client mail de la personne
    window.location.href = mailtoLink;

    // Optionnel : vider le formulaire après clic
    setName('');
    setEmail('');
    setMessage('');
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/ra1ir' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abd-al-hamid-rair-167491274/',
    },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/hamid_rair' },
    {
      icon: Mail,
      label: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rairhamid18@gmail.com&su=Contact%20depuis%20le%20portfolio',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons-en !
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <Card className="p-8 card-elevated bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input
                  id="name"
                  placeholder="Votre nom"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full gradient-primary">
                Envoyer le message
              </Button>
            </form>
          </Card>

          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Restons connectés</h3>
              <p className="text-muted-foreground mb-6">
                N'hésitez pas à me contacter pour discuter de vos projets ou
                simplement pour échanger sur le développement et l’informatique.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © 2025 Portfolio. Tous droits réservés.
          </p>
          <p className="text-muted-foreground">
            Créé avec ❤️ et React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

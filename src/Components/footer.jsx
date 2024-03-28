const Footer = () => {
  return (
    <footer className="bg-black text-white w-full p-10 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 CheckNews. Tous droits réservés.</p>
          </div>

          <div className="flex space-x-4">
            <a href="/about" className="hover:text-columbia">À propos</a>
            <a href="/terms" className="hover:text-columbia">Conditions d'utilisation</a>
            <a href="/privacy" className="hover:text-columbia">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

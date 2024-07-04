const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>© 2024 HealthHub. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

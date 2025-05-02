const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white mt-10">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} ShopZone. All rights reserved.</p>
          <p className="text-xs mt-1 text-gray-400">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
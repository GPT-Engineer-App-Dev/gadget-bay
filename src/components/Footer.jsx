import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a href="/privacy-policy" className="mr-4">Privacy Policy</a>
          <a href="/terms-of-service" className="mr-4">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
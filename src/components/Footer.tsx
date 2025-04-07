
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              CREATIONS<span className="text-cyan-400">.</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Creating elegant digital experiences through clean code and modern design.
            </p>
          </div>

          <Button 
            onClick={scrollToTop}
            className="rounded-full p-2 bg-card border border-gray-800 hover:bg-gray-800 hover:border-cyan-400/30"
            size="icon"
          >
            <ArrowUp className="h-5 w-5 text-cyan-400" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Creations. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex gap-6">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

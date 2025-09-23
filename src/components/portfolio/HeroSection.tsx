import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-secondary opacity-80" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Shubham Hadawle
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
            Machine Learning Engineer & Software Developer
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specializing in GraphRAG, Neural Networks, and Full-Stack Development. 
            Currently building cutting-edge ML solutions at Motilal Oswal.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-in-right">
          <Button variant="default" size="lg" className="shadow-primary">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 animate-scale-in">
          <a href="https://github.com/shubhamhadawle" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/shubhamhadawle" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
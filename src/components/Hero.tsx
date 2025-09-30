import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Brian Kibet
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Information Technology Professional
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated IT professional specializing in app development, cloud technologies, and ICT support. 
            Passionate about leveraging technology to create innovative solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a 
            href="https://github.com/maritimkibet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="mailto:brianvocaldo@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="tel:+254740125950"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

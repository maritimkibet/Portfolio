import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Lightbulb, Gamepad, BookOpen } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <a 
                  href="tel:+254740125950" 
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+254 740 125 950</p>
                  </div>
                </a>

                <a 
                  href="mailto:brianvocaldo@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/5 transition-colors group"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">brianvocaldo@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/maritimkibet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-accent/5 transition-colors group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Github className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">github.com/maritimkibet</p>
                  </div>
                </a>
              </div>

              <div className="pt-6">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:brianvocaldo@gmail.com'}
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Interests & Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                <Lightbulb className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Innovation</p>
                  <p className="text-sm text-muted-foreground">
                    Active hackathon participant including Kenya Red Cross (2024) and Google GKE 10-Year Hackathon (2025)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/5">
                <BookOpen className="h-5 w-5 text-secondary mt-1" />
                <div>
                  <p className="font-semibold">Continuous Learning</p>
                  <p className="text-sm text-muted-foreground">
                    Exploring languages, literature, and indigenous knowledge systems while staying current with tech trends
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5">
                <Gamepad className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold">Gaming Enthusiast</p>
                  <p className="text-sm text-muted-foreground">
                    Gran Turismo 7 player with deep knowledge of gameplay mechanics and racing simulation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

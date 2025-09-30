import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div>
                <p className="font-semibold text-lg">Diploma in Information Technology</p>
                <p className="text-muted-foreground">Masinde Muliro University of Science and Technology</p>
                <p className="text-sm text-muted-foreground mt-2">Graduating December 2025</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 transition-all duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Hands-on experience in ICT support, customer service, and fintech operations. 
                  Skilled in troubleshooting hardware/software issues, managing CRM systems, and 
                  working with data management tools.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm passionate about leveraging technology to improve customer experience, streamline operations, 
            and foster innovation. With expertise spanning app development, cloud technologies, and automation, 
            I bring a comprehensive approach to solving complex technical challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

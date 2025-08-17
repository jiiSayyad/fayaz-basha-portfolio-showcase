
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Code2, 
  Database, 
  Globe, 
  Server,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "next-themes";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const skills = [
    { name: "JavaScript", level: 90, icon: Code2 },
    { name: "React", level: 85, icon: Code2 },
    { name: "Node.js", level: 80, icon: Server },
    { name: "Python", level: 75, icon: Code2 },
    { name: "MongoDB", level: 70, icon: Database },
    { name: "SQL", level: 85, icon: Database },
    { name: "HTML/CSS", level: 95, icon: Globe },
    { name: "Git", level: 80, icon: Code2 },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/api/placeholder/400/200",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/sayyad-fayaz-basha",
      live: "https://demo-ecommerce.com",
      route: "/ecommerce"
    },
    {
      title: "B.Tech Toolkit",
      description: "Educational platform for engineering students with interactive tools",
      image: "/api/placeholder/400/200",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/sayyad-fayaz-basha",
      live: "https://btech-toolkit.com",
      route: "/btech-toolkit"
    }
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Developing and maintaining web applications using React, Node.js, and MongoDB."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2022 - 2023", 
      description: "Created responsive web interfaces and improved user experience across multiple projects."
    }
  ];

  const handleViewResume = () => {
    window.open("https://i.postimg.cc/1XDhXssS/s-5.png", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">Sayyad Fayaz Basha</h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="glow-button"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="glow-button"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="glow-button"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? "max-h-64 opacity-100 mt-4" 
              : "max-h-0 opacity-0 overflow-hidden"
          }`}>
            <nav className="flex flex-col space-y-4 pb-4">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 hero-text-slide">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="gradient-text">Sayyad</span>
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground">
                  Full Stack Developer
                </p>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Passionate about creating innovative web solutions and delivering exceptional user experiences. 
                  Specialized in modern JavaScript frameworks and cloud technologies.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>sayyad.fayaz@email.com</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={handleViewResume}
                  className="glow-button bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection("contact")}
                  className="glow-button border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="glow-button"
                  asChild
                >
                  <a href="https://github.com/sayyad-fayaz-basha" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="glow-button"
                  asChild
                >
                  <a href="https://linkedin.com/in/sayyad-fayaz-basha" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="w-full h-full bg-background rounded-full p-2 glow-border">
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                      <img 
                        src="https://i.postimg.cc/VLknGwJH/profesional.jpg" 
                        alt="Sayyad Fayaz Basha" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="glow-card">
            <CardHeader className="text-center">
              <CardTitle className="section-title">About Me</CardTitle>
              <CardDescription className="section-subtitle">
                Learn more about my background and expertise
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                I love creating efficient, scalable solutions and have experience working with both 
                frontend and backend technologies. My goal is to build applications that not only 
                meet technical requirements but also provide exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying updated with the latest industry trends.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="glow-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.level}%</p>
                    </div>
                  </div>
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-fill" 
                      style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Some of my recent work and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="glow-card group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glow-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glow-button"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="glow-button"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              My professional journey and key achievements
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="glow-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="glow-badge mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <Card className="max-w-2xl mx-auto glow-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">sayyad.fayaz@email.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    className="w-full glow-button bg-gradient-to-r from-primary to-primary-glow hover:scale-105"
                    onClick={() => window.location.href = "mailto:sayyad.fayaz@email.com"}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sayyad Fayaz Basha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

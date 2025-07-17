import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, Smartphone, Award, Calendar, GraduationCap, Building, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import profileImage from '@/assets/profile-image.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'services', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const skills = [
    { name: 'Java', level: 85, icon: Code },
    { name: 'JavaScript', level: 80, icon: Code },
    { name: 'HTML/CSS', level: 90, icon: Globe },
    { name: 'Python', level: 60, icon: Code },
    { name: 'MySQL', level: 75, icon: Database },
    { name: 'React', level: 70, icon: Code },
  ];

  const experiences = [
    {
      title: 'Java Programming Intern',
      company: 'VaultofCodes.in',
      period: 'Jun - Jul 2025',
      description: 'Developed Java applications and learned advanced programming concepts.',
      icon: Building,
    },
    {
      title: 'AI Foundations Intern',
      company: 'Microsoft/AICTE/Edunet',
      period: 'Apr - May 2025',
      description: 'Gained expertise in artificial intelligence fundamentals and machine learning.',
      icon: Building,
    },
    {
      title: 'Software Engineering Intern',
      company: 'YBI Foundation',
      period: 'Jun - Aug 2024',
      description: 'Worked on software development projects and team collaboration.',
      icon: Building,
    },
    {
      title: 'Web Development Intern',
      company: 'System Tron',
      period: 'Jun 2024',
      description: 'Built responsive web applications using modern technologies.',
      icon: Building,
    },
  ];

  const projects = [
    {
      title: 'B.Tech Academic Toolkit',
      description: 'A comprehensive PDF resource website built with HTML, CSS, and JavaScript. Features study materials, video tutorials, and coding platform integrations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      link: '#',
      image: '/placeholder.svg',
    },
    {
      title: 'E-Commerce Website',
      description: 'Full-stack e-commerce application with user management, product catalog, and admin dashboard. Built using Java, JSP/Servlets, and MySQL.',
      technologies: ['Java', 'JSP/Servlets', 'MySQL', 'Bootstrap'],
      link: '#',
      image: '/placeholder.svg',
    },
  ];

  const achievements = [
    { title: 'Java Certification', issuer: 'Coursera', year: '2024', icon: Award },
    { title: 'MS Office Certification', issuer: 'Udemy', year: '2024', icon: Award },
    { title: 'DSA in Java', issuer: 'Infosys Springboard', year: '2024', icon: Award },
    { title: '1st Prize - Front-End Fusion', issuer: 'PRESTO 2K25', year: '2025', icon: Star },
    { title: 'TCS ION Career Edge', issuer: 'TCS', year: '2024', icon: Award },
  ];

  const services = [
    {
      title: 'Java Full Stack Development',
      description: 'End-to-end web application development using Java, Spring Boot, and modern front-end frameworks.',
      icon: Code,
    },
    {
      title: 'Front-End UI/UX Design',
      description: 'Creating responsive, user-friendly interfaces with modern design principles and best practices.',
      icon: Smartphone,
    },
    {
      title: 'Web App Prototyping',
      description: 'Rapid prototyping and MVP development for testing ideas and concepts.',
      icon: Globe,
    },
    {
      title: 'PDF Resource Development',
      description: 'Building educational resource websites with document management and user-friendly interfaces.',
      icon: Database,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold gradient-text">Fayaz Basha</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="hero-text-slide">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary shadow-2xl hero-image-float">
              <img 
                src={profileImage} 
                alt="Sayyad Fayaz Basha" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Fayaz Basha</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Aspiring Java Full Stack Developer passionate about creating innovative tech solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="btn-primary" onClick={() => window.open('#', '_blank')}>
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Button>
              <Button variant="outline" className="btn-outline" onClick={() => scrollToSection('contact')}>
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="scroll-indicator">
            <ArrowDown 
              className="h-6 w-6 mx-auto text-primary cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate developer with a strong foundation in computer science and full-stack development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <p className="text-lg leading-relaxed mb-6">
                I'm Sayyad Fayaz Basha, a Computer Science Engineering student at Sri Venkateswara Institute of Technology 
                with a CGPA of 8.8. I am passionate about Java full stack development, blending strong front-end design 
                with robust backend logic.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Eager to contribute to innovative tech solutions with a growth mindset and problem-solving focus. 
                I believe in continuous learning and applying new technologies to create meaningful applications.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 9703029115</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>fayaz1234basha@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Dharmavaram, AP</span>
                </div>
              </div>
            </div>
            
            <div className="fade-in-up">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Education Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">B.Tech CSE</h4>
                    <p className="text-sm text-muted-foreground">SVIT, Anantapur (2022–Present)</p>
                    <p className="text-sm">CGPA: 8.8</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Intermediate</h4>
                    <p className="text-sm text-muted-foreground">Sri Sai Krupa Junior College (2020–2022)</p>
                    <p className="text-sm">CGPA: 9.4</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">10th Grade</h4>
                    <p className="text-sm text-muted-foreground">Layola English Medium School (2019–2020)</p>
                    <p className="text-sm">CGPA: 9.2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              Proficient in modern development technologies and frameworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="card-hover fade-in-up bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="h-6 w-6 text-primary" />
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-fill" 
                      style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Professional internships and hands-on learning experiences
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 fade-in-up">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <exp.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing my technical skills through real-world applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover card-glow fade-in-up bg-card border-border overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Achievements & Certifications</h2>
            <p className="section-subtitle">
              Recognition for technical excellence and continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-hover fade-in-up bg-card border-border">
                <CardContent className="p-6 text-center">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{achievement.issuer}</p>
                  <p className="text-sm text-primary">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
              Comprehensive development solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover fade-in-up bg-card border-border text-center">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-4">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Ready to collaborate? Get in touch and let's build something amazing together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="fade-in-up">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9703029115</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">fayaz1234basha@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Dharmavaram, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <Card className="fade-in-up bg-card border-border">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sayyad Fayaz Basha. Designed & Developed with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;


import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio website built with React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=1000",
      projectUrl: "#",
      category: "frontend"
    },
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online store operations.",
      tags: ["React", "TypeScript", "Recharts"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
      projectUrl: "#",
      category: "frontend"
    },
    {
      title: "Mobile App Design",
      description: "UI/UX design for a fitness tracking mobile application with dark mode interface.",
      tags: ["Figma", "UI/UX", "Prototype"],
      imageUrl: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=1000",
      projectUrl: "#",
      category: "design"
    },
    {
      title: "API Integration Service",
      description: "Backend service handling third-party API integrations for a SaaS platform.",
      tags: ["Node.js", "Express", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000",
      projectUrl: "#",
      category: "backend"
    },
    {
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts and animated visuals.",
      tags: ["React", "Weather API", "CSS"],
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000",
      projectUrl: "#",
      category: "frontend"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity design for a tech startup, including logo and style guide.",
      tags: ["Branding", "Illustrator", "Design System"],
      imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000",
      projectUrl: "#",
      category: "design"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Projects</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          Explore my recent work across web development, design, and more. Each project represents a unique challenge solved with creativity and technical skill.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button 
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={filter === category.id 
                ? "bg-cyan-500 hover:bg-cyan-600 text-background" 
                : "border-gray-700 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50"
              }
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

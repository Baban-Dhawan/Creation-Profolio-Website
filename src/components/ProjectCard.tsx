
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  projectUrl,
  delay = 0
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group rounded-lg border border-gray-800 bg-card overflow-hidden card-hover animate-fade-in-up",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden h-52">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-500 
            group-hover:scale-110"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : ""
        )} />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label={`View ${title} project`}
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
        
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="bg-gray-800/50 hover:bg-gray-800 text-gray-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


import { Check, Code, Layout, Lightbulb } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', progress: 95 },
    { name: 'JavaScript', progress: 90 },
    { name: 'React', progress: 85 },
    { name: 'TypeScript', progress: 80 },
    { name: 'UI/UX Design', progress: 85 },
    { name: 'Node.js', progress: 75 }
  ];

  const specialties = [
    {
      icon: <Layout className="h-6 w-6 text-cyan-400" />,
      title: 'Frontend Development',
      description: 'Building responsive and accessible web applications with modern frameworks and technologies.'
    },
    {
      icon: <Code className="h-6 w-6 text-cyan-400" />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code following best practices.'
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-cyan-400" />,
      title: 'Creative Solutions',
      description: 'Finding innovative approaches to complex problems through critical thinking.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate frontend developer and UI/UX designer with over 5 years of experience creating digital experiences that are both functional and beautiful.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My journey in tech started with a computer science degree, but my passion for design and user experience led me to specialize in frontend development where I could blend technical skills with creativity.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I'm constantly learning new technologies and techniques to stay at the cutting edge of web development. When I'm not coding, you can find me exploring new hiking trails or experimenting with digital art.
            </p>
            
            <ul className="space-y-2 mb-8">
              {['Problem Solver', 'Detail Oriented', 'Team Player', 'Fast Learner'].map((trait) => (
                <li key={trait} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-cyan-400" />
                  <span className="text-gray-300">{trait}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2 bg-gray-800">
                      <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-full rounded-full" />
                    </Progress>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Specialties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {specialties.map((specialty, index) => (
                  <div key={index} className="p-6 rounded-lg border border-gray-800 bg-card/50 hover:border-cyan-400/30 transition-colors">
                    <div className="mb-4">{specialty.icon}</div>
                    <h4 className="text-lg font-medium mb-2">{specialty.title}</h4>
                    <p className="text-sm text-gray-400">{specialty.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

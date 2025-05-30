import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  BarChart3, 
  Brain,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Calendar,
  Award,
  Zap,
  BookOpen,
  Clock,
  User,
  Tag,
  Star,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Play,
  Activity
} from 'lucide-react';
import './App.css';
import blogPosts from './data/blogPosts.json';
import streamlitProjects from './data/streamlitProjects.json';

const App = () => {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState('');
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const techStack = [
    { name: 'Python', icon: '🐍', description: 'Data Analysis & ML' },
    { name: 'R', icon: '📊', description: 'Statistical Computing' },
    { name: 'AWS', icon: '☁️', description: 'Cloud Infrastructure' },
    { name: 'Streamlit', icon: '🚀', description: 'Data Apps' },
    { name: 'Flask', icon: '🔥', description: 'Web Framework' },
    { name: 'Git', icon: '📝', description: 'Version Control' },
    { name: 'Docker', icon: '🐳', description: 'Containerization' },
    { name: 'ML/AI', icon: '🤖', description: 'Machine Learning' }
  ];

  const projects = [
    {
      title: 'AI-Powered Data Analytics Dashboard',
      description: 'Interactive dashboard built with Python and Streamlit for real-time data visualization and ML predictions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tech: ['Python', 'Streamlit', 'Pandas', 'ML'],
      link: '#',
      github: '#'
    },
    {
      title: 'Cloud-Based ETL Pipeline',
      description: 'Scalable data processing pipeline using AWS services for automated data extraction and transformation.',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86',
      tech: ['AWS', 'Python', 'Docker', 'Apache Spark'],
      link: '#',
      github: '#'
    },
    {
      title: 'Business Intelligence Web App',
      description: 'Full-stack web application for business analytics with interactive charts and real-time reporting.',
      image: 'https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg',
      tech: ['Flask', 'React', 'PostgreSQL', 'D3.js'],
      link: '#',
      github: '#'
    }
  ];

  const experiences = [
    {
      company: 'StudAI',
      role: 'Data Science Intern',
      duration: 'Summer 2024',
      description: 'Developed ML models for student performance prediction and built interactive dashboards for educational insights.',
      achievements: ['Improved prediction accuracy by 25%', 'Built 3 interactive dashboards', 'Processed 10K+ student records']
    },
    {
      company: 'Canadian Tech Company',
      role: 'Web Development Intern',
      duration: 'Spring 2024',
      description: 'Built responsive web applications and contributed to frontend architecture improvements.',
      achievements: ['Delivered 5 responsive web pages', 'Optimized load times by 40%', 'Implemented modern UI/UX patterns']
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const NavigationBar = () => (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Vishal
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'tech', 'projects', 'streamlit', 'blog', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
              >
                {item === 'streamlit' ? 'Streamlit Apps' : item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-2 mt-4">
              {['home', 'about', 'tech', 'projects', 'streamlit', 'blog', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                >
                  {item === 'streamlit' ? 'Streamlit Apps' : item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );

  const HeroSection = () => (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center z-10 px-6"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Vishal
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          3rd-Year Computer Science Major specializing in Data Technologies
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );

  const AboutSection = () => (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate 3rd-year Computer Science student with a deep fascination for data technologies 
                and their power to transform businesses and solve real-world problems. My journey in tech started 
                with curiosity about how data drives decision-making in modern organizations.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Specializing in data science, machine learning, and cloud technologies, I've gained hands-on 
                experience with Python, R, AWS, and various BI tools. I love creating interactive data 
                visualizations and building scalable solutions that make complex data accessible and actionable.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Beyond data, I enjoy exploring UI/UX design with Figma and 3D modeling with Blender, 
                always looking to combine technical skills with creative problem-solving.
              </p>
              
              <motion.button
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Data Technologies</h3>
                  <p className="text-gray-600 dark:text-gray-300">Python, R, SQL, Machine Learning</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Cloud className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Cloud & DevOps</h3>
                  <p className="text-gray-600 dark:text-gray-300">AWS, Docker, Git, CI/CD</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Web Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">HTML/CSS, Bootstrap, Flask, Streamlit</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const TechStackSection = () => (
    <section id="tech" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Core Tech Stack</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Essential technologies I use for data science and web development
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my work in data science, web development, and cloud technologies
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.link}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const ExperienceSection = () => (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional experiences that have shaped my journey in tech
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-300 dark:bg-blue-700" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2" />
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1 ml-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <Zap className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const StreamlitSection = () => (
    <section id="streamlit" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Streamlit Applications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interactive data applications built with Streamlit for real-world impact
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {streamlitProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 px-4 py-2 rounded-full">
                  <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300 font-medium">Live Application</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.highlights).map(([key, value]) => (
                    <motion.div
                      key={key}
                      className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                        <Sparkles className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.demoLink}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    className="inline-flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Click to explore this Streamlit application</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const BlogSection = () => (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing insights about data science, technology, and my learning journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                post.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                
                <motion.button
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="w-5 h-5" />
            <span>View All Posts</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );

  const UniqueSection = () => (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">My Learning Journey</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From curiosity to expertise - tracking my growth in tech
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl font-bold mb-2">15+</div>
            <div className="text-xl text-blue-100">Technologies Mastered</div>
            <div className="text-blue-200 mt-2">From Python to Cloud platforms</div>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl font-bold mb-2">5+</div>
            <div className="text-xl text-blue-100">Major Projects</div>
            <div className="text-blue-200 mt-2">Spanning multiple domains</div>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl font-bold mb-2">2</div>
            <div className="text-xl text-blue-100">Internships</div>
            <div className="text-blue-200 mt-2">Real-world experience gained</div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Fun Facts About Me</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎯</span>
                <span>Favorite IDE: VS Code with custom themes</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚀</span>
                <span>Biggest challenge: Building scalable ML pipelines</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">☕</span>
                <span>Coding fuel: Coffee + Lo-fi music</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎨</span>
                <span>Creative outlet: 3D modeling in Blender</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      setEmailStatus('sending');
      
      try {
        // Replace these with your actual EmailJS service details
        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          'YOUR_EMAILJS_PUBLIC_KEY'
        );
        
        setEmailStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setEmailStatus(''), 3000);
      } catch (error) {
        console.error('EmailJS error:', error);
        setEmailStatus('error');
        setTimeout(() => setEmailStatus(''), 3000);
      }
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Let's connect and discuss opportunities, projects, or just chat about tech!
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:vishal@example.com"
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-gray-600 dark:text-gray-300">vishal@example.com</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/vishal"
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">LinkedIn</div>
                    <div className="text-gray-600 dark:text-gray-300">Connect with me</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://github.com/vishal"
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">GitHub</div>
                    <div className="text-gray-600 dark:text-gray-300">Check out my code</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 dark:text-white resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={emailStatus === 'sending'}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      emailStatus === 'sending'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    } text-white`}
                    whileHover={emailStatus !== 'sending' ? { scale: 1.02 } : {}}
                    whileTap={emailStatus !== 'sending' ? { scale: 0.98 } : {}}
                  >
                    {emailStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </motion.button>
                  
                  {emailStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 dark:text-green-400 text-center font-medium"
                    >
                      ✅ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  
                  {emailStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 dark:text-red-400 text-center font-medium"
                    >
                      ❌ Failed to send message. Please try again.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div 
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Vishal
          </motion.div>
          <p className="text-gray-400 mb-6">
            Computer Science Student | Data Technology Enthusiast
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a 
              href="https://github.com/vishal" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/vishal" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:vishal@example.com" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              © 2024 Vishal. Built with React & Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <NavigationBar />
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <StreamlitSection />
        <BlogSection />
        <UniqueSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
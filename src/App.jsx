
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import StatsCarousel from "@/components/StatsCarousel";
import NumbersSection from "@/components/NumbersSection";
import { 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Clock,
  Award,
  Users,
  Briefcase
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Web Design", level: 85 },
  { name: "Mobile Design", level: 90 },
  { name: "Brand Design", level: 80 },
  { name: "Logo Design", level: 85 }
];

const timeline = [
  {
    year: "2023",
    title: "Senior UX Designer",
    company: "Design Studio",
    description: "Led design team in creating innovative digital experiences"
  },
  {
    year: "2021",
    title: "UI Designer",
    company: "Creative Agency",
    description: "Developed user interfaces for major brand clients"
  },
  {
    year: "2019",
    title: "Web Designer",
    company: "Tech Startup",
    description: "Created responsive websites and mobile applications"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen relative px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                I'm a freelancer
              </h1>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl md:text-5xl font-bold">Some interesting</h2>
                <h2 className="text-3xl md:text-5xl font-bold text-accent">facts</h2>
                <h2 className="text-3xl md:text-5xl font-bold">about me</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                We started as a small, subdue, called hath gve fourth. Them one over saying.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img alt="Coding workspace" className="w-full rounded-2xl" src="https://images.unsplash.com/photo-1618826293701-8430cee8ae02" />
            </div>
          </motion.div>

          {/* Numbers Section */}
          <NumbersSection />

          {/* Stats Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20"
          >
            <StatsCarousel />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 bg-secondary">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Professional Design</h3>
              <p className="text-muted-foreground">
                Creating exceptional digital experiences through professional design solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Working closely with clients to achieve the best possible outcomes.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <Briefcase className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Project Management</h3>
              <p className="text-muted-foreground">
                Ensuring projects are delivered on time and within budget.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-12">My Working Process</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="timeline-dot" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-accent mb-1">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-12">My Technical Skills</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-12">Recent Work</h2>
            <div className="gallery-grid">
              <img alt="Portfolio item 1" className="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1695480497603-381a2bee1c05" />
              <img alt="Portfolio item 2" className="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1578401057158-0e58789f5947" />
              <img alt="Portfolio item 3" className="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1495224814653-94f36c0a31ea" />
              <img alt="Portfolio item 4" className="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1657097097106-be38cad7b3e0" />
              <img alt="Portfolio item 5" className="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1591707620051-e7d406eaa546" />
              <img alt="Portfolio item 6" className="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1495224814653-94f36c0a31ea" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your project and see how I can help bring your ideas to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent mr-3" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent mr-3" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-3" />
                  <span>New York, USA</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="contact-input" />
                <input type="email" placeholder="Your Email" className="contact-input" />
                <textarea placeholder="Your Message" rows="4" className="contact-input"></textarea>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

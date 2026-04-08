import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Target, Trophy, Zap, Users, Medal } from "lucide-react";

export function ProgramsSection() {
  const fitnessPrograms = [
    {
      icon: Target,
      title: "Functional Training",
      description: "Build real-world strength and resilience that translates to everyday life. Focus on movement patterns that matter.",
      benefits: ["Multi-joint movements", "Core stability", "Injury prevention", "Daily life application"],
    },
    {
      icon: Trophy,
      title: "Strength & Power Training",
      description: "Progressive, safe overload programs designed to build muscle and increase power output systematically.",
      benefits: ["Progressive overload", "Muscle hypertrophy", "Power development", "Performance tracking"],
    },
    {
      icon: Zap,
      title: "Body Transformation Program",
      description: "Structured 12-16 week phases with clear milestones. Combines training, nutrition, and accountability.",
      benefits: ["12-16 week cycles", "Body composition tracking", "Nutrition guidance", "Regular assessments"],
    },
    {
      icon: Users,
      title: "Group Energy Sessions",
      description: "High energy, high fun group workouts that combine effective training with community motivation.",
      benefits: ["Community support", "Varied workouts", "Expert coaching", "Accountability"],
    },
    {
      icon: Medal,
      title: "Hyrox/F45 Performance Prep",
      description: "Specialized training for functional fitness competitions and performance goals.",
      benefits: ["Competition ready", "Functional fitness", "Endurance building", "Skill development"],
    },
  ];

  const groupClasses = [
    { day: "Monday", class: "Zumba", time: "7:00 PM", description: "Dance your stress away", color: "from-pink-500 to-rose-500" },
    { day: "Tuesday", class: "Stillness & Breathwork", time: "7:00 PM", description: "Reset your nervous system", color: "from-blue-500 to-cyan-500" },
    { day: "Wednesday", class: "Yoga Flow", time: "7:00 PM", description: "Strength + deep release", color: "from-purple-500 to-pink-500" },
    { day: "Thursday", class: "Morning Zumba", time: "7:30 AM", description: "Start your day energized", color: "from-orange-500 to-yellow-500" },
    { day: "Friday", class: "Gentle Yoga", time: "7:00 AM", description: "Mobility and calm", color: "from-emerald-500 to-teal-500" },
    { day: "Saturday", class: "Deep Stillness Session", time: "8:00 AM", description: "Sound healing and meditation", color: "from-indigo-500 to-purple-500" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#111827] to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Programs & Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your path to transformation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </motion.div>

        <Tabs defaultValue="fitness" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white/5 backdrop-blur-lg p-1 rounded-full">
            <TabsTrigger value="fitness" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">
              Fitness Pathways
            </TabsTrigger>
            <TabsTrigger value="classes" className="rounded-full data-[state=active]:bg-secondary data-[state=active]:text-white">
              Group Classes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fitness">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {fitnessPrograms.map((program, index) => {
                  const Icon = program.icon;
                  return (
                    <AccordionItem
                      key={program.title}
                      value={`item-${index}`}
                      className="border border-white/10 rounded-xl overflow-hidden backdrop-blur-lg bg-white/5"
                    >
                      <AccordionTrigger className="px-6 hover:no-underline hover:bg-white/5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-left">{program.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <p className="text-gray-300 mb-4">{program.description}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {program.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </motion.div>
          </TabsContent>

          <TabsContent value="classes">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {groupClasses.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-400">{schedule.day}</span>
                        <span className="text-sm font-medium text-primary">{schedule.time}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                        {schedule.class}
                      </h3>
                      <p className="text-sm text-gray-400">{schedule.description}</p>
                      <div className={`w-full h-1 mt-4 rounded-full bg-gradient-to-r ${schedule.color}`} />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg rounded-full shadow-xl"
                >
                  Reserve Your Spot - Limited Spaces
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

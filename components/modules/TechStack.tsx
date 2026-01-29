"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe2, LayoutTemplate } from "lucide-react";

const techGroups = [
  {
    title: "Development",
    icon: <Code2 className="w-5 h-5 text-white/70" />,
    items: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Nest.js",
      "Flutter",
    ],
    className: "md:col-span-2",
  },
  {
    title: "Data",
    icon: <Cpu className="w-5 h-5 text-white/70" />,
    items: ["MongoDB", "SQL", "PostgreSQL"],
    className: "md:col-span-1",
  },
  {
    title: "AI & Automation",
    icon: <Globe2 className="w-5 h-5 text-white/70" />,
    items: ["N8N", "Zapier", "Make.com", "LangChain", "Langflow"],
    className: "md:col-span-1",
  },
  {
    title: "Design & Apps",
    icon: <LayoutTemplate className="w-5 h-5 text-white/70" />,
    items: ["UI/UX", "Google Workspace Studio"],
    className: "md:col-span-2",
  },
];

export function TechStack() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl bg-white/3 border border-white/10 hover:border-white/20 transition-all ${group.className}`}
            >
              <div className="flex items-center gap-3 mb-6">
                {group.icon}
                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-4 py-1.5 rounded-full bg-white/5 border ${item === "Next.js" || item === "Flutter" || item === "Nest.js" || item === "PostgreSQL" || item === "N8N" || item === "UI/UX" ? "bg-white/15 border-white/30" : ""} border-white/5 text-sm font-medium text-white/80`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

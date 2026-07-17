import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
     id="projects"
      className="bg-[#050505] py-36 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="uppercase tracking-[0.35em] text-violet-400">
          Featured Projects
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Building Products That Matter.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          From startup innovation to AI-powered applications, these projects
          represent my passion for solving real-world problems through
          technology, collaboration, and continuous learning.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <ProjectCard
            title="VertiBot"
            status="Former Co-Founder"
            description="Co-founded VertiBot, a startup focused on developing an autonomous glass-cleaning robot for high-rise buildings. The idea aimed to improve worker safety by automating dangerous exterior cleaning operations and received support through the SSIP innovation program."
            tech={[
              "Robotics",
              "Startup",
              "Innovation",
              "SSIP",
            ]}
          />

          <ProjectCard
            title="Library Discussion Room Booking System"
            status="Nirma University"
            description="Designed and developed a web-based booking platform for the Nirma Knowledge Centre, allowing students to reserve discussion rooms efficiently while simplifying room management for the library staff."
            tech={[
              "React",
              "Node.js",
              "Express.js",
              "MySQL",
            ]}
          />

          <ProjectCard
            title="AI Chatbots & Intelligent Agents"
            status="AI Projects"
            description="Developing conversational AI systems, intelligent automation tools, and practical AI applications while exploring Large Language Models, Machine Learning, and modern AI workflows."
            tech={[
              "Python",
              "LLMs",
              "Machine Learning",
              "AI",
            ]}
          />

          <ProjectCard
            title="Personal Portfolio Website"
            status="Current"
            description="Designed and developed this portfolio using Next.js, Tailwind CSS, TypeScript, and Framer Motion to create a modern, responsive, and interactive experience that showcases my journey, projects, and achievements."
            tech={[
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
              "Framer Motion",
            ]}
          />

        </div>

      </div>
    </section>
  );
}
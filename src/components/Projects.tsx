import { ExternalLink, Github } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      name: 'AI-Based Legal Chatbot',
      description: 'Retrieval-augmented chatbot that provides context-aware legal information under Indian law using document embeddings, semantic search, and conversational memory.',
      tech: ['Mistral-7B', 'LangChain', 'FAISS', 'Python', 'Streamlit'],
      github: 'https://github.com/yourusername/ai-legal-chatbot',
    },
    {
      name: 'DeFi Lending DApp',
      description: 'Decentralized lending platform automating loan creation, funding, and repayment with secure smart contracts and a React-based user interface integrated with MetaMask.',
      tech: ['Solidity', 'Hardhat', 'React', 'Ethers.js'],
      github: 'https://github.com/yourusername/defi-lending-dapp',
    },
    {
      name: 'ClassSync – Mini Classroom ERP',
      description: 'Scalable ERP system for academic management, supporting multi-school coordination with student registration, event management, and role-based access control.',
      tech: ['React.js', 'Python', 'Flask', 'MongoDB'],
      github: 'https://github.com/yourusername/classsync-erp',
    },
    {
      name: 'Digital Well-Being Diary',
      description: 'AI-powered wellness tracking app built for a hackathon to promote mindfulness and digital balance using mood prediction and journaling analytics.',
      tech: ['React.js', 'FastAPI', 'OpenAI API', 'Firebase'],
      github: 'https://github.com/yourusername/digital-wellbeing-diary',
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>

        <p className="text-slate-500 text-sm mb-8">Selected work in AI Engineering, Machine Learning, and RAG-based intelligent systems</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-slate-200 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-3 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-slate-800/70 text-slate-300 rounded-full border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

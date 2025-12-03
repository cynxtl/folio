import { Copy } from 'lucide-react';
import GithubIcon from '../../updated_icons/Platform=Github, Color=Negative.svg';
import LinkedinIcon from '../../updated_icons/Platform=LinkedIn, Color=Negative.svg';
import HuggingFaceIcon from '../../updated_icons/huggingface-final.png';
import { useState } from 'react';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('arnavkme@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div className="flex-1 space-y-8 max-w-3xl">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-[1.1] break-words">
                Arnav Karmankar
              </h1>
              <h2 className="text-base sm:text-xl md:text-2xl text-slate-300 mb-3 break-words">
                Machine Learning Engineer — GenAI, Agentic/RAG Systems
              </h2>
              <p className="text-slate-500 text-sm">
                Pune, India
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed">
            AI Engineer passionate about building intelligent, scalable, and data-driven systems that drive real-world impact. With expertise in Machine Learning, NLP, and RAG architectures, I design and deploy end-to-end AI solutions using Python, LangChain, FAISS, and modern ML frameworks. 
            My work spans AI-powered chatbots, intelligent automation, and applied analytics, combining research-driven insight with production-grade engineering.
            </p>

            <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 justify-start sm:justify-start overflow-x-visible">
              <button
                className="px-4 sm:px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <a href="mailto:arnavkme@gmail.com" className="inline-flex items-center px-4 sm:px-5 py-2 text-sm font-medium rounded-full border border-slate-700 hover:bg-slate-800/40 transition-colors whitespace-nowrap">
                Contact
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-sm font-medium rounded-full border border-slate-700 hover:bg-slate-800/40 transition-colors whitespace-nowrap"
              >
                <Copy size={16} />
                {copied ? 'Copied!' : 'Copy email'}
              </button>
              <div className="flex items-center gap-2 ml-1 flex-nowrap">
                <a href="https://github.com/cynxtl" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-md hover:bg-slate-800/40 text-slate-300 transition-colors">
                  <img src={GithubIcon as unknown as string} alt="GitHub" className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/arnavkme" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-md hover:bg-slate-800/40 text-slate-300 transition-colors">
                  <img src={LinkedinIcon as unknown as string} alt="LinkedIn" className="h-5 w-5" />
                </a>
                <a href="https://huggingface.co/cynstl" target="_blank" rel="noopener noreferrer" aria-label="Hugging Face" className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-md hover:bg-slate-800/40 text-slate-300 transition-colors">
                  <img src={HuggingFaceIcon as unknown as string} alt="Hugging Face" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          {/* Avatar removed as per request */}
        </div>
      </div>
    </section>
  );
}

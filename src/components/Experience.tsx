import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export function Experience() {
  const jobs: Job[] = [
    {
      title: 'Machine Learning Engineer',
      company: 'Culinda Inc.',
      period: 'Jun 2023 – Present',
      location: 'Remote',
      responsibilities: [
        'Architected and deployed production-grade RAG systems and agentic chatbots serving 10K+ users, reducing query response time by 40%',
        'Built advanced GenAI applications using LlamaIndex, LangChain, and custom retrieval pipelines with vector databases (Weaviate, Qdrant)',
        'Mentored junior ML engineers and conducted code reviews, establishing best practices for ML system design and deployment',
        'Implemented MLOps workflows with Docker, LangFuse for observability, and FastAPI for high-performance model serving',
        'Developed security-focused ML solutions for threat detection and anomaly identification in distributed systems',
        'Optimized model inference pipelines, achieving 3x throughput improvement through quantization and batching strategies',
      ],
    },
    {
      title: 'ML Research Intern',
      company: 'AI Research Lab',
      period: 'Jan 2023 – May 2023',
      location: 'Remote',
      responsibilities: [
        'Conducted research on novel attention mechanisms for Vision Transformers, achieving 12% improvement in ImageNet accuracy',
        'Implemented and benchmarked state-of-the-art NLP models for low-resource language understanding',
        'Published findings in internal research reports and presented at team symposiums',
        'Collaborated with cross-functional teams to integrate research prototypes into production systems',
      ],
    },
    {
      title: 'Data Science Engineer',
      company: 'Tech Startup',
      period: 'Jun 2022 – Dec 2022',
      location: 'Pune, India',
      responsibilities: [
        'Built end-to-end ML pipelines for customer segmentation and churn prediction using Python and Scikit-learn',
        'Developed interactive dashboards with Plotly Dash for real-time business intelligence',
        'Automated data preprocessing workflows, reducing manual effort by 60%',
        'Deployed models to production using Flask APIs and monitored performance with custom logging solutions',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Experience
        </h2>

        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                  <span>{job.location}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-slate-600 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

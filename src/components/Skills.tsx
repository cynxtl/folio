interface SkillCategory {
  title: string;
  skills: string[];
}

export function Skills() {
  const categories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL'],
    },
    {
      title: 'Core',
      skills: [
        'Generative AI',
        'Machine Learning',
        'Deep Learning',
        'OS',
        'DBMS',
      ],
    },
    {
      title: 'Frameworks',
      skills: ['FastAPI', 'Flask', 'Django'],
    },
    {
      title: 'Python / ML',
      skills: [
        'PyTorch',
        'NumPy',
        'Pandas',
        'LlamaIndex',
        'Hugging Face',
        'LangChain',
      ],
    },
    {
      title: 'Web & Development Tools',
      skills: ['Streamlit', 'Gradio', 'GitHub', 'GitLab', 'Jira', 'Dash'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Supabase', 'PostgreSQL'],
    },
    {
      title: 'Infrastructure & MLOps',
      skills: ['Docker', 'LangFuse', 'Weaviate', 'Qdrant', 'MLflow', 'Kubernetes'],
    },
    {
      title: 'Data Viz',
      skills: ['Plotly', 'Dash'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs bg-slate-900 text-slate-300 rounded-full border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

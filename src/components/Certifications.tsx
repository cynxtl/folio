interface Certification {
  name: string;
  issuer?: string;
  date?: string;
  detail?: string; // optional extra text like certificate ID or note
}

export function Certifications() {
  const certifications: Certification[] = [
    {
      name: 'IBM Machine Learning Professional Certificate',
      issuer: 'IBM',
      date: '2025',
    },
    {
      name: 'Kaggle Expert',
      issuer: 'Kaggle',
      date: '2025',
    },
    {
      name: 'IBM AI Engineering Specialization',
      issuer: 'IBM',
      date: '2025',
    },
    {
      name: 'Agile Development Specialization',
      issuer: 'University of Virginia',
      date: '2025',
    },
  ];

  return (
    <section id="certifications" className="min-h-screen px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10">Certifications</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <li key={index} className="rounded-md border border-slate-800 p-4 hover:bg-slate-900/40 transition-colors">
              <div className="text-sm font-medium text-white break-words">{cert.name}</div>
              <div className="text-xs text-slate-400 break-words">{cert.issuer || '—'}</div>
              {(cert.date || cert.detail) && (
                <div className="text-xs text-slate-500 mt-1 break-words">
                  {cert.date}
                  {cert.date && cert.detail ? ' · ' : ''}
                  {cert.detail}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

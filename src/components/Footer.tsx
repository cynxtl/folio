import GithubIcon from '../../updated_icons/Platform=Github, Color=Negative.svg';
import LinkedinIcon from '../../updated_icons/Platform=LinkedIn, Color=Negative.svg';
import HuggingFaceIcon from '../../updated_icons/huggingface-final.png';

export function Footer() {
  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/cynxtl', label: 'GitHub', isImage: true },
    { icon: LinkedinIcon, href: 'https://linkedin.com/in/cynstl', label: 'LinkedIn', isImage: true },
    { icon: HuggingFaceIcon, href: 'https://huggingface.co/cynstl', label: 'Hugging Face', isImage: true },
  ];

  return (
    <footer className="border-t border-slate-800/50 px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-xs">
            © 2025 Arnav Karmankar
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label, isImage }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {isImage ? (
                  <img src={Icon as unknown as string} alt={label} className="h-4 w-4" />
                ) : (
                  <Icon size={16} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import GithubIcon from '../../updated_icons/Platform=Github, Color=Negative.svg';
import LinkedinIcon from '../../updated_icons/Platform=LinkedIn, Color=Negative.svg';
import HuggingFaceIcon from '../../updated_icons/huggingface-color.svg';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['Projects', 'Skills', 'Certifications'];

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/cynxtl', label: 'GitHub', isImage: true },
    { icon: LinkedinIcon, href: 'https://linkedin.com/in/cynstl', label: 'LinkedIn', isImage: true },
    { icon: HuggingFaceIcon, href: 'https://huggingface.co/cynstl', label: 'Hugging Face', isImage: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-black/50 border-b border-slate-800/50">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-semibold text-white hover:text-slate-300 transition-colors"
          >
            Arnav
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
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
                  <Icon size={18} />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

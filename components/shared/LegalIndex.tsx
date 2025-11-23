'use client';

import { FileText } from 'lucide-react';

interface LegalSection {
  id: string;
  title: string;
}

interface LegalIndexProps {
  sections: LegalSection[];
}

export default function LegalIndex({ sections }: LegalIndexProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-blue-600/10 border-l-4 border-blue-600 p-6 rounded-lg mb-8 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-blue-600" />
        <h3 className="text-xl font-semibold text-white">
          Índice de Contenidos
        </h3>
      </div>
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="block w-full text-left text-blue-400 hover:text-blue-300 hover:translate-x-2 transition-all duration-200 py-2 px-3 rounded hover:bg-blue-600/10"
          >
            <span className="font-semibold">{index + 1}.</span> {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}

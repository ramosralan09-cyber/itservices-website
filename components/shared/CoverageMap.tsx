'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const CoverageMapContent = dynamic(
  () => import('./CoverageMapContent'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600/20 bg-slate flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Cargando mapa...</p>
        </div>
      </div>
    )
  }
);

export default function CoverageMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600/20 bg-slate flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return <CoverageMapContent />;
}

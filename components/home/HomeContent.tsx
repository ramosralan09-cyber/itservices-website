'use client';

import { Hero } from '@/components/home/Hero';
import { CategoryTabs } from '@/components/home/CategoryTabs';
import { ScrollColorBackground } from '@/components/shared/ScrollColorBackground';
import { SummerPromoModal } from '@/components/home/SummerPromoModal';

export function HomeContent() {
  const colorSections = [
    { offset: 0, color: '#050505' },      // Pure black - Hero top
    { offset: 0.12, color: '#0a0a12' },   // Very dark - Hero middle
    { offset: 0.25, color: '#0f1419' },   // Dark navy - Hero bottom
    { offset: 0.40, color: '#0f172a' },   // Slate navy - CategoryTabs start
    { offset: 0.70, color: '#1e293b' },   // Medium navy - CategoryTabs end
    { offset: 1, color: '#0f172a' },      // Slate navy - End
  ];

  return (
    <>
      <SummerPromoModal />
      <ScrollColorBackground sections={colorSections}>
        <div className="relative">
          <Hero />
          <CategoryTabs />
        </div>
      </ScrollColorBackground>
    </>
  );
}

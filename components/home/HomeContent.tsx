'use client';

import { Hero } from '@/components/home/Hero';
import { CategoryTabs } from '@/components/home/CategoryTabs';
import { ScrollColorBackground } from '@/components/shared/ScrollColorBackground';
import { SummerPromoModal } from '@/components/home/SummerPromoModal';
import { StatsSection } from '@/components/sections/StatsSection';
import { LogoCloud } from '@/components/ui/logo-cloud';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';

export function HomeContent() {
  const colorSections = [
    { offset: 0,    color: '#050505' },
    { offset: 0.12, color: '#0a0a12' },
    { offset: 0.25, color: '#0f1419' },
    { offset: 0.40, color: '#0f172a' },
    { offset: 0.70, color: '#1e293b' },
    { offset: 1,    color: '#0f172a' },
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
      <StatsSection />
      <LogoCloud />
      <ProcessTimeline />
    </>
  );
}

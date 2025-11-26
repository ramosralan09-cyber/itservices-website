import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { portfolioProjects } from '@/data/portfolio';
import { ProjectDetail } from '@/components/portfolio/ProjectDetail';

const BASE_URL = 'https://itservicespr.com';

type ProjectDetailPageProps = {
  params: { slug: string };
};

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = portfolioProjects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.category?.some((cat: string) => project.category?.includes(cat)),
    )
    .slice(0, 3);

  return <ProjectDetail project={project} relatedProjects={relatedProjects} />;
}

// --- Static params for SSG ---
export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

// --- SEO metadata por proyecto ---
export function generateMetadata({
  params,
}: ProjectDetailPageProps): Metadata {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado | IT Services & Security',
      description:
        'El proyecto que estás buscando no se encuentra disponible en nuestro portafolio.',
    };
  }

  const url = `${BASE_URL}/portafolio/${project.slug}`;

  // Intentar usar la primera imagen del proyecto para Open Graph
  const ogImage =
    Array.isArray(project.images) && project.images.length > 0
      ? project.images[0]
      : '/images/og-image.jpg';

  // Usamos las categorías como keywords SEO
  const keywords = project.category as string[] | undefined;

  const title = `${project.client} – ${project.title} | Portafolio IT Services & Security`;
  const description =
    project.summary ||
    `Proyecto de ${project.category?.join(', ')} realizado para ${project.client} en Puerto Rico por IT Services & Security.`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.client} – ${project.title}`,
      description,
      url,
      siteName: 'IT Services & Security',
      locale: 'es_PR',
      type: 'article',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

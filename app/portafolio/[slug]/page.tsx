import { notFound } from 'next/navigation'
import { portfolioProjects } from '@/data/portfolio'
import { ProjectDetail } from '@/components/portfolio/ProjectDetail'

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = portfolioProjects
    .filter(p =>
      p.slug !== project.slug &&
      p.category.some(cat => project.category.includes(cat))
    )
    .slice(0, 3)

  return <ProjectDetail project={project} relatedProjects={relatedProjects} />
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find(p => p.slug === params.slug)

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: `${project.client} - ${project.title} | Portfolio ITSS`,
    description: project.summary,
    openGraph: {
      title: `${project.client} - ${project.title}`,
      description: project.summary,
      images: [project.images[0]],
    },
  }
}

import { registry, getComponentBySlug } from "@/lib/registry"
import { notFound } from "next/navigation"
import { ComponentPageClient } from "./client"

export function generateStaticParams() {
  return registry.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to use a sync approach for metadata
  return params.then(({ slug }) => {
    const component = getComponentBySlug(slug)
    return {
      title: component ? `${component.name} — Triangle` : "Component — Triangle",
    }
  })
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const component = getComponentBySlug(slug)
  if (!component) notFound()

  return <ComponentPageClient component={component} />
}

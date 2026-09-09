import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CauseView from '@/components/pages/CauseView'
import { focusAreas, type FocusKey } from '@/data'
import { translations } from '@/i18n/translations'

const keys = focusAreas.map((f) => f.key)

const isCause = (v: string): v is FocusKey => (keys as string[]).includes(v)

export function generateStaticParams() {
  return keys.map((cause) => ({ cause }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cause: string }>
}): Promise<Metadata> {
  const { cause } = await params
  if (!isCause(cause)) return {}
  const item = translations.en.focus.items[cause]
  return {
    title: item.title,
    description: item.desc,
    alternates: { canonical: `/what-we-do/${cause}` },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ cause: string }>
}) {
  const { cause } = await params
  if (!isCause(cause)) notFound()
  return <CauseView cause={cause} />
}

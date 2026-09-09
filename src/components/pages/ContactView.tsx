'use client'

import Contact from '@/components/Contact'
import PageHero from '@/components/PageHero'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function ContactView() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero title={t.pages.contact.title} subtitle={t.pages.contact.subtitle} />
      <Contact />
    </>
  )
}

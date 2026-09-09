'use client'

import Image from 'next/image'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import { gallery } from '@/content'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function GalleryView() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero title={t.pages.gallery.title} subtitle={t.pages.gallery.subtitle} />
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-light"
            >
              {/* Icon shows behind the image */}
              <Icon name={g.cause} className="absolute h-12 w-12 text-white/40" />
              <Image
                src={`/gallery/gallery-${i + 1}.jpg`}
                alt={g.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="relative object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}

import { raleway } from '@/app/fonts'
import MainPage from '@/components/welcomePage/Main'
import FeaturesPage from '@/components/welcomePage/Features'
import PlayPage from '@/components/welcomePage/Play'
import MarqueeSeason from '@/components/welcomePage/components/marquee/MarqueeSeason'
import News from '@/components/dashboard/news/News'
import EventsPage from '@/components/welcomePage/Events'

export default function Home() {
  return (
    <main
      className={`${raleway.className} mx-auto mt-24 mb-12 flex max-w-[95rem] flex-col gap-10 px-4 pt-12 xl:mt-0 dark:text-neutral-200/70`}
    >
      <MainPage />
      <MarqueeSeason />
      <FeaturesPage />
      <EventsPage />
      <PlayPage />
      <div className="hidden flex-col gap-10 lg:flex">
        <News title />
      </div>
    </main>
  )
}

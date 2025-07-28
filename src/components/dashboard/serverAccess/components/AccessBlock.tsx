import BlockAdaptive from '@/components/ui/block/Block'
import CopyIPButton from './CopyIP'

export default function AccessBlock() {
  return (
    <BlockAdaptive
      className="flex flex-col gap-3 p-6 font-semibold lg:p-8"
      heading="Доступ на сервер"
      icon="lucide:gamepad-2"
    >
      <p>У вас есть доступ на сервер</p>
      <p className="font-medium dark:text-neutral-300/95">
        Вы приобрели доступ на сервер. Чтобы подключиться скопируйте IP ниже.
      </p>
      <CopyIPButton />
    </BlockAdaptive>
  )
}

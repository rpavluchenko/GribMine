import { unbounded } from '@/app/fonts'

export default function RegisterHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1
        className={`${unbounded.className} text-4xl font-semibold text-neutral-900 md:text-5xl dark:text-neutral-100`}
      >
        Регистрация
      </h1>
      <p className="text-md max-w-2xl text-center font-semibold text-neutral-600 opacity-80 md:text-lg dark:text-neutral-300">
        Для того чтобы продолжить, вам необходимо зарегистрироваться.
      </p>
    </div>
  )
}

import Link from 'next/link'

export default function AgreementCheckbox({
  isAgree,
  onChange,
}: {
  isAgree: boolean
  onChange: () => void
}) {
  return (
    <div className="flex items-center gap-3">
      <input
        checked={isAgree}
        className="cursor-pointer rounded-md border-2 border-emerald-500 text-emerald-500"
        id="link-checkbox"
        onChange={onChange}
        type="checkbox"
      />
      <p className="font-semibold text-neutral-700 dark:text-neutral-400">
        Согласен с{' '}
        <Link
          className="text-neutral-700 underline transition-colors duration-300 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-200"
          href="https://grib.gitbook.io/grib_wiki/polzovatelskoe-soglashenie"
        >
          пользовательским соглашением
        </Link>
      </p>
    </div>
  )
}

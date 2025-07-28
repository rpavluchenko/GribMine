import { motion } from 'motion/react'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPaginationButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <motion.button
          animate={{ opacity: 1 }}
          aria-label={`Page ${i}`}
          className={`cursor-pointer rounded-2xl border-2 border-emerald-200/45 px-4 py-2 transition-colors duration-300 ${
            i === currentPage
              ? 'bg-emerald-100/25'
              : 'bg-transparent text-neutral-700 hover:bg-emerald-200/45'
          }`}
          initial={{ opacity: 0 }}
          key={i}
          onClick={() => onPageChange(i)}
        >
          <p className={`text-md font-semibold text-black dark:text-white`}>
            {i}
          </p>
        </motion.button>
      )
    }
    return buttons
  }

  return (
    <div className="flex justify-center gap-3">{getPaginationButtons()}</div>
  )
}

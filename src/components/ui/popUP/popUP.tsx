import { useRef, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'

import useClickOutside from '@/hooks/useClickOutside'
import ButtonAdaptive from '@/components/ui/button/Button'
import { raleway } from '@/app/fonts'
import BlockAdaptive from '@/components/ui/block/Block'

interface PopUpProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  extraAction?: React.ReactNode
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.15 } },
}

const PopUp: React.FC<PopUpProps> = ({
  isOpen,
  onClose,
  children,
  extraAction,
}) => {
  const popUpRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(popUpRef, onClose)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate="visible"
          aria-modal="true"
          className="fixed inset-0 z-[4] flex items-center justify-center bg-black/50 px-6 backdrop-blur-sm"
          exit="exit"
          initial="hidden"
          role="dialog"
          variants={backdropVariants}
        >
          <motion.div
            animate="visible"
            className="w-full max-w-xl"
            exit="exit"
            initial="hidden"
            ref={popUpRef}
            variants={modalVariants}
          >
            <BlockAdaptive className="grid rounded-2xl bg-neutral-100 p-8 shadow-lg dark:bg-neutral-950">
              {children}
              <div className="mt-6 grid w-full justify-center gap-4 md:flex">
                {extraAction}
                <ButtonAdaptive
                  className="flex items-center gap-3 px-6 py-2 hover:scale-103 active:scale-97"
                  onClick={onClose}
                >
                  <Icon className="text-xl" icon="lucide:x" />
                  <p className={`${raleway.className} font-semibold`}>
                    Закрыть
                  </p>
                </ButtonAdaptive>
              </div>
            </BlockAdaptive>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopUp

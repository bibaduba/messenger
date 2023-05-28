'use client'

import useConversation from '@/app/hooks/useConversation'
import useRoutes from '@/app/hooks/useRoutes'
import MobileItem from './MobileItem'

const MobileFooter = () => {
  const routes = useRoutes()
  const { isOpen } = useConversation()

  if (isOpen) {
    return null
  }

  return (
    <div
      className='
      fixed
      justify-between
      w-full
      bottom-0
      z-40
      flex
      flex-center
      bg-white
      border-t-[1px]
      lg:hidden
    '
    >
      {routes.map(({ href, icon, label, active, onClick }) => (
        <MobileItem
          key={label}
          href={href}
          label={label}
          icon={icon}
          active={active}
          onClick={onClick}
        />
      ))}
    </div>
  )
}

export default MobileFooter

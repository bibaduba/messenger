'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

interface MobileItemProps {
  label: string
  icon: any
  href: string
  active?: boolean
  onClick?: () => void
}

const MobileItem: FC<MobileItemProps> = ({
  href,
  icon: Icon,
  label,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick()
    }
  }
  return (
    <Link
      href={href}
      className={clsx(
        `
        group
        flex
        gap-x-3
        text-sm
        leading-6
        font-semibold
        w-full
        justify-center
        p-4
        text-gray-500
        hover:text-black
        hover:bg-gray-100
      `,
        active && 'bg-gray-100 text-black'
      )}
      onClick={onClick}
    >
      <Icon className='h-6 w-6' />
    </Link>
  )
}

export default MobileItem

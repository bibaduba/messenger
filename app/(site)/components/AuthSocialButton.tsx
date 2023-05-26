import { IconType } from 'react-icons'
import { FC } from 'react'

interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void
}

const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='inline-flex w-full justify-center rounded-md px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset hover:bg-gray-300 focus:outline-offset-0'
    >
      <Icon />
    </button>
  )
}

export default AuthSocialButton

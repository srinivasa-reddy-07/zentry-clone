import React from 'react'

const Button = ({ title, id, leftIcon, rightIcon, containerClass }) => {
  return (
    <button id={id} className={`group relative z-10 w-fit rounded-full overflow-hidden cursor-pointer bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <span className='relative inline-flex overflow-hidden text-xs uppercase font-general'>
        {title}
      </span>
      {rightIcon}
    </button>
  )
}

export default Button;
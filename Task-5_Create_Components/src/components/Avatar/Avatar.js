import React from 'react'

const Avatar = ({ appearance, size, src }) => {
  return (
    <>
      <div>
        <img className={appearance + ' ' + size} src={src} alt='' />
      </div>
    </>
  )
}

export default Avatar

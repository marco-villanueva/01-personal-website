import React from 'react'

export const Stat = ({bigText, smallText}) => {
  return (
    <div className='c-stat'>
      <div className='c-stat__big-text'>{bigText}</div>
      <div className='c-stat__small-text'>{smallText}</div>
    </div>
  )
}

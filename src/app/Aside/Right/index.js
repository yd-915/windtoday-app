import React from 'react'
import classnames from 'classnames'
import FacetsRight from '../../Facets/Right'

import './style.scss'

const theme = 'Aside AsideRight fl w-25-l w-95 vh-100 bg-white overflow-x-hidden overflow-y-scroll z-4 fixed'

function AsideRight (props) {
  const { get } = props

  const style = classnames(theme, {
    'AsideRight__collapse': !get('asideRightOpen')
  })

  return (
    <aside data-app='aside-right' className={style}>
      <FacetsRight />
    </aside>
  )
}

export default AsideRight
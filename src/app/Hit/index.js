import React from 'react'

import './style.scss'

function price (item) {
  const price = item.price ? `${item.price}€` : 'N/A'
  return (
    <dl className='mt0 f5 f4-ns'>
      <dt className='clip'>Price</dt>
      <dd className='ml0 f4'>{price}</dd>
    </dl>
  )
}

function image (item) {
  const imageURL = `/assets/img/provider/${item.provider}.jpg`
  return (
    <div className='dtc w3 v-mid'>
      <img src={imageURL} className='db w-80 w-100-ns br3' />
    </div>
  )
}

function date (item) {
  const locale = navigator.language

  const opts = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }

  const timestamp = item.updatedAt || item.createdAt
  return (new Date(timestamp)).toLocaleString(locale, opts)
}

function Hit ({item, toggle, get}) {
  return (
    <article data-app='hit'>
      <a className='link dt w-100 bb b--near-white pv3 blue' href={item.shortenUrl} target='_blank'>

        {image(item)}

        <div className='dtc v-top pl3-ns pl1'>
          <p className='f6 f5-ns fw6 lh-title dark-blue mv0 hover-blue' dangerouslySetInnerHTML={{
            __html: item._highlightResult.title.value
          }} />
          <p className='f6 fw4 mt2 mb0 black-60' >
            {date(item)}
          </p>
        </div>

        <div className='dtc v-top pl3 tr'>
          {price(item)}
        </div>
      </a>
    </article>
  )
}

export default Hit

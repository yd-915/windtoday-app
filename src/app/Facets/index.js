import React from 'react'
import {RefinementList} from 'react-instantsearch'
import './style.scss'

const SideBarSection = ({title, items}) =>
  <section className='pa3 pa4-ns'>
    <div className='f6 fw6 ttu tracked pb2 bb b--black-10 black-70'>{title}</div>
    {items.map(i => i)}
  </section>

function Facets ({children}) {
  return (
    <aside className='fl w-100 w-25-l mt5' >
      <div>
        <SideBarSection
          title='category'
          items={[
            <RefinementList
              attributeName='category'
              key='category'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='provider'
          items={[
            <RefinementList
              attributeName='provider'
              key='provider'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='type'
          items={[
            <RefinementList
              attributeName='type'
              key='type'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='brand'
          items={[
            <RefinementList
              attributeName='brand'
              key='brand'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='model'
          items={[
            <RefinementList
              attributeName='model'
              key='model'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='size'
          items={[
            <RefinementList
              attributeName='size'
              key='size'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='litres'
          items={[
            <RefinementList
              attributeName='litres'
              key='litres'
              operator='or'
              limitMin={10}
            />
          ]}
        />
      </div>
    </aside>
  )
}

export default Facets
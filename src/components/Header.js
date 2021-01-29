import React, { useState, useEffect } from 'react'
import { store } from '../store'

// заголовк страницы со статистикой данных
const Header = () => {
  const [data, setData] = useState(store.initialState)

  useEffect(() => {
    store.subscribe(setData)
    store.init()
  }, [])

  return (
    <div className='ChildSection_cardBlock_wrap'>
      <div className='ChildSection_cardBlock'>
        <div className='ChildSection_card'>
          <div className={`ChildSection_card_block`}>
            <span>Колличество кружков</span>
            <span>{data.length}</span>
            <span />
          </div>
          <div className={`ChildSection_card_block`}>
            <span>Колличество бесплатных кружков</span>
            <span>
              {data.filter((i) => i['payment-type'] === 'бесплатные').length}
            </span>
            <span />
          </div>
          <div className={`ChildSection_card_block`}>
            <span>Колличество платных кружков</span>
            <span>
              {data.filter((i) => i['payment-type'] === 'платные').length}
            </span>
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)

import React, { useLayoutEffect, useMemo, useState } from 'react'
import 'chartjs-plugin-piechart-outlabels'

import { store } from '../store'

import Filters from './Filters'
import Header from './Header'
import Bar from './Bar'
import Doughnut from './Doughnut'
import Table from '../common/Table/Table'

import '../common/Filters/Filters.css'
import './Main.css'
import 'antd/dist/antd.css'

// главная компонента Кружки и секции
const Main = () => {
  const [data, setData] = useState(store.initialState) //данные с сервера для отрисовки компонентов страницы
  const [filtered, setFiltered] = useState() //фильтрованные данные для отрисовки

  //загрузка данных по потоку
  useLayoutEffect(() => {
    const url =
      'https://sc.smartalmaty.kz/sc-children-activities/api/activities'
    store.subscribe(setData)
    store.init(url)

    return () => store.unsubscribe()
  }, [])

  // компонента фильтров
  const filtersco = useMemo(() => {
    return <Filters data={data} setFiltered={setFiltered} />
  }, [data, setFiltered])

  // компонента заголовки по статистике
  const headerco = useMemo(() => {
    return <Header data={filtered ? filtered : data} />
  }, [data, filtered])

  // компонента bar chart
  const barco = useMemo(() => {
    return <Bar data={filtered ? filtered : data} />
  }, [data, filtered])

  // компонента doughnut chart
  const doughnutco = useMemo(() => {
    return <Doughnut data={filtered ? filtered : data} />
  }, [data, filtered])

  // компонента таблицы
  const tableco = useMemo(() => {
    return (
      <div className='ChildSection_RoundCHartBlock table_style'>
        <Table data={filtered ? filtered : data} />
      </div>
    )
  }, [filtered, data])

  return (
    <div className='ChildSection_main'>
      <div className='ChildSection_wrapper'>
        <div className='ChildSection_title_wrap'>
          <span className='ChildSection_title'>Кружки и секции</span>
        </div>
        {filtersco}
        {headerco}
        <div className='ChildSection_block'>
          <div className='ChildSection_RoundCHartBlock_wrap'>
            {barco}
            {doughnutco}
            {tableco}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Main)

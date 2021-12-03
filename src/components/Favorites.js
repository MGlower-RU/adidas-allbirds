import { useState } from 'react'

import TreeRunner from '../img/tree_runner.png'
import WoolRunner from '../img/wool_runner.png'
import WoolRunnerMizzle from '../img/wool_runner_mizzle.png'
import Cloud from '../img/cloud.svg'
import Leaf from '../img/leaf.svg'
import Rain from '../img/rain.svg'

import '../styles/favorites.scss'

export default function Favorites() {
  const [currCategory, setCurrCategory] = useState('everyday');

  const arrayOfItems = [
    {
      category: 'everyday',
      items: [
        {
          img: WoolRunner,
          name: 'wool runner',
          feature: 'cozy sneaker',
          svg: Cloud
        },
        {
          img: TreeRunner,
          name: 'tree runner',
          feature: 'light and breezy sneaker',
          svg: Leaf
        },
        {
          img: WoolRunnerMizzle,
          name: 'wool runner mizzle',
          feature: 'rain-ready sneaker',
          svg: Rain
        },
      ]
    },
    {
      category: 'running',
      items: [
        {
          img: TreeRunner,
          name: 'tree runner',
          feature: 'light and breezy sneaker',
          svg: Leaf
        },
        {
          img: WoolRunner,
          name: 'wool runner',
          feature: 'cozy sneaker',
          svg: Cloud
        },
        {
          img: WoolRunnerMizzle,
          name: 'wool runner mizzle',
          feature: 'rain-ready sneaker',
          svg: Rain
        },
      ]
    },
    {
      category: 'travel',
      items: [
        {
          img: WoolRunnerMizzle,
          name: 'wool runner mizzle',
          feature: 'rain-ready sneaker',
          svg: Rain
        },
        {
          img: TreeRunner,
          name: 'tree runner',
          feature: 'light and breezy sneaker',
          svg: Leaf
        },
        {
          img: WoolRunner,
          name: 'wool runner',
          feature: 'cozy sneaker',
          svg: Cloud
        },
      ]
    },
  ]

  return (
    <div className='favorites'>
      <h2>Our Favorites</h2>
      <div className="favorites__tabs__wrapper">
        <div className="favorites__tabs">
          {
            arrayOfItems.map(({category}) => {
              return (
                <div
                  key={category}
                  className={`favorites__tab${currCategory === category ? ' active' : ''}`}
                  onClick={() => setCurrCategory(category.toLowerCase())}
                >
                  {category}
                </div>
              )
            })
          }
        </div>
        <div className="favorites__items">
          {
            arrayOfItems
            .find(el => el.category === currCategory).items
            .map((el, i) => {
              return (
                <div
                  className="favorites__item"
                  key={i}
                >
                  <div
                    style={{backgroundImage: `url(${el.img})`}}
                    className="favorites__item__main"
                  >
                    <a
                      href="/"
                      className='big-button'
                    >
                      shop men
                    </a>
                    <a
                      href="/"
                      className='big-button'
                    >
                      shop women
                    </a>
                  </div>
                  <div className="favorites__item__text">
                    <div className="favorites__item__name">
                      {el.name}
                    </div>
                    <div className="favorites__item__feature">
                      <div className="favorites__item__feature__img">
                        <img src={el.svg} alt="" />
                      </div>
                      <div className="favorites__item__feature__text">
                        {el.feature}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
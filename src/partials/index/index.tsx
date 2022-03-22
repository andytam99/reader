import React, { Component } from 'react'
import ThemeToggle from '../../components/toggle/theme'

interface Props {
  index: { name: string, link: string }[]
}

export default class Index extends Component<Props> {
  render() {
    return (
      <>
        <div className='flex flex-col items-start justify-start w-full'>
          <h3 className='text-4xl sm:text-3xl text-white font-bold py-0 my-0'>
            Índice
          </h3>

          <ul className='w-full'>
            {this.props.index.map(i => {
              return <li className='w-full text-2xl sm:text-base text-white p-2 hover:bg-white/10 transition-all rounded-lg'>
                <a href={`#${i.name.split(' ', 1)[0]}`}>
                  {i.name}
                </a>
              </li>
            })}
          </ul>
        </div>
        <div className='flex items-start justify-start w-full'>
          <ThemeToggle name="theme" />
        </div>
      </>
    )
  }
}

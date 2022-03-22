import React, { Component } from 'react'
import ThemeToggle from '../../components/toggle/theme'

interface Props {
  index: { name: string }[]
}

export default class Index extends Component<Props> {

  componentDidMount() {
    this.anchorheadings()
  }

  anchorheadings() {
    const headings = document.querySelectorAll('article > h3');
    const { index } = this.props;
    headings.forEach((i, x) => {
      if (i.textContent && RegExp(index[x].name).test(i.textContent)) {
        i.id = index[x].name.replaceAll(' ', '-')
      }
    })
  }

  render() {
    return (
      <>
        <div className='flex flex-col items-start justify-start w-full h-5/6'>
          <h3 style={{ margin: 'unset', padding: 'unset' }} className='text-4xl sm:text-3xl text-white font-bold'>
            Índice
          </h3>

          <ul className='w-full py-4 overflow-auto'>
            {this.props.index.map((i,x) => {
              return <li key={x} className='w-full text-2xl sm:text-base text-white p-2 hover:bg-white/10 transition-all rounded-lg'>
                <a href={`#${i.name.replaceAll(' ', '-')}`}>
                  {i.name}
                </a>
              </li>
            })}
          </ul>
        </div>
        <div className='flex items-start justify-start w-full h-auto'>
          <ThemeToggle name="theme" />
        </div>
      </>
    )
  }
}

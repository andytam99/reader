import React, { Component } from 'react'
import Index from '../index';

export interface Props {
    title: string;
    subtitle: string;
    description: string;
    index: { name: string, link: string }[]
}

export default class MainHeader extends Component<Props> {
    render() {
        const { title, subtitle, description, index } = this.props;
        return (
            <div className="flex flex-col-reverse md:flex-row h-auto md:h-screen min-h-screen" >

                <div className='w-full md:w-2/6 min-h-screen h-auto md:p-8'>

                    <div className='flex flex-col items-center justify-between w-full min-h-screen sm:min-h-full h-full shadow-md bg-indigo-500/75 md:rounded-xl p-8 '>

                        <Index index={index} />

                    </div>


                </div>

                <div className='flex flex-col items-end justify-between w-full md:w-2/3 min-h-screen sm:min-h-full h-auto p-8 text-center md:text-right'>

                    <div className='flex flex-col items-end justify-start w-full'>
                        <h4 className='w-full text-5xl sm:text-7xl text-indigo-500/75 font-bold mb-2'>{subtitle}</h4>
                        <h3 className='w-full text-3xl sm:text-5xl text-neutral-500 dark:text-white font-medium'>{title}</h3>
                    </div>


                    <div className='flex flex-col items-end justify-end w-full md:w-1/2'>
                        <span className='w-full text-2xl text-neutral-500 font-semibold dark:text-white'>Sobre el Texto</span>
                        <small className='w-full text-base sm:text-lg text-neutral-600 dark:text-white/80 font-light'>{description}</small>
                    </div>

                </div>
            </div>
        )
    }
}

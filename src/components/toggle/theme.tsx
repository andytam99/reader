import React, { Component, ReactElement } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

interface Props {
    name: string;
}

interface State {
    icon: JSX.Element;
}

export default class ThemeToggle extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            icon: <></>
        }
    }

    componentDidMount() {
        this.theme()
    }

    theme = () => {
        if (localStorage.theme !== 'dark') {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
            this.setState({ icon: <SunIcon className='fill-indigo-500' /> })
        } else {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
            this.setState({ icon: <MoonIcon className='fill-indigo-400' /> })
        }
    }

    render() {
        return (
            <div onClick={() => this.theme()} className='relative w-12 h-12 rounded-full p-2 bg-neutral-50 dark:bg-neutral-600 '>
                {this.state.icon}
            </div>
        )
    }
}

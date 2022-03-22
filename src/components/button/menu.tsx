import React, { Component } from 'react'

import anime from 'animejs'

import { MenuIcon, XIcon } from '@heroicons/react/solid'
import Index from '../../partials/index';

interface Props {
    index: { name: string }[]
}

interface State {
    state: boolean;
    open: boolean;
}

export default class MenuButton extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            state: false,
            open: false
        }
    }

    componentDidMount() {
        this.scroller()
        this.showup()
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (prevState.state !== this.state.state) {
            this.showup()
        }
    }

    showup() {
        const animation = anime({
            targets: '#menuButton',
            translateX: [200, 0],
            easing: 'easeInOutQuad',
            duration: 200,
            delay: 0
        })
        const { state } = this.state;
        let open: boolean;
        state ? animation.play() : animation.pause();
        if (!state) {
            open = state;
            this.setState({ open })
        }
    }

    scroller() {
        const article = document.querySelector('article'),
            button = document.getElementById('menuButton');
        if (!article || !button) return;

        window.addEventListener('scroll', () => {
            const { scrollY } = window,
                { offsetTop } = article;
            let state = scrollY > offsetTop;
            this.setState({ state })
        })

    }

    open() {
        const open = this.state.open ? false : true;
        const animation = anime({
            targets: '#menuModal',
            translateX: open ? [600, 0] : [0, 600],
            easing: 'easeInOutQuad',
            delay: 0,
            duration: 200
        });
        if (open) {
            this.setState({ open }, () => {
                animation
            })
        } else {
            animation
            setTimeout(() => {
                this.setState({ open })
            }, 300);
        }
    }

    render() {
        return (
            <>
                <div id='menuModal' style={{ display: this.state.open ? 'block' : 'none' }} className='fixed top-0 right-0 w-full md:w-2/6 h-full p-4 will-change-transform'>
                    <div className='flex flex-col items-center justify-between w-full h-full bg-indigo-400 dark:bg-indigo-500 rounded-2xl p-8'>
                        <Index index={this.props.index} />
                    </div>
                </div>
                <button onClick={() => this.open()} id="menuButton" className='fixed top-8 right-8 w-14 h-14 p-4 rounded-full bg-indigo-400 dark:bg-indigo-500 shadow-sm hover:shadow-md transition-all'>
                    {this.state.open ?
                        <XIcon className='fill-white w-full' /> :
                        <MenuIcon className='fill-white w-full' />
                    }
                </button>
            </>
        )
    }
}

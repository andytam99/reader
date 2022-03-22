import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import MenuButton from '../components/button/menu';
import MainHeader from '../partials/header/header'

export interface Props {
    title: string;
    subtitle: string;
    description: string;
    index: { name: string }[]
    content: string;
}

interface State {
}

export default class ArticleLayout extends Component<Props, State> {

    render() {
        const { title, subtitle, description, index, content } = this.props;
        return (
            <div className="container mx-auto">
                <MainHeader
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    index={index}
                />
                <article>
                    <MenuButton index={index} />
                    <ReactMarkdown>
                        {content}
                    </ReactMarkdown>
                </article>
            </div>
        )
    }
}
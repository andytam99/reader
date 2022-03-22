import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import MainHeader, { Props as HeaderProps } from '../partials/header/header'

interface Props extends HeaderProps {

}

interface State {
    content: string;
    error: string | undefined;
    loading: boolean;
}

export default class ArticleLayout extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: undefined,
            content: '',
            loading: false
        }
    }

    async getFiles() {

        this.setState({ loading: true })

        const promises: Promise<string>[] = this.props.index.map(i => {
            return fetch(`https://raw.githubusercontent.com/${i.link}`, { 'method': 'GET' }).then(i => i.text()).catch(err => err)
        })

        Promise.all(promises)
            .then(i => {
                const content = i.join(' ').replaceAll(/#{1}/g, '###');
                this.setState({ content, loading: false })
            })
            .catch(i => {
                this.setState({ error: 'Error getting content', loading: false })
            })
    }

    componentDidMount() {
        this.getFiles()
    }

    render() {
        const { title, subtitle, description, index } = this.props;
        return (
            <div className="container mx-auto">
                <MainHeader
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    index={index}
                />
                <article>
                    <ReactMarkdown>
                        {
                            this.state.content
                        }
                    </ReactMarkdown>
                </article>
            </div>
        )
    }
}

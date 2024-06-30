import ReactMarkdown from 'react-markdown'
import React from 'react'
import MarkdownHeaderElement from './header/MarkdownHeaderElement';
import HProps from '@/utils/types/HProps';

export default function Markdown({ markdown }: {
    markdown: {
        content : string
    }
}) {

    const MarkdownComponents: object = {
        h1: (props: HProps) => {
            return (
                <MarkdownHeaderElement hprops={props} hType={1}/>
            )
        },

        h2: (props: HProps) => {
            return (
                <MarkdownHeaderElement hprops={props} hType={2} />
            )
        },

        h3 : (props: HProps) => {
            return (
                <MarkdownHeaderElement hprops={props} hType={3} />
            )
        },

        h4: (props: HProps) => {
            return (
                <MarkdownHeaderElement hprops={props} hType={4} />
            )
        },

        h5: (props: HProps) => {
            return (
                <MarkdownHeaderElement hprops={props} hType={5} />
            )
        },

        h6: (props: HProps) => {
            return (
                <MarkdownHeaderElement hprops={props} hType={6} />
            )
        }
    }
    return (
        <ReactMarkdown
            components={MarkdownComponents}
        >
            {markdown.content}
        </ReactMarkdown>
    )
}
import ReactMarkdown from 'react-markdown'
import React from 'react'
import MarkdownHeaderElement from './MarkdownHeaderElement';
import HProps from '@/utils/types/HProps';
import { tagRules } from '@/utils/tagRules';
import { Button } from '@nextui-org/button';
import { CopyAllOutlined } from '@mui/icons-material';

export default function Markdown({ markdown }: {
    markdown: {
        content: string
    }
}) {

    const MarkdownComponents: object = {
        h1: (props: HProps) => {
            return (
                <MarkdownHeaderElement hprops={props} hType={1} />
            )
        },

        h2: (props: HProps) => {
            return (
                <MarkdownHeaderElement hprops={props} hType={2} />
            )
        },

        h3: (props: HProps) => {
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
        },
        a: (props: any) => {
            return (
                <a href={props.children} className= {tagRules.a}>
                    {props.children}
                </a>
            )
        },
        code: (props: any) => {
            return (
                <code className={tagRules.code}>
                    {props.children}
                </code>
            )
        },
        pre: (props: any) => {
            return (
                <pre className = "bg-gray-700 rounded flex items-center">
                    <div onClick={() => { navigator.clipboard.writeText(props.node.children[0].children[0].value) }}>
                        <Button isIconOnly className = "bg-transparent px-0.5" disableAnimation>
                            <CopyAllOutlined className = "fill-gray-400"/>
                        </Button>
                    </div>
                    <div>
                        {props.children}
                    </div>
                </pre>
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
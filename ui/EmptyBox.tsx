export default function Empty(props: {
    content: string,
    children: React.ReactNode,
    isEmpty  : boolean
}) {
    return (
        <>
            {props.isEmpty &&
                <div className = "h-full border-1 border-dashed border-gray-400 flex items-center justify-center rounded" >
                    <p className = "font-semibold text-gray-400">{props.content}</p>
                </div >
            }
            { !props.isEmpty && props.children}
        </>
    )
}
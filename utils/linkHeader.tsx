import { generateSlug } from "./generateSlug";

export default function linkHeader(props: any) {
    const children = Array.isArray(props.children)
        ? props.children
        : [props.children];
    const heading = children
        .flatMap((element: any) =>
            typeof element === 'string'
                ? element
                : element?.type !== undefined &&
                    typeof element.props.children === 'string'
                    ? element.props.children
                    : []
        )
        .join('');
    return generateSlug(heading);
}
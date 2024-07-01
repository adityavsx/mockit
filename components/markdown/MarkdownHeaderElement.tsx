import HProps from "@/utils/types/HProps";
import linkHeader from "@/utils/linkHeader";
import { tagRules } from "@/utils/tagRules";


export default function MarkdownHeaderElement(props : { hprops : HProps , hType : number} ) {
    const slug = linkHeader(props.hprops);
    switch (props.hType) {
        case 1:
            return (
            <h1 id={slug} className={tagRules.headers}>
                    <FormattedHTag slug={slug} hprops={props.hprops} hType={props.hType} />
            </h1>
            );
        case 2:
            return (
                <h2 id={slug} className={tagRules.headers}>
                    <FormattedHTag slug={slug} hprops={props.hprops} hType={props.hType} />
                </h2>
            );
        case 3:
            return (
                <h3 id={slug} className={tagRules.headers}>
                    <FormattedHTag slug={slug} hprops={props.hprops} hType={props.hType} />
                </h3>
            );
        case 4:
            return (
                <h4 id={slug} className={tagRules.headers}>
                    <FormattedHTag slug={slug} hprops={props.hprops} hType={props.hType} />
                </h4>
            );
        case 5:
            return (
                <h5 id={slug} className={tagRules.headers}>
                    <FormattedHTag slug={slug} hprops={props.hprops} hType={props.hType} />
                </h5>
            );
        case 6:
            return (
                <h6 id={slug} className={tagRules.headers}>
                    <FormattedHTag slug={slug} hprops={props.hprops} hType={props.hType} />
                </h6>
            );
    }
}


function FormattedHTag(props: { slug: string, hprops: HProps, hType: number }) {
    const classNames = `no-underline custom-md-header-link-${props.hType} font-bold`
    return (
        <>
            <span className="text-white hover:text-gray-400 ease-in transition-all border-b-2 border-white">
                <a href={`#${props.slug}`} {...(props.hprops)} className={classNames}></a> #
            </span>
        </>
    )
}
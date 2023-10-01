import {HeaderTitleStyle} from "./style";

export default function HeaderTitle({ text, ...props }) {
    return (
        <HeaderTitleStyle {...props}>{text}</HeaderTitleStyle>
    )
}
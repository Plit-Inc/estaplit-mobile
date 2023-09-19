import { DateToggleStyle, HeaderDateTextStyle, MainButtonStyle, MainButtonTextStyle, MainDateTextStyle } from "./style";


export default function DateToggle({ headerDateText, mainDateText, isSelected, setIsSelected }) {
    return (
        <DateToggleStyle isSelected={isSelected} onPress={() => setIsSelected(!isSelected)}>
            <HeaderDateTextStyle isSelected={isSelected}>{headerDateText}</HeaderDateTextStyle>
            <MainDateTextStyle isSelected={isSelected}>{mainDateText}</MainDateTextStyle>
        </DateToggleStyle>
    )
}
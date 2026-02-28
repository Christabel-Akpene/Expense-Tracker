import { Text, TextProps } from "react-native"

const HeaderText = ({className, ...props}: TextProps) => {
    return (
        <Text {...props} className={`font-heading_font text-lg text-text-primary ${className ?? ""}`}/>
    )
}

export default HeaderText
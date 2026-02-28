import { Text, TextProps } from "react-native"

const BodyText = ({ className, ...props}: TextProps) => {
    return (
        <Text {...props} className={`font-text_font ${className ?? ""}`}/>
    )
}

export default BodyText
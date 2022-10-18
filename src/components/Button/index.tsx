import React from "react";
import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles";

type Props ={
    onPress: any
    text: string
    size?: any
    theme?: string
}


export default ({ onPress, text, size, theme}: Props) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === "double") {
        buttonStyles.push(styles.buttonDouble);
      }
    if(theme === "secondary"){
        buttonStyles.push(styles.buttonSecondary)
        textStyles.push(styles.textSecondary)
    }else if (theme === "accent"){
        buttonStyles.push(styles.buttonAccent)
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyles}
        >
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    )
}
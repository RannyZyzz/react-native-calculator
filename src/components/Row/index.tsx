import React from "react";
import { View } from "react-native"

type Props = {
    children:any
}

export function Row({ children }: Props) {
    return(
        <View style={{ flexDirection: "row"}}>{children}</View>
    )
}
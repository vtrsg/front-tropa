import React from "react";
import { ButtonArea } from "./styled";

const Button = (props: any) => {
    return(
        <ButtonArea>{props.text}</ButtonArea>
    )
}

export default Button
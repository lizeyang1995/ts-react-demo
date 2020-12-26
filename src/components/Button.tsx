import React, { useState } from 'react';

interface Props {
    onClickk?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

const Button: React.FC<Props> = (props) => {
    return (
        <button onClick={props.onClickk}>{props.children}</button>
    )
}

export default Button;

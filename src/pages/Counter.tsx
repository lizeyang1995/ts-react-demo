import { RouteComponentProps } from '@reach/router';
import React, { useState } from 'react';
import Button from '../components/Button'

const Counter: React.FC<RouteComponentProps> = () => {
    const [count, setCount] = useState(0)
    const handleOnClick = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h2>{count}</h2>
            <Button onClickk={handleOnClick}>+</Button>
        </div>
    )
}

export default Counter;

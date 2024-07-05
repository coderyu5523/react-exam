import React from 'react';
import { useParams } from 'react-router-dom';

function Info(props) {
    const {id} = useParams();

    return (
        <div>
            <h1>Info 번호 : {id}</h1>
        </div>
    );
}

export default Info;
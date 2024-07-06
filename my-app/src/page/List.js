import React from 'react';
import { useSearchParams } from 'react-router-dom';

function List(props) {
    const [searchParams,setSearchParams] = useSearchParams();
    let page = searchParams.get("page");

    function next(){
        setSearchParams({page:Number(page)+1});
    }

    console.log("페이지 새로 그려짐");
    return (
        <div>
            <h1>List page :{page}</h1>
            <button onClick={next}>다음페이지</button>
        </div>
    );
}

export default List;
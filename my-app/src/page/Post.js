import React from 'react';

function Post(props) {

    async function download(){
      let response = await fetch("https://jsonplaceholder.typicode.com/posts/3",{
            method:"get"
        });
        let data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <button onClick={download}>Download post</button>
        </div>
    );
}

export default Post;
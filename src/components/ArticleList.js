

import React from 'react';
import Article from './Article';


function ArticleList({posts}){
    console.log(posts)
    const articles =posts.map(()=>{
       return <Article key = {posts.id}{...posts}/>
       
    })
    return(
        <main>
            {articles}
        </main>
    )
}
export default ArticleList;
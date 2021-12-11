import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

function List() {
    const [post, setpost] = useState([])
    const [newPost, setNewPost] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {res.json().then(data => {
            setpost(data);
            })
        })
    }, [])

    return (
        <>
            <input type="text" onChange={e => setNewPost(e.target.value)} value={newPost}/>
            <ul>
                {post.map(post => <PostItem key={post.id} post={post}/>)}
            </ul>
        </>
    )
}

export default List
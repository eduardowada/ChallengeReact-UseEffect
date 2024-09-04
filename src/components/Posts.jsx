/* Desafio 1: Atualizador automático de Notícias.
Implemente um componente que busca automaticamente novas notícias a cada 9 segundos, usando useEffect.*/ 

import { useState, useEffect } from "react";

function Posts() {
    const [post, setPost] = useState(null);
    const [postNumber, setPostNumber] = useState(1)

    useEffect (() => {
        const fetchPosts = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
            const data = await response.json()
            setPost(data)
        }

        const interval = setInterval(() => {
            setPostNumber((lastPost) => lastPost + 1)
        }, 9000)

        fetchPosts()

        return() =>  {
            clearInterval(interval)
        }
    },[postNumber])

    return(
        <div>
        <h1>{post ? post.title : "loading post..."}</h1>
        <p>{post ? post.body : " "}</p>
        </div>
    )
}

export default Posts;
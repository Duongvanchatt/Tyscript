import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/Post";
import {Link} from "react-router-dom";
type POST ={
    id: number,
    title: string,
    desc: string,
    author: string,
    category: string,
    thumbnail: string,
    status: number
};
function PostList(){
    const [posts, setPosts] = useState<POST[]>([]);
    const handleGetPost = async ()=>{
        const response = await getPosts();
        setPosts(response.data);
    };
    useEffect(()=>{
        handleGetPost();
    }, []);

    console.log(posts);
    

    return (
    <div>
        <div> 
            <Link to={'/admin/posts/create'}>
                <button>Tao moi bai viet</button>
            </Link>
        </div>
        
        <div>
            <table>
                <thead>
                   <tr>
                   <td>ID</td>
                    <td>TITLE</td>
                    <td>DESC</td>
                    <td>AUTHOR</td>
                    <td>STT</td>
                    <td>ACTION</td>
                   </tr>
                </thead>

                <tbody>
                    {
                        posts.map(post =>(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.desc}</td>
                                <td>{post.author}</td>
                                <td>{post.status ? 'Kích hoạt': 'Không kích hoạt'}</td>
                                <td><Link to={`/admin/posts/${post.id}/edit`}>Chinh sua</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    
    )   
};

export default PostList;
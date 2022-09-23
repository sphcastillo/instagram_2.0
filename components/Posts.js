import { onSnapshot, collection, query, orderBy } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import { db } from "../firebase";

// const posts = [
//     {
//         id: "123",
//         username: "sphcastillo",
//         userImg: "https://www.builtbysophia.com/static/media/SophiaCircleLogo.3f2550bf.png",
//         img: "https://media-exp1.licdn.com/dms/image/C5603AQHGCdEAxQozPw/profile-displayphoto-shrink_200_200/0/1619130340048?e=2147483647&v=beta&t=1Qo95obBrz4FvDMmHxScl23fG5_4b7FtaCGK7oMAAec",
//         caption: "This is DOPE!"
//     },
//     {
//         id: "234",
//         username: "stevewashere",
//         userImg: "https://static.wixstatic.com/media/8bb7c6_5a2e4cb6da3d4c1da1000e6d1305925a~mv2.jpeg/v1/crop/x_308,y_368,w_986,h_985/fill/w_212,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Stephanie%20Smith.jpeg",
//         img: "https://static.wixstatic.com/media/8bb7c6_5a2e4cb6da3d4c1da1000e6d1305925a~mv2.jpeg/v1/crop/x_308,y_368,w_986,h_985/fill/w_212,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Stephanie%20Smith.jpeg",
//         caption: "I LOVE this so much"
//     }
// ];

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => 
            onSnapshot(
                query(collection(db, "posts"), orderBy('timestamp', 'desc')), 
                    (snapshot) => {
            // everytime the value in the backend changes, your state will get updated with the latest docs
                        setPosts(snapshot.docs);
                    }
            ),
        [db]
    );

    // console.log("posts: ", posts);

    return (
        <div>
            {posts.map((post) => {
                return(
                    <Post 
                        key={post.id}
                        id={post.id}
                        username={post.data().username}
                        userImg={post.data().profileImg}
                        img={post.data().image}
                        caption={post.data().caption}
                    />
                )
            })}
        </div>
    )
}

export default Posts;
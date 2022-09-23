import React, { useEffect, useState } from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from 'next-auth/react';
import { addDoc, collection, query, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

function Post({ id, username, userImg, img, caption }) {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, 'posts', id, 'comments'),
                    orderBy('timestamp', 'desc')
                ),
                (snapshot) => setComments(snapshot.docs)
            ),
        [db]
    );

    useEffect(
        () => 
            onSnapshot(collection(db, "post", id, "likes"), 
                (snapshot) => setLikes(snapshot.docs)
                ),
        []
    );

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment(""); // to empty the input field

        // add the comment to the database
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })
    }

    console.log("comments:", comments);
    return (
        <div className="bg-white my-7 border rounded-sm">

            {/* Header */}
            <div className="flex items-center p-5">
                <img 
                    src={userImg} 
                    alt="User image" 
                    className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* img */}
            <img 
                src={img} 
                alt="" 
                className="object-cover w-full" 
            />

            {/* Buttons */}
            {session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        <HeartIcon className="btn" />
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
            )}

            {/* caption */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username}:</span>
                {caption}
            </p>

            {/* comments */}

            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map((comment) => {
                        <div className="flex items-center space-x-2 mb-3" key={comment.id}>
                            <img
                                src={comment.data().image} 
                                className="h-7 rounded-full"
                                alt=""
                            />
                            <p>HELLO!</p>
                        </div>
                    })}
                </div>
            )}

            {/* {session && 
                comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map((comment) => {
                        <div 
                            key={comment.id}
                            className="flex items-center space-x-2 mb-3"
                        >
                            <img 
                                src={comment.data().userImage} 
                                alt="" 
                                className="h-7 rounded-full"
                            />
                            <p className="text-sm flex-1">
                                <span className="font-bold">{comment.data().username}
                                </span>{" "}
                                {comment.data().comment}
                            </p>
                        </div>
                    })}
                </div>
            )} */}

            {/* input box */}
            
            {session && (
                <form className='flex items-center p-4'>
                    <EmojiHappyIcon className="h-7" />
                    <input 
                        type="text" 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="border-none flex-1 focus:ring-0 outline-none" 
                    />
                    <button 
                        className="font-semibold text-blue-400 cursor-pointer"
                        type="submit"
                        disabled={!comment.trim()}
                        onClick={sendComment}
                    >
                    Post
                    </button>
                </form>
            )}
        </div>
    )
}

export default Post;
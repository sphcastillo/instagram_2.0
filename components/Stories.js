import React from 'react';
import { UserData } from '../data/UserData';
import Story from './Story';
import { useSession } from 'next-auth/react';

function Stories() {
    const { data: session } = useSession();
    // console.log("UserData", UserData);

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">

            {session && (
                <Story  
                    img={session.user.image}
                    username={session.user.username}
                />
            )

            }
            {UserData.map((profile, i) => {
                return (
                    <Story 
                        key={i}
                        img={profile.avatar.src}
                        username={profile.username}
                    />
                )
            })}


        </div>
    )
}

export default Stories;
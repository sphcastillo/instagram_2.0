import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserData } from '../data/UserData';
import Story from './Story';

function Stories() {


    console.log("UserData", UserData);

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll">

            {UserData.map((profile, i) => {
                return (
                    <Story 
                        key={i}
                        img={profile.avatar.src}
                        username={profile.username}
                    />
                )
            })}

            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
        </div>
    )
}

export default Stories;
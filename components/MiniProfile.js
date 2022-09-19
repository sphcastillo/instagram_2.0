import React from 'react'

function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img 
                className="w-16 h-16 rounded-full border p=[2px]"
                alt="User profile picture"
                src="https://www.builtbysophia.com/static/media/SophiaCircleLogo.3f2550bf.png"
            />
            <div>
                <h2 className="font-bold">sphcastillo</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400  text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile;
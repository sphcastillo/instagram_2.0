import React from 'react';
import { SuggestionsData } from "../data/SuggestionsData";

function Suggestions() {
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>

            {SuggestionsData.map((profile, i) => {
                return (
                    <div
                        key={profile.id}
                        className="flex items-center justify-between mt-3"
                    >
                        <img 
                            className="w-10 h-10 rounded-full border p-[2px]"
                            src={profile.avatar.src}
                            alt={profile.username}
                        />
                        <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm">{profile.username}</h2>
                            <h3>{profile.name}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Suggestions;
import Link from 'next/link';
import React from 'react';

const IdeasPage = async () => {
    const res = await fetch('http://localhost:8000/ideas')
    const ideas = await res.json()

    return (
        <div className="p-5 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Startup Ideas</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ideas.map(idea => (
                    <div key={idea._id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full">{idea.category}</span>
                            <span className="text-xs text-gray-400">{idea.stage}</span>
                        </div>

                        <h2 className="text-lg font-bold text-gray-800">{idea.startupName}</h2>
                        <p className="text-sm text-gray-500 italic">{idea.tagline}</p>
                        <p className="text-sm text-gray-600 line-clamp-3">{idea.problem}</p>
                        <Link href={`/ideas/${idea._id}`}>Enter</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IdeasPage;

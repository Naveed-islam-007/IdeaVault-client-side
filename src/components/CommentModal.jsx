"use client"

import { useState } from "react"

const CommentModal = ({ ideaId }) => {
    const [open, setOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const comment = Object.fromEntries(formData.entries())

        await fetch(`http://localhost:8000/ideas/${ideaId}/comments`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(comment)
        })

        setOpen(false)
        e.target.reset()
    }

    return (
        <>
            <button className="btn bg-orange-500" onClick={() => setOpen(true)}>
                Comment
            </button>

            {open && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Leave a Comment</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">Comment</label>
                                <textarea
                                    name="comment"
                                    rows={4}
                                    placeholder="Write your comment..."
                                    required
                                    className="textarea textarea-bordered w-full"
                                />
                            </div>
                            <div className="modal-action">
                                <button type="button" className="btn" onClick={() => setOpen(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn bg-orange-500 text-white">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-backdrop" onClick={() => setOpen(false)} />
                </dialog>
            )}
        </>
    )
}

export default CommentModal
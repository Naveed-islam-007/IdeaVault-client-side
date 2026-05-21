"use client"

import { useState } from "react"

const EditModal = ({ idea }) => {
    const [open, setOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const updated = Object.fromEntries(formData.entries())

        await fetch(`http://localhost:8000/ideas/${idea._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })

        setOpen(false)
    }

    return (
        <>
            <button className="btn bg-orange-500" onClick={() => setOpen(true)}>
                Edit
            </button>

            {open && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Edit Idea</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">Startup Name</label>
                                <input
                                    name="startupName"
                                    type="text"
                                    defaultValue={idea.startupName}
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">Tagline</label>
                                <input
                                    name="tagline"
                                    type="text"
                                    defaultValue={idea.tagline}
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">Problem</label>
                                <textarea
                                    name="problem"
                                    rows={3}
                                    defaultValue={idea.problem}
                                    required
                                    className="textarea textarea-bordered w-full"
                                />
                            </div>
                            <div className="modal-action">
                                <button type="button" className="btn" onClick={() => setOpen(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn bg-orange-500 text-white">
                                    Save
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

export default EditModal
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const DeleteModal = ({ ideaId }) => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleDelete = async () => {
        await fetch(`http://localhost:8000/ideas/${ideaId}`, {
            method: 'DELETE'
        })
        setOpen(false)
        router.push('/ideas')
    }

    return (
        <>
            <button className="btn bg-orange-500" onClick={() => setOpen(true)}>
                Delete
            </button>

            {open && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-2">Delete Idea</h3>
                        <p className="text-gray-500 mb-6">Are you sure you want to delete this idea? This cannot be undone.</p>
                        <div className="modal-action">
                            <button className="btn" onClick={() => setOpen(false)}>
                                Cancel
                            </button>
                            <button className="btn btn-error text-white" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="modal-backdrop" onClick={() => setOpen(false)} />
                </dialog>
            )}
        </>
    )
}

export default DeleteModal
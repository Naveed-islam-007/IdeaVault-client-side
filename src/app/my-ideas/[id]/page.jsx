import Link from "next/link"
import CommentModal from "@/components/CommentModal"
import EditModal from "@/components/EditModal"
import DeleteModal from "@/components/DeleteModal"

const MyIdeaDetailPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:8000/my-ideas/${id}`)
    const idea = await res.json()

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
            <div className="max-w-2xl w-full bg-base-100 rounded-3xl p-8 shadow-xl border border-base-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] hover:border-blue-400">
                <Link href="/my-ideas" className="text-sm text-primary hover:underline mb-6 inline-block">← Back to My Ideas</Link>

                <div className="flex items-center justify-between mb-6">
                    <span className="badge badge-primary badge-outline px-4 py-3">{idea.category}</span>
                    <span className="badge badge-secondary px-4 py-3">{idea.stage}</span>
                </div>

                <h1 className="text-4xl font-extrabold mb-3">{idea.startupName}</h1>
                <p className="text-lg text-gray-400 italic mb-8">{idea.tagline}</p>

                <div className="bg-base-200 rounded-2xl p-5 border border-base-300">
                    <h2 className="text-xl font-bold mb-3 text-primary">Problem Statement</h2>
                    <p className="leading-8">{idea.problem}</p>
                </div>

                <div className="mt-6 bg-base-200 rounded-2xl p-5 border border-base-300">
                    <h2 className="text-xl font-bold mb-3 text-primary">Solution</h2>
                    <p className="leading-8">{idea.solution}</p>
                </div>

                <div className="mt-6 bg-base-200 rounded-2xl p-5 border border-base-300">
                    <h2 className="text-xl font-bold mb-3 text-primary">Target Audience</h2>
                    <p className="leading-8">{idea.targetAudience}</p>
                </div>

                <div className="mt-8 flex gap-3">
                    <CommentModal ideaId={id} collection="my-ideas" />
                    <EditModal idea={idea} collection="my-ideas" />
                    <DeleteModal ideaId={id} collection="my-ideas"  />
                </div>
            </div>
        </div>
    )
}

export default MyIdeaDetailPage
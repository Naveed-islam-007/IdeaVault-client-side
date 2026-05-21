"use client"

const CATEGORIES = [
  "SaaS", "FinTech", "HealthTech", "EdTech", "E-Commerce",
  "AI / ML", "CleanTech", "Developer Tools", "Social", "Other",
];

const STAGES = ["Idea", "MVP", "Early Stage", "Growth", "Scaling"];

const AddStartupPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const startup = Object.fromEntries(formData.entries())

    console.log(startup)

    const res = await fetch('http://localhost:8000/ideas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(startup)
    })

    const idea = await res.json()
    console.log(idea)
  }

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Add Startup Idea</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <form onSubmit={onSubmit} className="p-10 space-y-8 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Startup Name</label>
              <input
                name="startupName"
                type="text"
               
                required
                className="border border-gray-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Tagline</label>
              <input
                name="tagline"
                type="text"
                
                required
                className="border border-gray-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                required
                className="border border-gray-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400 bg-white"
              >
                <option value="">Select category</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Stage</label>
              <select
                name="stage"
                required
                className="border border-gray-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400 bg-white"
              >
                <option value="">Select stage</option>
                {STAGES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Problem it solves</label>
              <textarea
                name="problem"
                rows={4}
                placeholder="What specific problem does this solve?"
                required
                className="border border-gray-200 rounded-3xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-none transition-colors"
          >
            Add Startup
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddStartupPage

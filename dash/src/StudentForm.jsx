import { useState, useEffect } from "react"

const StudentForm = ({ onSubmit, editData }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (editData) {
      setName(editData.name)
      setEmail(editData.email)
    }
  }, [editData])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name, email, id: editData?.id || Date.now() })
    setName("")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <input className="block w-full p-2 border rounded" type="text" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)}/>
      <input className="block w-full p-2 border rounded" type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        {editData ? "Update" : "Add Student"}
      </button>
    </form>
  )
}

export default StudentForm

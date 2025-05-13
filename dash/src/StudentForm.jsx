import { useState, useEffect } from "react"

const StudentForm = ({ onSubmit, editData }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")

  useEffect(() => {
    if (editData) {
      setName(editData.name)
      setEmail(editData.email)
      setCourse(editData.course)
    }
  }, [editData])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name, email, course, id: editData?.id || Date.now() })

    setName("")
    setEmail("")
    setCourse("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <input className="block w-full p-2 border rounded" type="text" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)}/>
      <input className="block w-full p-2 border rounded" type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
      <input className="block w-full p-2 border rounded" type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)}/>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        {editData ? "Update" : "Add Student"}
      </button>
    </form>
  )
}

export default StudentForm

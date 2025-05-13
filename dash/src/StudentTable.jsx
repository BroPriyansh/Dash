const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border bg-white">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2">{i + 1}</td>
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.email}</td>
              <td className="px-4 py-2 space-x-2">
                <button className="text-blue-500" onClick={() => onEdit(student)}>Edit</button>
                <button className="text-red-500" onClick={() => onDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable

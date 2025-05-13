import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

import Navbar from "./Navbar";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editData, setEditData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate("/login"); 
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleAddOrUpdate = (student) => {
    setStudents((prev) => {
      const exists = prev.find((s) => s.id === student.id);
      return exists
        ? prev.map((s) => (s.id === student.id ? student : s))
        : [...prev, student];
    });
    setEditData(null);
  };

  const handleEdit = (student) => setEditData(student);
  const handleDelete = (id) => setStudents((prev) => prev.filter((s) => s.id !== id));

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-4xl mx-auto">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <StudentForm onSubmit={handleAddOrUpdate} editData={editData} />
        <StudentTable students={filtered} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default Dashboard;

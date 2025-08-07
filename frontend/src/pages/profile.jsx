import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    cnic: "",
    contact: "",
    email: "",
  });

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/profile/${userId}`);
        setUser(res.data);
        setForm(res.data); // initialize form with current data
        localStorage.setItem("userProfile", JSON.stringify(res.data));
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/api/profile/${userId}`, form);
      setUser(res.data); // Update displayed data
      localStorage.setItem("userProfile", JSON.stringify(res.data)); // Update local storage
      setEditing(false); // Exit edit mode
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Failed to update user:", err);
      alert("Failed to update profile.");
    }
  };

  if (!user) {
    return <div className="text-center mt-20 text-gray-500 text-xl">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-[#6C0B14]">
          {editing ? "Edit Profile" : "User Profile"}
        </h1>

        {editing ? (
          <form onSubmit={handleUpdate} className="space-y-6">
            <ProfileInput label="Name" name="name" value={form.name} onChange={handleChange} />
            <ProfileInput label="CNIC" name="cnic" value={form.cnic} onChange={handleChange} />
            <ProfileInput label="Contact No" name="contact" value={form.contact} onChange={handleChange} />
            <ProfileInput label="Email" name="email" value={form.email} onChange={handleChange} />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#6C0B14] text-white rounded hover:bg-[#8a1220]"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="space-y-6 text-gray-800">
              <ProfileField label="Name" value={user.name} />
              <ProfileField label="CNIC" value={user.cnic} />
              <ProfileField label="Contact No" value={user.contact} />
              <ProfileField label="Email" value={user.email} />
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setEditing(true)}
                className="px-5 py-2 bg-[#6C0B14] text-white rounded hover:bg-[#8a1220]"
              >
                Edit Profile
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// 📌 Read-only field
function ProfileField({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="font-semibold text-gray-600">{label}:</span>
      <span className="text-right text-gray-900">{value}</span>
    </div>
  );
}

// 📌 Editable input field
function ProfileInput({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-gray-700 font-semibold mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C0B14]"
      />
    </div>
  );
}

import { useState, useEffect } from "react";

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [status, setStatus] = useState({ message: "", success: false });

  // Handle admin authentication
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in production, use proper backend authentication
    const adminPassword = "Admin@2024"; // Change this to a secure password
    if (password === adminPassword) {
      setAuthenticated(true);
      setPassword("");
      fetchTestimonials();
      setStatus({ message: "Logged in successfully!", success: true });
    } else {
      setStatus({ message: "Invalid password!", success: false });
    }
    setTimeout(() => setStatus({ message: "", success: false }), 3000);
  };

  // Fetch all testimonials
  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://portfolio.morelinks.com.ng/api/testimonials.php?limit=100"
      );
      const data = await response.json();
      if (data.success) {
        setTestimonials(data.data || []);
      }
    } catch (error) {
      setStatus({ message: "Failed to fetch testimonials", success: false });
    } finally {
      setLoading(false);
    }
  };

  // Delete testimonial
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        const response = await fetch(
          "https://portfolio.morelinks.com.ng/api/delete-testimonial.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
          }
        );
        const data = await response.json();
        if (data.success) {
          setTestimonials(testimonials.filter((t) => t.id !== id));
          setStatus({ message: "Testimonial deleted successfully!", success: true });
        } else {
          setStatus({ message: data.message || "Failed to delete", success: false });
        }
      } catch (error) {
        setStatus({ message: "Error deleting testimonial", success: false });
      }
      setTimeout(() => setStatus({ message: "", success: false }), 3000);
    }
  };

  // Start editing
  const startEdit = (testimonial) => {
    setEditingId(testimonial.id);
    setEditData({ ...testimonial });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  // Save edited testimonial
  const handleSaveEdit = async () => {
    try {
      const response = await fetch(
        "https://portfolio.morelinks.com.ng/api/update-testimonial.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData),
        }
      );
      const data = await response.json();
      if (data.success) {
        setTestimonials(
          testimonials.map((t) => (t.id === editingId ? editData : t))
        );
        setEditingId(null);
        setStatus({ message: "Testimonial updated successfully!", success: true });
      } else {
        setStatus({ message: data.message || "Failed to update", success: false });
      }
    } catch (error) {
      setStatus({ message: "Error updating testimonial", success: false });
    }
    setTimeout(() => setStatus({ message: "", success: false }), 3000);
  };

  // Update status
  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(
        "https://portfolio.morelinks.com.ng/api/update-status.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status: newStatus }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setTestimonials(
          testimonials.map((t) =>
            t.id === id ? { ...t, status: newStatus } : t
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Filter testimonials
  const filteredTestimonials = testimonials.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.feedback.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || t.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  if (!authenticated) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center py-20">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h1 className="text-4xl font-bold text-white mb-2 text-center">
              Admin Panel
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Enter admin password to continue
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition-all"
              >
                Login
              </button>

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.success
                      ? "bg-green-500/20 text-green-300 border border-green-500/50"
                      : "bg-red-500/20 text-red-300 border border-red-500/50"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <a
                href="/"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                ← Back to Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-gray-400">Manage testimonials and feedback</p>
          </div>
          <a
            href="/"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Logout
          </a>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <p className="text-gray-400 text-sm">Total Testimonials</p>
            <p className="text-3xl font-bold text-cyan-400">
              {testimonials.length}
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <p className="text-gray-400 text-sm">Approved</p>
            <p className="text-3xl font-bold text-green-400">
              {testimonials.filter((t) => t.status === "approved").length}
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <p className="text-gray-400 text-sm">Pending Review</p>
            <p className="text-3xl font-bold text-yellow-400">
              {testimonials.filter((t) => t.status === "pending").length}
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <p className="text-gray-400 text-sm">Rejected</p>
            <p className="text-3xl font-bold text-red-400">
              {testimonials.filter((t) => t.status === "rejected").length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Search by name, company, or feedback..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Status Message */}
        {status.message && (
          <div
            className={`mb-8 p-4 rounded-lg ${
              status.success
                ? "bg-green-500/20 text-green-300 border border-green-500/50"
                : "bg-red-500/20 text-red-300 border border-red-500/50"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Testimonials Table */}
        {loading ? (
          <div className="text-center text-gray-400">Loading...</div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="text-center text-gray-400">
            No testimonials found
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-400/50 transition"
              >
                {editingId === testimonial.id ? (
                  // Edit Mode
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        placeholder="Name"
                        className="bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400"
                      />
                      <input
                        type="text"
                        value={editData.role}
                        onChange={(e) =>
                          setEditData({ ...editData, role: e.target.value })
                        }
                        placeholder="Role"
                        className="bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <input
                      type="text"
                      value={editData.company}
                      onChange={(e) =>
                        setEditData({ ...editData, company: e.target.value })
                      }
                      placeholder="Company"
                      className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400"
                    />
                    <textarea
                      value={editData.feedback}
                      onChange={(e) =>
                        setEditData({ ...editData, feedback: e.target.value })
                      }
                      placeholder="Feedback"
                      rows="4"
                      className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 resize-none"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveEdit}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-cyan-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                      <select
                        value={testimonial.status || "pending"}
                        onChange={(e) =>
                          handleStatusChange(testimonial.id, e.target.value)
                        }
                        className={`px-3 py-1 rounded text-white border-0 focus:outline-none ${
                          testimonial.status === "approved"
                            ? "bg-green-600"
                            : testimonial.status === "rejected"
                            ? "bg-red-600"
                            : "bg-yellow-600"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>

                    <p className="text-gray-300 mb-4">
                      "{testimonial.feedback}"
                    </p>

                    {testimonial.image && (
                      <div className="mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(testimonial)}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

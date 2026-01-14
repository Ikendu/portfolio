import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollTop";

export default function ContactsAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [status, setStatus] = useState({ message: "", success: false });
  const [expandedId, setExpandedId] = useState(null);

  // Handle admin authentication
  const handleLogin = (e) => {
    e.preventDefault();
    const adminPassword = "Admin@2024";
    if (password === adminPassword) {
      setAuthenticated(true);
      setPassword("");
      fetchContacts();
      setStatus({ message: "Logged in successfully!", success: true });
    } else {
      setStatus({ message: "Invalid password!", success: false });
    }
    setTimeout(() => setStatus({ message: "", success: false }), 3000);
  };

  // Fetch all contacts
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://portfolio.morelinks.com.ng/api/get-contacts.php?limit=100&token=your-admin-token"
      );
      const data = await response.json();
      if (data.success) {
        setContacts(data.data || []);
      } else {
        setStatus({ message: "Failed to fetch contacts", success: false });
      }
    } catch (error) {
      setStatus({ message: "Error fetching contacts", success: false });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Update contact status
  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(
        "https://portfolio.morelinks.com.ng/api/update-contact-status.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status: newStatus }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setContacts(
          contacts.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
        );
        setStatus({
          message: "Status updated successfully!",
          success: true,
        });
      } else {
        setStatus({
          message: data.message || "Failed to update status",
          success: false,
        });
      }
    } catch (error) {
      setStatus({ message: "Error updating status", success: false });
      console.error(error);
    }
    setTimeout(() => setStatus({ message: "", success: false }), 3000);
  };

  // Delete contact
  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this contact message? This action cannot be undone."
      )
    ) {
      try {
        const response = await fetch(
          "https://portfolio.morelinks.com.ng/api/delete-contact.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
          }
        );
        const data = await response.json();
        if (data.success) {
          setContacts(contacts.filter((c) => c.id !== id));
          setStatus({
            message: "Contact deleted successfully!",
            success: true,
          });
        } else {
          setStatus({
            message: data.message || "Failed to delete contact",
            success: false,
          });
        }
      } catch (error) {
        setStatus({ message: "Error deleting contact", success: false });
        console.error(error);
      }
      setTimeout(() => setStatus({ message: "", success: false }), 3000);
    }
  };

  // Filter contacts
  const filteredContacts = contacts.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || c.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  if (!authenticated) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center py-20 pt-32">
        <ScrollToTop />
        <div className="max-w-md w-full mx-auto px-4">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h1 className="text-4xl font-bold text-white mb-2 text-center">
              Contact Messages
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Enter admin password to continue
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-cyan-400 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-300 transition"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
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
              <Link
                to="/admin"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                ← Back to Admin
              </Link>
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
            <h1 className="text-4xl font-bold text-white mb-2">
              Contact Messages
            </h1>
            <p className="text-gray-400">
              Manage and respond to contact form submissions
            </p>
          </div>
          <Link
            to="/admin"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Back to Admin
          </Link>
        </div>

        {status.message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              status.success
                ? "bg-green-500/20 text-green-300 border border-green-500/50"
                : "bg-red-500/20 text-red-300 border border-red-500/50"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Filters and Search */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search by name, email, or message..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Filter by Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400 transition"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-gray-400 text-sm">
            Showing {filteredContacts.length} of {contacts.length} contacts
          </div>
        </div>

        {/* Contacts List */}
        {loading ? (
          <div className="text-center text-gray-400">Loading contacts...</div>
        ) : filteredContacts.length === 0 ? (
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
            <p className="text-gray-400">No contacts found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-cyan-400 transition"
              >
                {/* Header */}
                <div
                  className="p-6 cursor-pointer hover:bg-slate-700/50 transition"
                  onClick={() =>
                    setExpandedId(expandedId === contact.id ? null : contact.id)
                  }
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {contact.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            contact.status === "new"
                              ? "bg-blue-500/20 text-blue-300"
                              : contact.status === "read"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-green-500/20 text-green-300"
                          }`}
                        >
                          {contact.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        <p>📧 {contact.email}</p>
                        {contact.phone && <p>📞 {contact.phone}</p>}
                        <p>
                          📅 {new Date(contact.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xl">
                      {expandedId === contact.id ? "▼" : "▶"}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedId === contact.id && (
                  <div className="border-t border-slate-700 p-6 bg-slate-700/30">
                    {/* Message */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">
                        Message:
                      </h4>
                      <div className="bg-slate-700 rounded p-4 text-gray-300 whitespace-pre-wrap">
                        {contact.message}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 rounded p-4">
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white font-semibold">
                          {contact.email}
                        </p>
                      </div>
                      {contact.phone && (
                        <div className="bg-slate-700 rounded p-4">
                          <p className="text-gray-400 text-sm">Phone</p>
                          <p className="text-white font-semibold">
                            {contact.phone}
                          </p>
                        </div>
                      )}
                      <div className="bg-slate-700 rounded p-4">
                        <p className="text-gray-400 text-sm">Submitted</p>
                        <p className="text-white font-semibold">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="bg-slate-700 rounded p-4">
                        <p className="text-gray-400 text-sm">Contact ID</p>
                        <p className="text-white font-semibold">
                          #{contact.id}
                        </p>
                      </div>
                    </div>

                    {/* Status Update */}
                    <div className="mb-4">
                      <label className="block text-white font-semibold mb-2">
                        Update Status
                      </label>
                      <div className="flex gap-2 flex-wrap">
                        {["new", "read", "replied"].map((s) => (
                          <button
                            key={s}
                            onClick={() => handleStatusChange(contact.id, s)}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                              contact.status === s
                                ? "bg-cyan-500 text-white"
                                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                            }`}
                          >
                            {s.charAt(0).toUpperCase() + s.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="border-t border-slate-700 pt-4 mt-4 flex gap-3 flex-wrap">
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                      >
                        Reply via Email
                      </a>
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                      >
                        Delete Contact
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { useState } from "react";
import imageCompression from "browser-image-compression";

export default function SubmitTestimonial() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    feedback: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", success: false });
  const [compressing, setCompressing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is already 30KB or less
      if (file.size <= 30 * 1024) {
        // File is small enough, use it directly without compression
        setFormData({ ...formData, image: file });
        setStatus({ message: "", success: false });
        return;
      }

      // File is larger than 30KB, compress it
      setCompressing(true);
      try {
        // Compression options to achieve ~30KB
        const options = {
          maxSizeMB: 0.03, // 30KB
          maxWidthOrHeight: 800,
          useWebWorker: true,
          quality: 0.6, // Adjust quality for better compression
        };

        const compressedFile = await imageCompression.compress(file, options);

        // Verify compression worked
        if (compressedFile.size > 30 * 1024) {
          // If still over 30KB, compress more aggressively
          const strictOptions = {
            maxSizeMB: 0.025, // 25KB
            maxWidthOrHeight: 600,
            useWebWorker: true,
            quality: 0.5,
          };
          const recompressedFile = await imageCompression.compress(
            file,
            strictOptions
          );
          setFormData({ ...formData, image: recompressedFile });
          setStatus({
            message: `Image compressed to ${(
              recompressedFile.size / 1024
            ).toFixed(2)}KB ✓`,
            success: true,
          });
        } else {
          setFormData({ ...formData, image: compressedFile });
          setStatus({
            message: `Image compressed to ${(
              compressedFile.size / 1024
            ).toFixed(2)}KB ✓`,
            success: true,
          });
        }
      } catch (error) {
        setStatus({
          message: "Failed to compress image. Please try another image.",
          success: false,
        });
        console.error(error);
      } finally {
        setCompressing(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", success: false });

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("role", formData.role);
    submitData.append("company", formData.company);
    submitData.append("feedback", formData.feedback);
    if (formData.image) {
      submitData.append("image", formData.image);
    }

    try {
      const response = await fetch(
        "https://portfolio.morelinks.com.ng/api/submit-testimonial.php",
        {
          method: "POST",
          body: submitData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus({
          message: "Testimonial submitted successfully! Thank you.",
          success: true,
        });
        setFormData({
          name: "",
          role: "",
          company: "",
          feedback: "",
          image: null,
        });
        document.querySelector('input[type="file"]').value = "";
      } else {
        setStatus({
          message: data.message || "Failed to submit testimonial. Try again.",
          success: false,
        });
      }
    } catch (error) {
      setStatus({
        message: "Error submitting testimonial. Please try again.",
        success: false,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 pt-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Share Your Feedback
          </h1>
          <p className="text-gray-400 text-lg">
            Your testimonial helps others learn about my work and expertise
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Role *
                </label>
                <input
                  type="text"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Project Manager, CTO"
                  className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Company *
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company or organization"
                className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Your Feedback *
              </label>
              <textarea
                name="feedback"
                required
                rows="6"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Share your experience working with me..."
                className="w-full bg-slate-700 text-white placeholder-gray-500 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition resize-none"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Profile Image (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                disabled={compressing}
                className="w-full bg-slate-700 text-gray-300 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <p className="text-gray-400 text-sm mt-2">
                {compressing
                  ? "Compressing image..."
                  : "Max original size: 2MB. Max upload: 30KB"}
              </p>
              {formData.image && status.message && (
                <p className="text-cyan-400 text-sm mt-2">✓ {status.message}</p>
              )}
              {formData.image && !status.message && (
                <p className="text-cyan-400 text-sm mt-2">
                  ✓ Image selected ({(formData.image.size / 1024).toFixed(2)}KB)
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || compressing}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
            >
              {compressing
                ? "Compressing Image..."
                : loading
                ? "Submitting..."
                : "Submit Testimonial"}
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
              href="/#testimonials"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              ← Back to Testimonials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

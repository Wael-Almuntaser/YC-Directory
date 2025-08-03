"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CreateArticle() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "tech",
    tags: "",
    imageUrl: "",
    websiteUrl: "",
    githubUrl: "",
    pitch: ""
  });


  if (status === "loading") {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    router.push("/");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // إنشاء مقالة جديدة
      const newArticle = {
        id: Date.now(), 
        title: formData.title,
        description: formData.description,
        category: formData.category,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        date: new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        views: Math.floor(Math.random() * 200) + 50, // عدد مشاهدات عشوائي
        imageUrl: formData.imageUrl,
        websiteUrl: formData.websiteUrl,
        githubUrl: formData.githubUrl,
        pitch: formData.pitch,
        author: session?.user?.name || 'Anonymous'
      };

      // حفظ المقالة في localStorage
      const existingArticles = localStorage.getItem('userArticles');
      const articles = existingArticles ? JSON.parse(existingArticles) : [];
      articles.push(newArticle);
      localStorage.setItem('userArticles', JSON.stringify(articles));

      // إرسال حدث لتحديث الصفحة الرئيسية
      window.dispatchEvent(new Event('storage'));

      console.log("Article created:", newArticle);
      
      // محاكاة حفظ المقالة
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Article created successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error creating article:", error);
      alert("Error creating article. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="create-article-container">
      <div className="create-article-header">
        <h1>Create New Article</h1>
        <p>Share your startup idea with the community</p>
      </div>

      <form onSubmit={handleSubmit} className="create-article-form">
        <div className="form-group">
          <label htmlFor="title">Startup Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter your startup name"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your startup idea, what problem it solves, and how it works..."
            required
            rows={4}
            className="form-textarea"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="form-select"
            >
              <option value="tech">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="fintech">FinTech</option>
              <option value="food">Food & Delivery</option>
              <option value="environmental">Environmental</option>
              <option value="energy">Energy</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="AI, mobile, sustainability (comma separated)"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="websiteUrl">Website URL</label>
            <input
              type="url"
              id="websiteUrl"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleInputChange}
              placeholder="https://yourstartup.com"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="githubUrl">GitHub URL</label>
          <input
            type="url"
            id="githubUrl"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleInputChange}
            placeholder="https://github.com/yourusername/project"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pitch">Pitch (Optional)</label>
          <textarea
            id="pitch"
            name="pitch"
            value={formData.pitch}
            onChange={handleInputChange}
            placeholder="Tell us more about your vision, market opportunity, and why you're building this..."
            rows={6}
            className="form-textarea"
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
          >
            {isSubmitting ? "Creating..." : "Create Article"}
          </button>
        </div>
      </form>
    </div>
  );
} 
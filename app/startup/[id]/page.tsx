"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Startup {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  views: number;
  imageUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  pitch?: string;
  author?: string;
}

export default function StartupDetails() {
  const params = useParams();
  const router = useRouter();
  const [startup, setStartup] = useState<Startup | null>(null);
  const [loading, setLoading] = useState(true);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const loadStartup = () => {
      try {
        // البحث في البيانات الأساسية
        const initialStartupsData = [
          {
            id: 1,
            title: "EcoTrack",
            description: "A mobile app that helps users track and reduce their carbon footprint through daily activities and sustainable choices.",
            date: "20 May, 2023",
            views: 230,
            category: "environmental",
            tags: ["mobile", "sustainability", "carbon footprint"]
          },
          {
            id: 2,
            title: "SmartLearn",
            description: "AI-powered learning platform that adapts to individual student needs and provides personalized educational content.",
            date: "18 May, 2023",
            views: 185,
            category: "education",
            tags: ["AI", "education", "personalized learning"]
          },
          {
            id: 3,
            title: "HealthFlow",
            description: "Digital health platform connecting patients with healthcare providers for seamless telemedicine experiences.",
            date: "15 May, 2023",
            views: 312,
            category: "healthcare",
            tags: ["healthcare", "telemedicine", "digital health"]
          },
          {
            id: 4,
            title: "FinTechPro",
            description: "Revolutionary financial technology solution for small businesses to manage payments and cash flow efficiently.",
            date: "12 May, 2023",
            views: 156,
            category: "fintech",
            tags: ["fintech", "payments", "small business"]
          },
          {
            id: 5,
            title: "FoodTech",
            description: "Innovative food delivery platform using AI to optimize routes and reduce delivery times by 40%.",
            date: "10 May, 2023",
            views: 278,
            category: "food",
            tags: ["food delivery", "AI", "logistics"]
          },
          {
            id: 6,
            title: "GreenEnergy",
            description: "Sustainable energy solutions for homes and businesses using advanced solar and wind technology.",
            date: "8 May, 2023",
            views: 194,
            category: "energy",
            tags: ["renewable energy", "solar", "wind power"]
          }
        ];

        // البحث في المقالات المحفوظة
        const savedArticles = localStorage.getItem('userArticles');
        const userArticles = savedArticles ? JSON.parse(savedArticles) : [];

        const allStartups = [...initialStartupsData, ...userArticles];
        const startupId = parseInt(params.id as string);
        const foundStartup = allStartups.find(s => s.id === startupId);

        if (foundStartup) {
          setStartup(foundStartup);
          
          // زيادة عدد المشاهدات
          const viewKey = `startup_views_${startupId}`;
          const currentViews = parseInt(localStorage.getItem(viewKey) || foundStartup.views.toString());
          const newViews = currentViews + 1;
          localStorage.setItem(viewKey, newViews.toString());
          setViews(newViews);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error loading startup:", error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    loadStartup();
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading startup details...</p>
      </div>
    );
  }

  if (!startup) {
    return (
      <div className="error-container">
        <h2>Startup not found</h2>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="startup-details-container">
      <div className="startup-details-header">
        <Link href="/" className="back-button">
          ← Back to Home
        </Link>
        <div className="startup-meta">
          <span className="category-badge">{startup.category}</span>
          <span className="date-badge">{startup.date}</span>
        </div>
      </div>

      <div className="startup-details-content">
        <div className="startup-hero">
          <div className="startup-image-container">
            <div 
              className="startup-detail-image"
              style={{
                backgroundColor: startup.id === 1 ? '#4CAF50' : 
                              startup.id === 2 ? '#FF9800' : 
                              startup.id === 3 ? '#F44336' : 
                              startup.id === 4 ? '#2196F3' : 
                              startup.id === 5 ? '#FF9800' : '#4CAF50',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                fontWeight: 'bold'
              }}
            >
              {startup.title}
            </div>
          </div>
          
          <div className="startup-info">
            <h1 className="startup-title">{startup.title}</h1>
            <p className="startup-description">{startup.description}</p>
            
            <div className="startup-stats">
              <div className="stat-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>{views} views</span>
              </div>
              
              {startup.author && (
                <div className="stat-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>By {startup.author}</span>
                </div>
              )}
            </div>

            <div className="startup-tags">
              {startup.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {startup.pitch && (
          <div className="startup-pitch">
            <h3>Pitch</h3>
            <p>{startup.pitch}</p>
          </div>
        )}

        <div className="startup-links">
          {startup.websiteUrl && (
            <a href={startup.websiteUrl} target="_blank" rel="noopener noreferrer" className="link-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Visit Website
            </a>
          )}

          {startup.githubUrl && (
            <a href={startup.githubUrl} target="_blank" rel="noopener noreferrer" className="link-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-1.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 
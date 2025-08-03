"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import SearchForm from "../components/SearchForm";

// بيانات الـ startups الأساسية
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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [startupsData, setStartupsData] = useState(initialStartupsData);

  // تحميل المقالات المحفوظة من localStorage
  useEffect(() => {
    const loadSavedArticles = () => {
      const savedArticles = localStorage.getItem('userArticles');
      if (savedArticles) {
        try {
          const parsedArticles = JSON.parse(savedArticles);
          setStartupsData(prev => {
            // تجنب تكرار المقالات
            const existingIds = prev.map(article => article.id);
            const newArticles = parsedArticles.filter((article: any) => !existingIds.includes(article.id));
            return [...prev, ...newArticles];
          });
        } catch (error) {
          console.error('Error loading saved articles:', error);
        }
      }
    };

    loadSavedArticles();

    // الاستماع لتغييرات localStorage
    const handleStorageChange = () => {
      loadSavedArticles();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // تصفية الـ startups بناءً على البحث والفئة
  const filteredStartups = useMemo(() => {
    return startupsData.filter(startup => {
      const matchesSearch = startup.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          startup.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          startup.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || startup.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, startupsData]);


  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // الفئات المتاحة
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'environmental', label: 'Environmental' },
    { value: 'education', label: 'Education' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'food', label: 'Food & Delivery' },
    { value: 'energy', label: 'Energy' },
    { value: 'tech', label: 'Technology' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="home-container">
      <section>
        <h1 className="home-title">
          PITCH YOUR STARTUP,<br />
          CONNECT WITH ENTREPRENEURS
        </h1>
        <p className="home-subtitle">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm onSearch={handleSearch} />
      </section>
      
      <section className="recommended-section">
        <h2 className="recommended-title">Recommended startups</h2>
        
        {/* فلاتر البحث */}
        <div className="search-filters">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.value}
                className={`category-filter ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {searchQuery && (
            <div className="search-results-info">
              Found {filteredStartups.length} startup{filteredStartups.length !== 1 ? 's' : ''} for "{searchQuery}"
            </div>
          )}
        </div>

        <div className="startup-grid">
          {filteredStartups.length > 0 ? (
            filteredStartups.map(startup => (
              <div key={startup.id} className="startup-card">
                <div className="card-header">
                  <span className="date-tag">{startup.date}</span>
                  <div className="views-count">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {(() => {
                      const viewKey = `startup_views_${startup.id}`;
                      const savedViews = localStorage.getItem(viewKey);
                      return savedViews ? parseInt(savedViews) : startup.views;
                    })()}
                  </div>
                </div>
                <div className="card-image">
                  <div 
                    className="startup-image-placeholder"
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
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}
                  >
                    {startup.title}
                  </div>
                </div>
                <h3 className="card-title">{startup.title}</h3>
                <p className="card-description">{startup.description}</p>
                <div className="card-tags">
                  {startup.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="card-footer">
                  <div className="profile-pic">
                    <div 
                      className="profile-image-placeholder"
                      style={{
                        backgroundColor: startup.id === 1 ? '#2196F3' : 
                                      startup.id === 2 ? '#9C27B0' : 
                                      startup.id === 3 ? '#607D8B' : 
                                      startup.id === 4 ? '#FF5722' : 
                                      startup.id === 5 ? '#795548' : '#8BC34A',
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}
                    >
                      {startup.title.substring(0, 2)}
                    </div>
                  </div>
                  <button 
                    className="details-btn"
                    onClick={() => window.location.href = `/startup/${startup.id}`}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No startups found</h3>
              <p>Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

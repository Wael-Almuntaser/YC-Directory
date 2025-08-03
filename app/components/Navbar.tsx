"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status } = useSession();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignIn = async () => {
    await signIn("github", { callbackUrl: "/" });
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  // Show loading state
  if (status === "loading") {
    return (
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderBottom: '1px solid #e5e7eb',
        padding: '10px 20px'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              YC
            </div>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>Directory</span>
          </div>
          <div style={{
            width: '96px',
            height: '32px',
            backgroundColor: '#e5e7eb',
            borderRadius: '4px'
          }}></div>
        </div>
      </nav>
    );
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      borderBottom: isScrolled ? '1px solid #e5e7eb' : 'none',
      padding: '10px 20px',
      transition: 'all 0.3s'
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '4rem'
      }}>
        {/* Logo */}
        <div>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#111827',
              textDecoration: 'none'
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              YC
            </div>
            <span>Directory</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link
            href="/"
            style={{
              color: '#374151',
              textDecoration: 'none',
              padding: '8px 12px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Home
          </Link>
          <Link
            href="/companies"
            style={{
              color: '#374151',
              textDecoration: 'none',
              padding: '8px 12px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Companies
          </Link>
          <Link
            href="/about"
            style={{
              color: '#374151',
              textDecoration: 'none',
              padding: '8px 12px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            About
          </Link>
          <Link
            href="/contact"
            style={{
              color: '#374151',
              textDecoration: 'none',
              padding: '8px 12px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Contact
          </Link>

          {/* Auth Button */}
          {session && session?.user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '14px', color: '#374151' }}>
                {session?.user?.name}
              </span>
              <button
                onClick={handleSignOut}
                style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Login with GitHub
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
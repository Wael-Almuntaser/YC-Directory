"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: '60px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        height: '100%',
        padding: '0 20px'
      }}>
        <Link href="/" style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333',
          textDecoration: 'none'
        }}>
          YC Directory
        </Link>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <Link href="/" style={{
            color: '#333',
            textDecoration: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}>
            Home
          </Link>
          <Link href="/companies" style={{
            color: '#333',
            textDecoration: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}>
            Companies
          </Link>
          <Link href="/about" style={{
            color: '#333',
            textDecoration: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}>
            About
          </Link>
          <Link href="/contact" style={{
            color: '#333',
            textDecoration: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}>
            Contact
          </Link>
          
          {session && (
            <Link href="/create" style={{
              color: '#007bff',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              border: '2px solid #007bff',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}>
              Create
            </Link>
          )}

          {session ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{
                color: '#666',
                fontSize: '14px'
              }}>
                {session.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("github")}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
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
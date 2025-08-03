"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DebugPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 2rem auto'
          }}></div>
          <p style={{ color: '#6b7280' }}>جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#1f2937'
        }}>
          صفحة التصحيح
        </h1>

        <div style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}>
          {/* Session Information */}
          <div style={{
            background: '#f3f4f6',
            padding: '2rem',
            borderRadius: '12px',
            border: '2px solid #e5e7eb'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#374151'
            }}>
              معلومات الجلسة
            </h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <strong>الحالة:</strong> {status}
            </div>
            
            {session.user && (
              <>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>الاسم:</strong> {session.user.name}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>البريد الإلكتروني:</strong> {session.user.email}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>معرف المستخدم:</strong> {session.user.id || 'غير محدد'}
                </div>
                {session.user.image && (
                  <div style={{ marginTop: '1rem' }}>
                    <img
                      src={session.user.image}
                      alt="Profile"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '3px solid #3b82f6'
                      }}
                    />
                  </div>
                )}
              </>
            )}
          </div>

          {/* Environment Variables */}
          <div style={{
            background: '#fef3c7',
            padding: '2rem',
            borderRadius: '12px',
            border: '2px solid #f59e0b'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#92400e'
            }}>
              متغيرات البيئة
            </h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <strong>NEXTAUTH_URL:</strong> {process.env.NEXTAUTH_URL || 'غير محدد'}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>AUTH_SECRET:</strong> {process.env.AUTH_SECRET ? 'محدد' : 'غير محدد'}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>AUTH_GITHUB_ID:</strong> {process.env.AUTH_GITHUB_ID ? 'محدد' : 'غير محدد'}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>AUTH_GITHUB_SECRET:</strong> {process.env.AUTH_GITHUB_SECRET ? 'محدد' : 'غير محدد'}
            </div>
          </div>

          {/* Session Data */}
          <div style={{
            background: '#ecfdf5',
            padding: '2rem',
            borderRadius: '12px',
            border: '2px solid #10b981'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#065f46'
            }}>
              بيانات الجلسة الكاملة
            </h2>
            
            <pre style={{
              background: '#1f2937',
              color: '#f9fafb',
              padding: '1rem',
              borderRadius: '8px',
              fontSize: '0.875rem',
              overflow: 'auto',
              maxHeight: '300px'
            }}>
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>

          {/* Actions */}
          <div style={{
            background: '#fef2f2',
            padding: '2rem',
            borderRadius: '12px',
            border: '2px solid #ef4444'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#991b1b'
            }}>
              الإجراءات
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <button
                onClick={() => router.push('/')}
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                العودة للرئيسية
              </button>
              
              <button
                onClick={() => router.push('/auth/setup')}
                style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                صفحة الإعداد
              </button>
              
              <button
                onClick={() => router.push('/auth/signout')}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
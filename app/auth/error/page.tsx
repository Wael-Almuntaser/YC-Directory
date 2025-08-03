"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case "Configuration":
        return "خطأ في إعداد الخادم. يرجى المحاولة مرة أخرى لاحقاً.";
      case "AccessDenied":
        return "تم رفض الوصول. يرجى المحاولة مرة أخرى.";
      case "Verification":
        return "فشل في التحقق من الحساب. يرجى المحاولة مرة أخرى.";
      default:
        return "حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.";
    }
  };

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
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, #ef4444, #dc2626)',
          borderRadius: '50%',
          margin: '0 auto 2rem auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem'
        }}>
          ⚠️
        </div>
        
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          خطأ في تسجيل الدخول
        </h1>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#6b7280',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          {getErrorMessage(error)}
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link
            href="/auth/signin"
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '500',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            المحاولة مرة أخرى
          </Link>
          
          <Link
            href="/"
            style={{
              backgroundColor: 'transparent',
              color: '#3b82f6',
              border: '2px solid #3b82f6',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '500',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
} 
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Navbar />
      <main className="font-work-sans">
        {children}
      </main>
    </Providers>
  );
}
  

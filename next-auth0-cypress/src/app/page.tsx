import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32">
        <a href="/api/auth/login">
          <h2>Login</h2>
        </a>
      </div>
    </main>
  );
}

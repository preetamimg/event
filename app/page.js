import { Link } from "lucide-react";


export default function Home() {
  return (
    <>
      <div className="h-dvh d-flex align-items-center justify-content-center">
        <h1>Home Page</h1>
        <Link href="/login">Login</Link>
      </div>
    </>
  );
}

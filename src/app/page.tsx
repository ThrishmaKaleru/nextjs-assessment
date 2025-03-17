"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); 

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => router.push("/product")}>click here to Go to /Product</button>
    </div>
  );
}

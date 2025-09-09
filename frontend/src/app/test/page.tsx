"use client";
import { useState } from "react";
import { pingHealth } from "@/lib/api";

export default function TestPage() {
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  const handlePing = async () => {
    setErr(null);
    try {
      const res = await pingHealth();
      setData(res);
    } catch (e: any) {
      setErr(e?.message ?? "Unknown error");
    }
  };

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Frontend ↔ Backend Test</h1>
      <button onClick={handlePing} className="border px-3 py-1 rounded">
        Ping /healthz
      </button>
      {data && <pre className="bg-gray-100 p-3 rounded">{JSON.stringify(data, null, 2)}</pre>}
      {err && <p className="text-red-600">Error: {err}</p>}
    </main>
  );
}

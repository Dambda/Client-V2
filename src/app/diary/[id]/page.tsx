"use client";

import { useParams } from "next/navigation";

export default function Diary() {
  const { id } = useParams();
  return <div>Diary ID: {id}</div>;
}

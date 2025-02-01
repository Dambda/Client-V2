import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/sign-in">/sign-in</Link> &nbsp; &nbsp;
      <Link href="/keyword-select">/keyword-select</Link> &nbsp; &nbsp;
      <Link href="/emotion-guide">/emotion-guide</Link> &nbsp; &nbsp;
    </div>
  );
}

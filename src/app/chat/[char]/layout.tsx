import { ReactNode } from "react";

export default function ChatLayout({
  list,
  children,
  info,
}: {
  list: ReactNode;
  children: ReactNode;
  info: ReactNode;
}) {
  return (
    <div>
      {list}
      {children}
      {info}
    </div>
  );
}

import { ReactNode } from "react";

export default function Layout({
  children,
  diary,
}: {
  children: ReactNode;
  diary: ReactNode;
}) {
  return (
    <div>
      {/* 달력 위젯 */}
      {children}
      {/* 일기 미리보기 위젯 */}
      {diary}
    </div>
  );
}

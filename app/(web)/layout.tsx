import { ReactNode } from "react";

interface WebLayoutProps {
  children: ReactNode;
}

export default function WebLayout({ children }: WebLayoutProps) {
  return <>{children}</>;
}

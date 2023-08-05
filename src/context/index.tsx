interface childrenType {
  children: React.ReactNode;
}
import React from "react";
import AppTheme from "./AppTheme";
export default function ContextProviders({ children }: childrenType) {
  return <AppTheme>{children}</AppTheme>;
}

import { useEffect } from "react";

export function useTitle(title) {
  const defaultTitle = "Arthur Soong's Annoyed Stoat | ITIS 3135";
  useEffect(() => {
    document.title = title ? `${defaultTitle} | ${title}` : `${defaultTitle}`;
  }, [title]);
}
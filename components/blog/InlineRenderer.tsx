import type { ReactNode } from "react";

export function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(`[^`]+`|https?:\/\/[^\s]+)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("`")) {
      parts.push(
        <code
          key={key++}
          className="font-mono text-[0.875em] px-1.5 py-0.5 rounded border bg-[#1f1d1d] border-[#2a2727] text-[#d4a574]"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 decoration-stone-500 hover:decoration-white text-stone-200 hover:text-white transition-colors break-all"
        >
          {token}
        </a>
      );
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return parts;
}

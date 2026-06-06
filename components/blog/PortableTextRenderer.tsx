"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

type CodeBlock = { _type: "code"; code?: string; language?: string };

const components: PortableTextComponents = {
  types: {
    code: ({ value }: { value: CodeBlock }) => (
      <pre className="font-mono text-[12px] sm:text-[14px] leading-relaxed border rounded px-3 sm:px-4 py-2.5 sm:py-3 my-2 overflow-x-auto bg-[#1f1d1d] border-[#2a2727] text-[#d4a574]">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    normal: ({ children }) => (
      <p className="font-serif text-[15px] sm:text-[17px] leading-[1.7] sm:leading-[1.75] text-stone-300">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-10 sm:mt-12 mb-3 sm:mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif font-bold text-xl sm:text-2xl text-white mt-10 sm:mt-12 mb-3 sm:mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif font-bold text-lg sm:text-xl text-white mt-8 sm:mt-10 mb-2 sm:mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-serif font-bold text-base sm:text-lg text-white mt-6 sm:mt-8 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-stone-600 pl-4 italic text-stone-400 font-serif text-[15px] sm:text-[17px] leading-[1.7]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="font-serif text-[15px] sm:text-[17px] leading-[1.7] sm:leading-[1.75] text-stone-300 list-disc space-y-1.5 pl-5 sm:pl-6">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="font-serif text-[15px] sm:text-[17px] leading-[1.7] sm:leading-[1.75] text-stone-300 list-decimal space-y-1.5 pl-5 sm:pl-6">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-stone-200">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="font-mono text-[0.875em] px-1.5 py-0.5 rounded border bg-[#1f1d1d] border-[#2a2727] text-[#d4a574]">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 decoration-stone-500 hover:decoration-white text-stone-200 hover:text-white transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export function PortableTextRenderer({ content }: { content: PortableTextBlock[] }) {
  return (
    <div className="space-y-5">
      <PortableText value={content} components={components} />
    </div>
  );
}

import type { ContentBlock } from "@/data/posts";
import { renderInline } from "./InlineRenderer";

export function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="font-serif font-bold text-xl sm:text-2xl text-white mt-10 sm:mt-12 mb-3 sm:mb-4">
          {block.value}
        </h2>
      );

    case "paragraph":
      return (
        <p className="font-serif text-[15px] sm:text-[17px] leading-[1.7] sm:leading-[1.75] text-stone-300">
          {renderInline(block.value)}
        </p>
      );

    case "code":
      return (
        <pre className="font-mono text-[12px] sm:text-[14px] leading-relaxed border rounded px-3 sm:px-4 py-2.5 sm:py-3 my-2 overflow-x-auto bg-[#1f1d1d] border-[#2a2727] text-[#d4a574]">
          <code>{block.value}</code>
        </pre>
      );

    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag
          className={`font-serif text-[15px] sm:text-[17px] leading-[1.7] sm:leading-[1.75] text-stone-300 space-y-1.5 pl-5 sm:pl-6 ${
            block.ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </Tag>
      );
    }

    default:
      return null;
  }
}

// utils/parser.ts
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import type { Root } from 'mdast';

export interface JsxBlock {
  type: 'section' | 'two-column' | 'heading' | 'paragraph' | 'list' | 'image' | 'code' | 'custom';
  className?: string;
  level?: number; // for headings
  content?: string | string[];
  children?: JsxBlock[];
  alt?: string;
  src?: string;
  caption?: string;
}

export function parseMarkdownToJsxAst(markdown: string): Root {
  const tree = unified().use(remarkParse).parse(markdown) as Root;
  return tree;
}

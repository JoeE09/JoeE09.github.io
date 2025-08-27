// utils/tsxGenerator.ts
import type { Root, Heading, Paragraph, List, ListItem, Image, RootContent } from 'mdast';

// function getStyles(node: Heading): {heading: string, styles: string} {
//   const rawText = extractRawText(node.children);
//   let isStyles = false;
//   let heading = '';
//   let styles = '';
//   for (const word of rawText.split(' ')) {
//     if (word === 'className')
//       isStyles = true;
//     else if (isStyles)
//       styles += word + ' ';
//     else
//       heading += word + ' ';
//   }
//   return {
//     heading: heading.trim(),
//     styles: styles.trim()
//   };
// }

function extractTextAndAttributes(
  input: string,
  returnObj = false
): { text: string; attr: Record<string, string> | string } {
  const attrPattern = /\b([\w:-]+)\s*=\s*(['"])(.*?)\2/g;
  const attributes: Record<string, string> = {};

  const textOnly = input.replace(attrPattern, (_, key, __, val) => {
    attributes[key] = val;
    return '';
  }).trim();

  return {
    text: textOnly,
    attr: returnObj
      ? attributes
      : Object.entries(attributes)
          .map(([k, v]) => `${k}="${v}"`)
          .join(' ')
  };
}

const tagMaps: Record<string, string> = {
  "strong": "strong",
  "emphasis": "em",
  "inlineCode": "code",
}

function extractRawText(nodes: RootContent[]): string {
  return nodes
    .map((node) => {
      if (node.type === 'text') return node.value;
      if ('children' in node && Array.isArray(node.children)) {
        return extractRawText(node.children as RootContent[]);
      }
      return '';
    })
    .join(' ');
}

function extractText(nodes: RootContent[]): string {
  return nodes
    .map((node) => {
      if (node.type === 'text') return node.value;
      if ('children' in node && Array.isArray(node.children)) {
        if (tagMaps[node.type]) return `<${tagMaps[node.type]}>${extractText(node.children)}</${tagMaps[node.type]}>`;
        return extractText(node.children as RootContent[]);
      }
      return '';
    })
    .join(' ');
}

const h1Map: Record<string, string> = {
  'Hero': 'ProjectHero',
  'Technologies': 'TechnologiesList',
  'Skills': 'SkillsList',
  'Demo': 'VideoDemo',
  'Links': 'Links',
}

type NestedListChild = string | NestedList;

interface NestedList {
  ordered: boolean;
  children: NestedListChild[];
}

function buildNestedList(node: List): NestedList {
  const result: NestedList = {
    ordered: !!node.ordered,
    children: []
  };

  for (const item of node.children) {
    const listItem = item as ListItem;
    const textParts: string[] = [];
    const sublists: NestedList[] = [];

    for (const child of listItem.children) {
      if (child.type === 'list') {
        sublists.push(buildNestedList(child as List));
      } else {
        textParts.push(extractText([child]));
      }
    }

    const text = textParts.join('').trim();
    if (text) {
      result.children.push(text);
    }

    // Append any nested lists after the text
    for (const nested of sublists) {
      result.children.push(nested);
    }
  }

  return result;
}

export function generateTsxFromMdast(tree: Root, slug: string, componentName: string, frontmatter: Record<string, unknown>): string {
  const lines: string[] = [];
  let indentLevel = 0;
  let lastHeader = '';
  let mainDropped = false;
  // let linksDropped = false;
  // let demoDropped = false;
  const lastHeaderArgs: string[] = [];
  const linkArgs: {label: string; href: string; icon?: string}[] = [];
  const heroBlocks: { title: string; bullets: string[] }[] = [];
  let wasMedia = false;
  const banner = frontmatter.banner || `/images/projectPages/${slug}-banner.png`;
  const demoVideo = frontmatter.demoVideo || `/videos/${slug}-demo.mp4`;
  const thumbnail = frontmatter.thumbnail || `/images/projectPages/${slug}-thumbnail.png`;
  const addLine = (line: string) => {
    lines.push('  '.repeat(indentLevel) + line);
  }
  const addTag = (tag: string) => {
    addLine(`<${tag}>`);
    indentLevel++;
  }
  const closeTag = (tag: string) => {
    indentLevel--;
    addLine(`</${tag}>`);
  }
  
  const renderNestedList = (list: NestedList, depth = 0) => {
    const tag = list.ordered ? 'ol' : 'ul';

    // Indent increases with depth, capped at ml-10 (adjust as needed)
    const indentClass = `ml-${Math.min(2 + depth * 4, 10)}`;
    const spacingClass = depth === 0 ? 'space-y-1 mb-2' : '';
    const typeClass = list.ordered ? 'list-decimal' : 'list-disc';

    addTag(`${tag} className="list-inside ${typeClass} ${indentClass} text-gray-700 ${spacingClass}"`);

    const children = list.children;
    for (let i = 0; i < children.length; i++) {
      const current = children[i];
      const next = children[i + 1];

      if (typeof current === 'string' && typeof next !== 'string' && next !== undefined) {
        addTag('li');
        addLine(current);
        renderNestedList(next, depth + 1);
        closeTag('li');
        i++; // skip next
      } else if (typeof current === 'string') {
        addLine(`<li>${current}</li>`);
      } else {
        addTag('li');
        renderNestedList(current, depth + 1);
        closeTag('li');
      }
    }

    closeTag(tag);
  }

  // const getImageFromParagraph = (node: Paragraph) => {
  //   if (!node.children || !Array.isArray(node.children) || node.children.length === 0) return false;
  //   const firstNode = node.children[0]
  //   if (firstNode.type !== 'image') return false;
  //   const altText = (firstNode as Image).alt || '';
  //   const rawText = extractText((node as Paragraph).children);
  //   const {text, attr} = extractTextAndAttributes(rawText, true);
  //   const className = (attr as Record<string, string>)["className"] || '';
  //   addTag(`div className="overflow-hidden mt-auto"`);
    
  //   addLine(`<img src="${(firstNode as Image).url}" alt="${altText}" className="w-full rounded shadow" />`);
  //   if (text) 
  //       addLine(`<p className="${className || "text-sm text-gray-500 italic mt-2 text-center"}">${text}</p>`);
  //   closeTag('div');
  //   return true;
  // }
  
  const handleLastHeader = (className="") => {
    if (lastHeader) {
      if (lastHeader === 'div') {
        closeTag(lastHeader);
      } 
      else if (lastHeader === 'Hero') {
        addLine(`<ProjectHero ${lastHeaderArgs.join(' ') || ''} `);
        indentLevel++;
        addLine(`sectionRef={sectionRef}`);
        addLine(`bannerImage="${banner}"`);
        addLine(`animationDelay={0.01}`);
        addLine(`title="${frontmatter.title || componentName}"`);
        addLine(`hero={{`);
        indentLevel++;
        addLine(`left: ${JSON.stringify(heroBlocks[0])},`);
        addLine(`right: ${JSON.stringify(heroBlocks[1])}`);
        indentLevel--;
        addLine(`}}`);
        indentLevel--;
        addLine(`/>`);
        heroBlocks.length = 0; // Clear hero blocks after use
        addTag(`main className="max-w-6xl px-6 py-10 mx-auto"`);
        mainDropped = true;
      }
      else if (lastHeader === 'Links') {
        addTag(`div className="flex justify-center mb-4"`);
        addLine(`<${h1Map[lastHeader]} ${lastHeaderArgs.join(' ') || ''} links={${JSON.stringify(linkArgs, null, 2)}} />`);
        closeTag('div');
        linkArgs.length = 0;
      }
      else if (lastHeader === 'Technologies' || lastHeader === 'Skills') {
        addTag(`section className="mt-10"`);
        addLine(`<h2 className="text-2xl font-semibold text-customGreen mb-4 text-center ${className}">${lastHeader} Used</h2>`);
        addLine(`<${h1Map[lastHeader]} ${lastHeaderArgs.join(' ')} />`);
        closeTag('section');

      }
      else if (h1Map[lastHeader]) {
        addLine(`<${h1Map[lastHeader]} ${lastHeaderArgs.join(' ') || ''} />`);
      }
      lastHeader = '';
      lastHeaderArgs.length = 0; // Clear previous args
    }
  }

  addLine(`import ProjectHero from "@/components/ProjectHero";`);
  addLine(`import Links from "@/components/ProjectLinks";`);
  addLine(`import VideoDemo from "@/components/VideoDemo";`);
  addLine(`import TechnologiesList from "@/components/TechnologiesList";`);
  addLine(`import SkillsList from "@/components/SkillsList";`);
  addLine(`import { useRef } from "react";`);
  addLine("");
  addLine(`export default function ${componentName}() {`);
  indentLevel++;
  addLine(`const sectionRef = useRef<HTMLDivElement>(null);`);
  addLine(`return (`);
  indentLevel++;
  addTag('div className="bg-white text-gray-900"');

  // Walk the tree
  const defaultHeader = "text-2xl font-semibold text-customGreen mb-2 text-center"
  for (const node of tree.children) {
    if (node.type === 'heading' && (node as Heading).depth === 1) {
      const rawText = extractRawText((node as Heading).children);
      const {text: heading, attr} = extractTextAndAttributes(rawText, true);
      const attributeString = Object.entries(attr)
                                .map(([k, v]) => `${k}="${v}"`)
                                .join(' ');
      const className = (attr as Record<string, string>)["className"] || '';
      handleLastHeader();
      if (node.children)
        for (const child of (node as Heading).children) {
          if (child.type === 'image') {
            addTag(`div className="overflow-hidden mt-auto ${className}"`);
            addLine(`<img src="${(child as Image).url}" alt="${(child as Image).alt || ''}" className="w-full rounded shadow" />`);
            wasMedia = true;
            continue;
          }
        }
      if (heading.replace(' ', '').toLowerCase() === 'twocolumns')
        addTag(`div className="grid grid-cols-1 md:grid-cols-2 gap-8 ${className}"`);
      else if (heading.replace(' ', '').toLowerCase() === 'twocolumns/')
        closeTag('div');
      else if (heading === 'Div') {
        addTag(`div className="${className}"`);
      }
      else if (heading === 'Div/') {
        closeTag('div');
      }
      else if (h1Map[heading]) {
        lastHeader = heading;
        lastHeaderArgs.push(`${attributeString}`);
        if (heading === 'Demo') {
          lastHeaderArgs.push(`video="${demoVideo}"`);
          lastHeaderArgs.push(`thumbnail="${thumbnail}"`);
        }
      }
    }
    if (node.type === 'heading' && (node as Heading).depth === 2) {
      const rawText = extractRawText((node as Heading).children);
      const {text: heading, attr} = extractTextAndAttributes(rawText, true);
      const className = (attr as Record<string, string>)["className"] || '';
      const divClass = (attr as Record<string, string>)["class"] || '';
      if (!mainDropped) {
        addTag(`main className="max-w-6xl px-6 py-10 mx-auto"`);
        mainDropped = true;
      }
      handleLastHeader();
      addTag(`div className="${divClass}"`);
      addLine(`<h2 className="${className === '' ? defaultHeader : className}">${heading}</h2>`);
      lastHeader = 'div';
    }
    if (node.type === 'heading' && (node as Heading).depth === 3) {
      const rawText = extractRawText((node as Heading).children);
      const {text: heading, attr} = extractTextAndAttributes(rawText, true);
      const className = (attr as Record<string, string>)["className"] || '';
      const divClass = (attr as Record<string, string>)["class"] || '';
      if (lastHeader === 'Hero' && heroBlocks.length < 2) {
        heroBlocks.push({
          title: extractRawText((node as Heading).children), 
          bullets: []});
      }
      else {
        handleLastHeader();
        addTag(`div className="${divClass}"`);
        addLine(`<h3 className="${defaultHeader} ${className}">${heading}</h3>`);
        lastHeader = 'div';
      }
    }
    if (node.type === 'paragraph') {
      const rawText = extractText((node as Paragraph).children);
      const {text, attr} = extractTextAndAttributes(rawText, true);
      const className = (attr as Record<string, string>)["className"] || '';
      if (wasMedia) {
        addLine(`<p className="${className || "text-sm text-gray-500 italic mt-2 text-center"}">${text}</p>`);
        closeTag('div');
        wasMedia = false;
      }
      else if (lastHeader == 'Links') {
        const args = text.split(/\r?\n/);
        if (args.length > 0)
          linkArgs.push({label: args[0], href: ''})
        if (args.length > 1)
          linkArgs[linkArgs.length - 1].href = args[1];
        if (args.length > 2)
          linkArgs[linkArgs.length - 1].icon = args[2];
      }
      else {
        if (lastHeader === 'Hero' && heroBlocks.length > 0) {
          handleLastHeader();
        }
        addLine(`<p className="${className || "text-md text-gray-700 mb-4"}">${text}</p>`);
      }
    }
    if (node.type === 'list') {
      if (lastHeader === 'Hero' || lastHeader === 'Technologies' || lastHeader === 'Skills' || lastHeader === 'Links' || lastHeader === 'Demo') {
        const newList: string[] = [];
        for (const item of (node as List).children) {
          newList.push(extractRawText((item as ListItem).children));
        }
        if (lastHeader === 'Hero' && heroBlocks.length > 0) {
          heroBlocks[heroBlocks.length - 1].bullets = newList;
        }
        else if (lastHeader === 'Technologies') {
          lastHeaderArgs.push(`technologies={${JSON.stringify(newList)}}`);
        }
        else if (lastHeader === 'Skills') {
          lastHeaderArgs.push(`skills={${JSON.stringify(newList)}}`);
        }
        else if (lastHeader === 'Demo') {
          if (newList.length > 0)
            lastHeaderArgs.push(`title="${newList[0]}"`);
          if (newList.length > 1)
            lastHeaderArgs.push(`caption="${newList[1]}"`);
        }
      }
      else {
        // Implement a function to handle nested lists here
        renderNestedList(buildNestedList(node as List));
      }
    }
    if (node.type === 'html') {
      if (!node.value.trim().startsWith('<!--')) {
        node.value.split(/\r?\n/).forEach((line) => {
          addLine(line.trim());
        });
      }
    }
  }
  handleLastHeader();
  closeTag('main');
  closeTag('div');
  addLine(`  );`);
  indentLevel--;
  addLine(`}`);

  return lines.join('\n');
}

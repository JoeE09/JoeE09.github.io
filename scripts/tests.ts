import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { Root} from 'mdast';
const project = path.resolve('./projects/vba-intellisense.md');
const { content, data } = matter(fs.readFileSync(project, 'utf-8'));
const tree = unified().use(remarkParse).parse(content) as Root;

fs.writeFileSync('output.json', JSON.stringify(tree, null, 2));
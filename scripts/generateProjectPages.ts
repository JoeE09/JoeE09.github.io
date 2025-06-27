// scripts/generateProjectPages.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { parseMarkdownToJsxAst } from './parser'; // to implement next
import { generateTsxFromMdast } from './tsxGenerator'; // to implement next

const PROJECTS_DIR = path.resolve('./projects');
const OUTPUT_DIR = path.resolve('./src/pages/projects');
const CONFIG_PATH = path.resolve('./projectPageConfig.json');

interface ProjectConfig {
  [slug: string]: {
    locked: boolean;
    lastGenerated?: string;
    outputFile?: string;
  };
}

function loadConfig(): ProjectConfig {
  if (!fs.existsSync(CONFIG_PATH)) return {};
  return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
}

function saveConfig(config: ProjectConfig) {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}

function slugFromFile(file: string): string {
  return path.basename(file, path.extname(file)).toLowerCase();
}

function pascalCase(str: string): string {
  return str
    .replace(/(^|[-_])(\w)/g, (_, __, c) => c.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function generateProjectPages() {
  const config = loadConfig();
  const files = fs.readdirSync(PROJECTS_DIR).filter(f => f.endsWith('.md'));
  ensureDir(OUTPUT_DIR);

  for (const file of files) {
    const slug = slugFromFile(file);
    const mdPath = path.join(PROJECTS_DIR, file);
    const { content, data } = matter(fs.readFileSync(mdPath, 'utf-8'));
    const componentName = pascalCase(slug);
    const tsxFilename = `${componentName}.tsx`;
    const tsxPath = path.join(OUTPUT_DIR, tsxFilename);

    if (config[slug]?.locked) {
      console.log(`🔒 ${slug} is locked. Skipping.`);
      continue;
    }

    const ast = parseMarkdownToJsxAst(content);
    const tsx = generateTsxFromMdast(ast, slug, componentName, data);

    fs.writeFileSync(tsxPath, tsx);
    console.log(`✅ Generated: ${tsxPath}`);

    config[slug] = {
      ...config[slug],
      locked: false,
      outputFile: `src/pages/projects/${tsxFilename}`,
      lastGenerated: new Date().toISOString(),
    };
  }

  saveConfig(config);
}

generateProjectPages().catch(err => {
  console.error("❌ Error generating project pages:", err);
  process.exit(1);
});

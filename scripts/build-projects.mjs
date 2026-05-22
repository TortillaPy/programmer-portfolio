import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const projectsDir = path.join(rootDir, 'projects');
const outputDir = path.join(rootDir, 'src', 'data');
const outputFile = path.join(outputDir, 'projects-generated.json');

// Ensure directories exist
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all JSON files
try {
  const files = fs.readdirSync(projectsDir)
    .filter(file => file.endsWith('.json'))
    .sort(); // Sort alphabetically to maintain consistent order

  const projects = [];
  files.forEach((file, index) => {
    const filePath = path.join(projectsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    try {
      const project = JSON.parse(content);
      
      // Auto-assign sequential ID if not present or preserve
      if (!project.id) {
        project.id = index + 1;
      }
      
      // Validate structure
      const requiredFields = ['title', 'category', 'description', 'challenge', 'outcome', 'tech'];
      for (const field of requiredFields) {
        if (project[field] === undefined) {
          console.warn(`[Warning] Project in "${file}" is missing required field "${field}"`);
        }
      }
      
      projects.push(project);
    } catch (err) {
      console.error(`[Error] Failed to parse JSON file: "${file}"`, err);
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2), 'utf8');
  console.log(`[Success] Compiled ${projects.length} projects into "${outputFile}"`);
} catch (error) {
  console.error('[Error] Failed to build projects list:', error);
  process.exit(1);
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const configPath = path.join(rootDir, 'src', 'data', 'github-config.json');
const outputPath = path.join(rootDir, 'src', 'data', 'projects-generated.json');

// Ensure parent directories exist
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Read github-config.json
let config = { username: 'TortillaPy', repositories: [] };
try {
  if (fs.existsSync(configPath)) {
    const rawConfig = fs.readFileSync(configPath, 'utf8');
    config = JSON.parse(rawConfig);
  } else {
    console.warn(`[Warning] Configuration file not found at "${configPath}". Using defaults.`);
  }
} catch (err) {
  console.error(`[Error] Failed to read config file at "${configPath}":`, err);
}

const { username, repositories } = config;
const finalProjects = [];

// Try to read existing generated file for caching/fallback
let cachedProjectsMap = new Map();
try {
  if (fs.existsSync(outputPath)) {
    const rawCached = fs.readFileSync(outputPath, 'utf8');
    const cachedArray = JSON.parse(rawCached);
    if (Array.isArray(cachedArray)) {
      cachedArray.forEach(p => {
        // Cache by name or codeUrl
        const repoName = p.codeUrl ? p.codeUrl.split('/').pop() : null;
        if (repoName) {
          cachedProjectsMap.set(repoName, p);
        }
      });
    }
  }
} catch (err) {
  console.warn(`[Warning] Could not parse existing generated file for fallback caching:`, err.message);
}

console.log(`[Info] Compiling ${repositories.length} repositories for user "${username}"...`);

for (let i = 0; i < repositories.length; i++) {
  const repoConfig = repositories[i];
  const repoName = repoConfig.name;
  const projectIdx = i + 1;

  console.log(`[GitHub API] Fetching details for "${username}/${repoName}"...`);
  
  let gitHubData = null;
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
      headers: {
        'User-Agent': 'programmer-portfolio-builder-agent'
      }
    });

    if (response.ok) {
      gitHubData = await response.json();
      console.log(`[GitHub API] Successfully retrieved details for "${repoName}".`);
    } else {
      console.warn(`[Warning] GitHub API returned status ${response.status} for "${repoName}". Using local config/cache fallback.`);
    }
  } catch (err) {
    console.warn(`[Warning] Network error fetching "${repoName}": ${err.message}. Using local config/cache fallback.`);
  }

  // Retrieve cached details if available
  const cachedProject = cachedProjectsMap.get(repoName) || {};

  // Build the merged project object
  const title = repoConfig.title || cachedProject.title || (repoName.charAt(0).toUpperCase() + repoName.slice(1).replace(/-/g, ' '));
  const category = repoConfig.category || cachedProject.category || 'backend';
  const description = repoConfig.description || (gitHubData && gitHubData.description) || cachedProject.description || 'No description available.';
  const challenge = repoConfig.challenge || cachedProject.challenge || 'Technical challenges successfully addressed.';
  const outcome = repoConfig.outcome || cachedProject.outcome || 'Quantifiable result verified.';
  
  // Merge tech lists: config tech, github topics, cached tech
  const configTech = repoConfig.tech || [];
  const gitHubTech = (gitHubData && gitHubData.topics) || [];
  const cachedTech = cachedProject.tech || [];
  const mergedTech = Array.from(new Set([
    ...configTech,
    ...gitHubTech,
    ...cachedTech
  ])).filter(t => typeof t === 'string' && t.trim() !== '');

  // URLs
  const codeUrl = (gitHubData && gitHubData.html_url) || repoConfig.codeUrl || cachedProject.codeUrl || `https://github.com/${username}/${repoName}`;
  const demoUrl = repoConfig.demoUrl || (gitHubData && gitHubData.homepage) || cachedProject.demoUrl || '#';

  finalProjects.push({
    id: projectIdx,
    title,
    category,
    description,
    challenge,
    outcome,
    tech: mergedTech.length > 0 ? mergedTech : ['TypeScript', 'Node.js'],
    demoUrl: demoUrl || '#',
    codeUrl
  });
}

// 4. Save results to projects-generated.json
try {
  fs.writeFileSync(outputPath, JSON.stringify(finalProjects, null, 2), 'utf8');
  console.log(`[Success] Compiled ${finalProjects.length} projects into "${outputPath}"`);
} catch (err) {
  console.error(`[Error] Failed to write projects list to "${outputPath}":`, err);
  process.exit(1);
}

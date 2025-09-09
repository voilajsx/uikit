#!/usr/bin/env node

/**
 * @fileoverview UIKit CLI - Unified command line interface for @voilajsx/uikit
 * @description Main CLI entry point with subcommands: create, bundle, serve, build, deploy
 * @package @voilajsx/uikit
 * @file /bin/uikit.js
 */

import { program } from 'commander';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read package.json for version
const packageJson = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8')
);

program
  .name('uikit')
  .description('🎨 UIKit CLI - Tools for @voilajsx/uikit development')
  .version(packageJson.version);

// Create command
program
  .command('create')
  .description('Create a new UIKit project')
  .argument('<name>', 'project name')
  .option('--spa', 'create single page application template')
  .option('--multi', 'create multi-page template with routing')
  .option('--single', 'create single-page theme showcase (default)')
  .option('--theme <theme>', 'default theme (default|aurora|neon|ruby|studio)', 'default')
  .action(async (name, options) => {
    const { createProject } = await import('./commands/create.js');
    await createProject(name, options);
  });

// Bundle command
program
  .command('bundle')
  .description('Bundle themes into CSS')
  .option('--output <path>', 'output file path')
  .option('--watch', 'watch for changes and rebuild')
  .option('--verbose', 'verbose logging')
  .action(async (options) => {
    const { bundleThemes } = await import('./commands/bundle.js');
    await bundleThemes(options);
  });

// Serve command
program
  .command('serve')
  .description('Start development server')
  .option('--port <number>', 'port number', '5173')
  .option('--restart', 'force restart (kill existing processes)')
  .option('--open', 'automatically open browser')
  .action(async (options) => {
    const { startServer } = await import('./commands/serve.js');
    await startServer(options);
  });

// Build command
program
  .command('build')
  .description('Build for production')
  .option('--outDir <dir>', 'output directory', 'dist')
  .option('--analyze', 'analyze bundle size')
  .action(async (options) => {
    const { buildProject } = await import('./commands/build.js');
    await buildProject(options);
  });

// Deploy command
program
  .command('deploy')
  .description('Generate static site for deployment')
  .option('--base <path>', 'base path for deployment', '/')
  .option('--github', 'optimize for GitHub Pages')
  .action(async (options) => {
    const { deployProject } = await import('./commands/deploy.js');
    await deployProject(options);
  });

// Parse arguments
program.parse();
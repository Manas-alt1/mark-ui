import fs from 'node:fs';
import path from 'node:path';

const pkgPath = path.resolve(process.cwd(), 'package.json');
const distPath = path.resolve(process.cwd(), 'dist');

function checkFile(filePath: string, label: string) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ [Preflight] ${label} NOT FOUND: ${filePath}`);
    process.exit(1);
  }
  const stats = fs.statSync(filePath);
  if (stats.size === 0) {
    console.error(`❌ [Preflight] ${label} IS EMPTY: ${filePath}`);
    process.exit(1);
  }
  console.log(`✅ [Preflight] ${label} checked`);
}

function runPreflight() {
  console.log('🚀 Running pre-publish safety checks...');

  // 1. Check package.json dependencies
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  if (pkg.dependencies && pkg.dependencies.tailwindcss) {
    console.error('❌ [Preflight] tailwindcss should NOT be in "dependencies"');
    process.exit(1);
  }
  console.log('✅ [Preflight] tailwindcss is not in dependencies');

  const peerDeps = pkg.peerDependencies || {};
  if (!peerDeps.react || !peerDeps['framer-motion']) {
    console.error('❌ [Preflight] react and framer-motion must be in "peerDependencies"');
    process.exit(1);
  }
  console.log('✅ [Preflight] peerDependencies confirmed');

  // 2. Check dist folder
  if (!fs.existsSync(distPath)) {
    console.error('❌ [Preflight] dist/ folder NOT FOUND. Run build first.');
    process.exit(1);
  }
  console.log('✅ [Preflight] dist/ folder exists');

  // 3. Check individual files
  checkFile(path.join(distPath, 'styles.css'), 'CSS bundle');
  checkFile(path.join(distPath, 'index.js'), 'ESM bundle');
  checkFile(path.join(distPath, 'index.cjs'), 'CJS bundle');
  checkFile(path.join(distPath, 'index.d.ts'), 'DTS file');

  // 4. Check for tailwind leakage in JS and ensure "use client" banner
  const esmContent = fs.readFileSync(path.join(distPath, 'index.js'), 'utf8');
  if (esmContent.includes('tailwindcss')) {
    console.error('❌ [Preflight] Found "tailwindcss" string in dist/index.js. Leakage detected!');
    process.exit(1);
  }
  if (!esmContent.startsWith("'use client';") && !esmContent.startsWith('"use client";')) {
    console.error('❌ [Preflight] "use client" banner is MISSING from dist/index.js');
    process.exit(1);
  }
  console.log('✅ [Preflight] No tailwind leakage detected and "use client" banner confirmed');

  console.log('\n✨ ALL PREFLIGHT CHECKS PASSED. READY TO PUBLISH!');
}

runPreflight();

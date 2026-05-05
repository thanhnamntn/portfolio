#!/bin/bash
set -e

echo "Committing to main..."
git add -A
git diff --cached --quiet || git commit -m "Update portfolio"
git push origin main

echo "Building..."
npx ng build --configuration production --base-href "/portfolio/"

echo "Deploying to GitHub Pages..."
npx ngh --dir=dist/Portfolio/browser --no-silent

echo "Done! https://thanhnamntn.github.io/portfolio/"

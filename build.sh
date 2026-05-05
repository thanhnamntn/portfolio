#!/bin/bash
set -e

echo "Committing to main..."
git add -A
git diff --cached --quiet || git commit -m "Update portfolio"
git push origin main

echo "Building..."
npx ng build --configuration production --base-href "/portfolio/"

echo "Deploying to GitHub Pages..."
git checkout gh-pages
git rebase main
cp -r dist/Portfolio/browser/. .
git add -A
git diff --cached --quiet || git commit -m "Deploy"
git push origin gh-pages
git checkout main

echo "Done! https://thanhnamntn.github.io/portfolio/"

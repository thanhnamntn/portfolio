#!/bin/bash
set -e

echo "Building..."
npx ng build --configuration production --base-href "/portfolio/"

echo "Deploying to GitHub Pages..."
npx ngh --dir=dist/Portfolio/browser --no-silent

echo "Done! https://thanhnamntn.github.io/portfolio/"

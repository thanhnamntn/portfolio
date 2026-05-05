#!/bin/bash
set -e

echo "Committing to main..."
git add -A
git diff --cached --quiet || git commit -m "Update portfolio"
git push origin main

echo "Done! GitHub Actions will build and deploy automatically."
echo "Track progress: https://github.com/thanhnamntn/portfolio/actions"

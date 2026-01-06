#!/bin/bash

# Script to close all Dependabot PRs that are superseded by the Gatsby 5 upgrade
# Run this locally with: bash close-dependabot-prs.sh

set -e

REPO="animysore/animysore.github.io"
COMMENT="Superseded by comprehensive Gatsby 5 and React 18 upgrade in #[PR_NUMBER]. This upgrade addresses all security vulnerabilities and brings the project up to date with modern dependencies."

echo "Closing Dependabot PRs for $REPO..."
echo ""

# List of Dependabot branches to close
BRANCHES=(
  "dependabot/npm_and_yarn/devcert-1.2.1"
  "dependabot/npm_and_yarn/gatsby-plugin-sharp-4.25.1"
  "dependabot/npm_and_yarn/jpeg-js-0.4.4"
  "dependabot/npm_and_yarn/loader-utils-1.4.2"
  "dependabot/npm_and_yarn/minimist-1.2.8"
  "dependabot/npm_and_yarn/moment-2.29.4"
  "dependabot/npm_and_yarn/nanoid-3.3.4"
  "dependabot/npm_and_yarn/parse-url-6.0.5"
  "dependabot/npm_and_yarn/qs-and-qs-and-body-parser-and-express-6.11.0"
  "dependabot/npm_and_yarn/shell-quote-and-gatsby-1.8.1"
  "dependabot/npm_and_yarn/socket.io-parser-4.0.5"
  "dependabot/npm_and_yarn/terser-5.14.2"
  "dependabot/npm_and_yarn/webpack-5.76.1"
  "dependabot/npm_and_yarn/xml2js-and-gatsby-plugin-sharp-and-gatsby-remark-images-and-gatsby-transformer-sharp--removed"
)

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "ERROR: GitHub CLI (gh) is not installed."
    echo "Install it from: https://cli.github.com/"
    echo ""
    echo "Alternative: Close PRs manually on GitHub:"
    echo "https://github.com/$REPO/pulls"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "ERROR: Not authenticated with GitHub."
    echo "Run: gh auth login"
    exit 1
fi

echo "Finding and closing PRs..."
echo ""

CLOSED_COUNT=0
SKIPPED_COUNT=0

for branch in "${BRANCHES[@]}"; do
    echo "Processing: $branch"

    # Find PR number for this branch
    PR_NUMBER=$(gh pr list --head "$branch" --state open --json number --jq '.[0].number' 2>/dev/null || echo "")

    if [ -z "$PR_NUMBER" ]; then
        echo "  ⚠️  No open PR found for this branch (may already be closed)"
        ((SKIPPED_COUNT++))
    else
        echo "  Found PR #$PR_NUMBER"

        # Close the PR with a comment
        gh pr close "$PR_NUMBER" --comment "$COMMENT" --delete-branch

        echo "  ✅ Closed PR #$PR_NUMBER and deleted branch"
        ((CLOSED_COUNT++))
    fi

    echo ""
done

echo "======================================"
echo "Summary:"
echo "  Closed: $CLOSED_COUNT PRs"
echo "  Skipped: $SKIPPED_COUNT PRs (already closed or not found)"
echo "======================================"
echo ""
echo "All Dependabot PRs have been processed!"

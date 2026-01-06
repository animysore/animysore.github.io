# Closing Dependabot PRs

All 14 Dependabot PRs are now superseded by the comprehensive Gatsby 5 and React 18 upgrade completed in this PR.

## Quick Method (Recommended)

Run the provided script:

```bash
bash close-dependabot-prs.sh
```

**Prerequisites:**
- Install GitHub CLI: `brew install gh` (Mac) or [download here](https://cli.github.com/)
- Authenticate: `gh auth login`

## One-Liner Method

If you have `gh` CLI installed and authenticated:

```bash
gh pr list --author app/dependabot --state open --json number --jq '.[].number' | xargs -I {} gh pr close {} --comment "Superseded by comprehensive Gatsby 5 and React 18 upgrade" --delete-branch
```

## Manual Method

If you prefer to close them manually, visit: https://github.com/animysore/animysore.github.io/pulls

Close these 14 PRs with the comment:
> Superseded by comprehensive Gatsby 5 and React 18 upgrade. This upgrade addresses all security vulnerabilities and brings the project up to date with modern dependencies.

### List of Dependabot PRs to Close:

1. `dependabot/npm_and_yarn/devcert-1.2.1`
2. `dependabot/npm_and_yarn/gatsby-plugin-sharp-4.25.1`
3. `dependabot/npm_and_yarn/jpeg-js-0.4.4`
4. `dependabot/npm_and_yarn/loader-utils-1.4.2`
5. `dependabot/npm_and_yarn/minimist-1.2.8`
6. `dependabot/npm_and_yarn/moment-2.29.4`
7. `dependabot/npm_and_yarn/nanoid-3.3.4`
8. `dependabot/npm_and_yarn/parse-url-6.0.5`
9. `dependabot/npm_and_yarn/qs-and-qs-and-body-parser-and-express-6.11.0`
10. `dependabot/npm_and_yarn/shell-quote-and-gatsby-1.8.1`
11. `dependabot/npm_and_yarn/socket.io-parser-4.0.5`
12. `dependabot/npm_and_yarn/terser-5.14.2`
13. `dependabot/npm_and_yarn/webpack-5.76.1`
14. `dependabot/npm_and_yarn/xml2js-and-gatsby-plugin-sharp-and-gatsby-remark-images-and-gatsby-transformer-sharp--removed`

## Why Close These?

All individual dependency updates addressed by these Dependabot PRs are now included in the comprehensive upgrade:
- Gatsby 4.3 → 5.15
- React 17 → 18
- All security vulnerabilities addressed
- All plugins updated to compatible versions

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based static site for Red Hat certification exam notes, specifically for RH124 and RH134 certifications. The site uses the Minimal Mistakes theme and is deployed to GitHub Pages.

## Development Commands

### Running the site locally

```bash
bundle exec jekyll serve
```

For development mode with local configuration overrides:

```bash
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

This runs the site at `http://localhost:4000` with analytics disabled and expanded CSS for debugging.

### Installing dependencies

```bash
bundle install
```

## Site Architecture

### Content Organization

- **_posts/**: Blog posts for certification notes, named with date prefix (YYYY-MM-DD-title.md)
  - Posts are categorized by Red Hat course (RH124, RH134)
  - Each post uses front matter with layout, title, author, categories, and tags

- **_pages/**: Static pages including About, Services pages, and the post archive

- **_data/**: YAML configuration files
  - `navigation.yml`: Site navigation menu structure
  - `authors.yml`: Author information
  - `sidebars/`: Sidebar navigation configurations

- **_includes/**: Custom HTML includes (e.g., footer.html)

- **assets/images/**: Image assets for the site

### Configuration

- **_config.yml**: Main Jekyll configuration
  - Uses remote theme: mmistakes/minimal-mistakes
  - Configured for GitHub Pages deployment
  - Includes Google Analytics (G-JK6WYLH9WJ)
  - Disqus comments integration (shortname: mtechsolutions)
  - Collections: RH124, RH134 for organizing certification content

- **_config.dev.yml**: Development overrides
  - Disables analytics
  - Uses localhost:4000 URL
  - Expands CSS for debugging

### Post Structure

Blog posts follow this front matter pattern:

```yaml
---
layout: single
title: "Post Title"
author: Stephen Mahon
categories:
  - RH124  # or RH134
tags:
  - rhel
  - linux
  - [topic-specific tags]
---
```

Posts automatically get:
- Table of contents (toc: true)
- Author profile
- Read time estimation
- Related posts
- Social sharing buttons
- Disqus comments

## Domain and Deployment

- Production URL: http://www.mtechsolutions.ie
- CNAME configured for custom domain
- Repository: mahons/redhat-notes
- Deployed via GitHub Pages

## Ruby/Jekyll Dependencies

- Uses github-pages gem (~> 228) for GitHub Pages compatibility
- Key plugins: jekyll-feed, jekyll-include-cache, jekyll-paginate, jekyll-sitemap
- Webrick gem for local development server

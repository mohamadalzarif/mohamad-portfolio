# Fieldnotes & Systems Design System

## Concept

“Fieldnotes & Systems” is an interactive research dossier for Mohamad Al-Zarif: part archival field notebook, part systems map, part technical portfolio. The interface should make the connection between socio-technical research and engineering legible without turning the site into a generic developer portfolio.

## Design Principles

- Editorial first: prioritize argument, context, and reading flow over decorative effects.
- Archival texture: use paper-like warmth, metadata labels, document structures, timelines, and research-card groupings.
- Systems clarity: show relationships between research themes, technical work, places, institutions, and methods.
- Calm experimentation: use subtle interaction and restrained motion only when it clarifies hierarchy or connection.
- Accessibility by default: preserve semantic structure, keyboard paths, visible focus, contrast, and reduced-motion support.

## Visual Direction

- Mood: intelligent, calm, archival, grounded, slightly experimental.
- Surfaces: dark readable base with warm paper accents and muted borders.
- Texture: subtle grid, dossier, marginalia, index-card, and fieldnote references.
- Motion: restrained reveals, hover states, and transitions tied to navigation or comprehension.
- Avoid: neon cyberpunk, purple-blue AI gradients, particle backgrounds, emoji icons, excessive scroll effects, and template-like hero layouts.

## Information Architecture

- Hero: immediate statement of who Mohamad is, what he studies/builds, and why sociology plus computer science matters.
- Research dossier: thesis, field sites, methods, and recurring questions.
- Systems work: technical projects framed by problem, constraints, implementation, and learning.
- Timeline: education, experience, research, internships, residence life, and community work.
- Field index: themes such as surveillance, gendered citizenship, political participation, youth precarity, Cairo, Beirut, digital ethnography, and urban space.
- Contact: clear routes for research, technical, and collaboration inquiries.

## Component Language

- Research cards: title, short abstract, metadata row, tags, and optional linked evidence.
- Dossier panels: dense but readable sections for thesis, methods, and experience.
- Timeline entries: date, role, institution, place, outcome, and related themes.
- System cards: project, stack, technical focus, constraints, and result.
- Metadata labels: consistent small caps or compact labels for place, method, year, stack, and theme.
- Navigation: simple, persistent, descriptive, and keyboard-friendly.

## Content Tone

- Use precise, concrete language.
- Explain significance, not just responsibilities.
- Connect technical work to research judgment where relevant.
- Avoid inflated claims, filler copy, and generic “passionate developer” framing.

## Implementation Guardrails

- Use Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Motion for React, and Lucide React as already specified.
- Keep content in `src/data`.
- Keep sections in `src/components/sections`.
- Keep UI primitives in `src/components/ui`.
- Keep utilities in `src/lib`.
- Do not add authentication, database, CMS, payment tooling, complex backend, unnecessary animation libraries, or heavy 3D without explicit approval.


# AGENTS.md

## Project identity

This is the personal portfolio of Mohamad Al-Zarif, a socio-technical researcher and builder whose work connects sociology-anthropology, computer science, surveillance studies, gendered citizenship, political participation, youth precarity, Cairo, Beirut, international education, and ethical technology.

The portfolio concept is “Fieldnotes & Systems”: an interactive research dossier, not a generic developer portfolio.

## Stack

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion for React
- Lucide React
- Local TypeScript content files
- Netlify deployment

Do not add:
- Authentication
- Database
- CMS
- Payment tools
- Complex backend
- Unnecessary animation libraries
- Heavy 3D unless explicitly approved

## Design rules

The site should feel editorial, intelligent, calm, archival, and slightly experimental.

Avoid:
- Generic developer portfolio templates
- Neon cyberpunk
- Random particle backgrounds
- Overused purple-blue AI gradients
- Excessive scroll effects
- Decorative motion that does not clarify meaning
- Emoji icons
- Lorem ipsum

Use:
- Strong typography
- Warm paper-like accents
- Dark readable surfaces
- Research-card layouts
- Timeline structures
- Metadata labels
- Subtle grid or archive textures
- Restrained transitions
- Generous spacing

## UI/UX rules

Follow good UI/UX practice:
- Clear information hierarchy
- Mobile-first responsive layout
- Keyboard navigability
- Visible focus states
- Accessible color contrast
- Semantic HTML
- Reduced-motion support
- Descriptive links and buttons
- No icon-only buttons without accessible labels
- No hidden essential content behind hover-only interactions

## Implementation rules

Before coding:
1. Read design-system/MASTER.md if it exists.
2. If it does not exist, create it first.
3. Implement reusable components.
4. Keep content in src/data.
5. Keep sections in src/components/sections.
6. Keep UI primitives in src/components/ui.
7. Keep utilities in src/lib.

After coding:
- Run npm run lint.
- Run npm run build.
- Fix all TypeScript, lint, hydration, and build errors.
- Report the final file tree and deployment steps.

## Content priorities

The first screen must immediately communicate:
- Who Mohamad is
- What he works on
- Why his combination of sociology and computer science matters

Important content:
- Thesis: “Contested Surveillance: Gendered Citizenship and Political Participation in Egypt and Lebanon”
- Research themes: surveillance, gendered citizenship, political participation, precarious youth, Cairo, Beirut, digital ethnography, urban space
- Technical skills: C++, C, Python, Java, Rust, Verilog, Django, HTML/CSS, JavaScript, MySQL, SQLite, Git, Salesforce/Apex, Qt, Linux, shell scripting, LaTeX
- Projects: Pipelined RISC-V Processor, Linux Disk Analyzer, Disassembler, Hotel Reservation System, Digital Lock, Library Book System, Digital Twin for Smart Systems, Rooftop Gardening in AUC Residences
- Experience: IPSO Officer at AUC, Graduate TA, Resident Advisor, Salesforce Development Intern, Data Analyst Intern, Resident Advisor, volunteer/project coordination in Beirut
- Languages: Arabic, English, French
His resume is also in the folder for reference.
## Netlify

The site must be deployable to Netlify using the standard Next.js flow.

Use:
npm run build

Add a minimal netlify.toml if useful.
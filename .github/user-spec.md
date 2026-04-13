# Comprehensive UI Design Specification Prompt for an Automotive Technical Documentation Website

**Goal:** Create a detailed, modern, and highly functional User Interface (UI) design specification for a comprehensive website dedicated to automotive engine diagnostics, repair, and testing procedures. The design must be optimized for technical readability, fast access to information, and seamless content management.

**Target Audience:**

- **Primary (Users):** Automotive technicians (mechanics) in a busy garage environment. They need quick, clear, mobile-friendly access to complex diagrams, step-by-step procedures, and trouble codes. They may operate in low-light conditions.
- **Secondary (Administrators):** Technical experts who create and update the documentation. They require an intuitive Content Management System (CMS) to upload text, images, and other media without coding.

**Design Aesthetic:** Modern, clean, and highly structured, similar to popular technical documentation platforms (e.g., GitBook, Docusaurus). Focus on information hierarchy, readability, and accessibility. Employ a technical yet approachable visual language.

## Required Skill Set (for the Agent interpreting this prompt)

1.  **UI/UX Design expertise:** Strong understanding of technical documentation UX best practices, information architecture, and hierarchical content presentation.
2.  **Figma/Design System creation:** Ability to define a reusable design system (typography, color palette, components) and apply it across all pages.
3.  **Content Management Systems (CMS) UX:** Experience designing intuitive interfaces for non-technical users to create, organize, and edit structured content.
4.  **Frontend Web Development (Principles):** Knowledge of responsive design, CSS Grid/Flexbox for structured layouts, and mobile-first principles. Understanding of the visual behavior of features like anchor links and collapsible menus.
5.  **Technical Documentation Best Practices:** Awareness of features like automatic TOC generation, breadcrumb navigation, and powerful search functionality.
6.  **Accessibility (WCAG):** Ensure compliance with accessibility standards (e.g., color contrast, keyboard navigation).
7.  **Responsive Web Design:** Expert level mobile-first design thinking.

## Rules & Constraints for Design Output

1.  **Output Format:** Provide the full design specification in a comprehensive, structured text-based format suitable for another agent or designer to build. _Do not output image assets or final code._ Just describe the full UI.
2.  **Scope:** Focus solely on the User Interface (visual structure, layout, typography, interactions). Do not design the underlying technical stack (database, APIs, server architecture).
3.  **Detailed Page Specifications:** Provide exhaustive details for **every required page** (User-facing and Admin). Don't just list elements; describe their function, placement, and interaction.
4.  **Mobile-First Priority:** Explicitly detail how each user-facing page adapts to mobile screens, prioritizing key information and controls (e.g., fixed menus, prominent search).
5.  **No Core Logic Code:** Avoid complex programming logic (e.g., how the backend calculates a trouble code). Just specify the UI to display the inputs and outputs.
6.  **Use Pseudocode for Structure:** Where helpful, use basic pseudocode comments (e.g., `/* Main Container (Flexbox) */`, `/* Sidebar (Fixed position) */`) to illustrate the desired CSS layout structure within the textual descriptions.
7.  **Stick to Specific Core Pages:** Define the complete UI for the identified user and admin pages only. Do not invent new sections unless critical for core functionality.
8.  **Technical Tone:** Maintain a precise, technical tone in the specifications.

## Core Page Detailed Specifications

### A. User-Facing Pages (Optimized for Readability & Mobile)

#### 1. Home Page / Knowledge Base Portal

- **Goal:** First entry point. Quickly guide users to categories or use powerful search.
- **Header (Global):**
  - Company Logo (left), clickable to Home.
  - Persistent Global Search Bar (center) with auto-suggestions.
  - (Right) User Menu (login/profile) + Dark Mode Toggle Switch.
- **Hero Section:** Prominent welcome message + a direct call-to-action to use the search.
- **Categories/Taxonomy Section (Main Body):**
  - A grid of interactive cards, each representing a major category (e.g., "Automakers," "Engine Systems," "Common Trouble Codes").
  - Cards include a clear icon, category title, and a brief description. Hover effects for interaction.
- **Recent Procedures / Popular Topics:** A dynamic list of links to recently updated or frequently viewed documentation pages.
- **Footer:** Copyright information, links to Admin Login page, and basic site links (About, Contact).

#### 2. Category / Topic Listing Page

- **Goal:** Display all documentation pages within a specific category or sub-category.
- **Global Header (Retained).**
- **Breadcrumb Navigation:** Clear hierarchy (e.g., Home > Toyota > Engine > Diagnosing Missfires).
- **Page Title:** Large, prominent category title.
- **List of Topics:**
  - A structured list or grid of links to individual procedure pages.
  - Each link shows the title, a short excerpt/description, and perhaps document metadata (last updated date).
- **Filtering/Sorting:** A simple interface to sort topics (e.g., by date, title) and perhaps filter by sub-category.

#### 3. Documentation Detail Page (Crucial Page)

- **Goal:** The primary interface for reading step-by-step procedures. Must prioritize readability.
- **Global Header (Retained).**
- **Left Sidebar (Hierarchical Navigation):**
  - Collapsible tree structure of categories and articles. Highlights the current page. Always visible on desktop. On mobile, it's a fixed button (`/* Hamburger Menu (Mobile-Only) */`) that opens a slide-out drawer.
- **Main Content Area:**
  - Page Title (Large H1).
  - Breadcrumbs (above title).
  - Meta Info: Author, Last Updated Date.
  - **Rich Text Content:** Step-by-step text, clear H2/H3 headings for sub-steps, high-quality images with descriptive captions. Blockquotes for notes/warnings. Code blocks for specific trouble codes (e.g., `P0300`).
  - **Image Zoom:** Click on an image to open it in a fullscreen lightbox for detailed viewing.
  - **Anti-Copy & Anti-Right Click (Security Description):** Describe a translucent, non-intrusive text overlay on the content that reads "©[Company Name] - Internal Use Only." Right-clicking content is disabled with a browser-default "Paste/Inspect is disabled" visual feedback style (perhaps with a simple, non-blocking toast message).
  - **Watermarks:** Describe logo watermarks programmatically overlaid on all content images at the time of creation (Admin side logic, visual spec is image + logo).
- **Right Sidebar (Automatic Table of Contents - TOC):**
  - `/* Right Sidebar (Fixed, Scrolls with Content) */`.
  - A dynamic list of clickable anchor links generated directly from H2 and H3 headings in the main content.
  - Visually highlights the active section as the user scrolls. Clicking a link smoothly scrolls (`/* smooth-scroll (visually) */`) the main content to that exact section.
- **Feedback/Comments (Optional):** A simple form for users to leave comments or questions under the procedure.
- **Prev/Next Article Buttons:** Links to navigate the documentation sequentially.
- **Responsive Mobile Layout:**
  - Left sidebar becomes a bottom-bar fixed navigation button.
  - Global search is always accessible.
  - Right TOC sidebar becomes a collapsible/expandable button near the top of the content (`/* Fixed position (Mobile-Only) */`).
- **Global Footer (Retained).**

### B. Admin-Facing Pages (Content Management System)

#### 4. Admin Dashboard (Overview)

- **Goal:** Post-login summary of site activity and content status.
- **Global Header:** User profile, main site link, logout.
- **Sidebar Navigation (Admin):** Hierarchical links to create/manage posts, categories, media, users, settings.
- **Summary Cards:** Dynamic widgets showing key stats: Total Articles, Newest Articles, Recent User Comments, Most Popular Articles. Quick links to create a new article.

#### 5. Create / Edit Documentation Post Page (Crucial Admin Page)

- **Goal:** A powerful interface for technical authors to create structured documentation.
- **Page Title:** Dynamic based on creation/editing.
- **Content Editor (Main Body):**
  - A robust Rich Text Editor (e.g., CKEditor or TinyMCE) with technical formatting options: bold, italic, bullet/numbered lists, all heading levels (H1-H6, crucial for TOC).
  - Embed images easily from the Media Library.
  - Insert code blocks (for trouble codes).
  - Create tables.
- **Article Meta / Settings (Right Sidebar/Accordions):**
  - Title Input.
  - Category Selection (Hierarchical tree/dropdown).
  - **TOC Settings:** Toggle auto-generation, specify which heading levels to include.
  - **Media Gallery Embed:** Select/upload multiple images to include in the content. Add captions.
  - **Security Settings:** Toggles for anti-copy features and watermark placement.
- **Preview Mode:** A prominent button to view the document exactly as a user would, before publishing.
- **Publishing Workflow:** Draft, In Review, Published status, scheduling.
- **Responsive Mobile Layout:** Editor expands to full width. Meta/settings accordions stack below the editor.

#### 6. Category / Taxonomy Management Page

- **Goal:** Manage the site's hierarchical structure.
- **Category Tree View:** An interactive, drag-and-drop tree interface for organizing automakers, systems, and sub-systems.
- **Create/Edit Category Form:** Add title, description, parent category, icon. Assign metadata fields.

#### 7. Media Library Management Page

- **Goal:** Upload, organize, and manage images, PDFs, and potentially video files.
- **Global Search / Filtering:** Search by filename, filter by file type.
- **Bulk Actions:** Select multiple files for deletion or assignment.
- **Detailed View:** Shows file info, size, allows editing metadata (e.g., image caption, alt text). Specify watermark logic is applied visually here too (original + logo overlaid).

### Visual Design System

- **Color Palette:** Clean, professional technical theme. Primarily neutral greys, with a bold accent color (e.g., technical blues, safety orange). Dark Mode must be a direct color inversion or optimized theme.
- **Typography:** Clear, highly legible sans-serif font family (e.g., Open Sans, Roboto) optimized for digital screens and readability. Strict hierarchy for headings. Monospaced font for code snippets and trouble codes.
- **Iconography:** Simple, clean, universal line icons. No heavy textures or complex illustrations.

**Constraints Checklist for Agent Output:**

- [ ] Full-page detailed specifications provided for all 7 listed pages.
- [ ] Each specification details layout, components, and primary functionality.
- [ ] Mobile-first design priority explicitly stated for each user-facing page.
- [ ] No logic code included (just UI pseudocode and textual descriptions).
- [ ] Strict adherence to Markdown-only output.
- [ ] All constraints on output format and rules followed.
- [ ] Specific features like auto-TOC, security overlays, and responsive mobile behavior fully detailed.

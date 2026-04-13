# Admin UI Design Specification - Automotive Documentation CMS

## 1. Goal

Build an Admin Dashboard (CMS) UI for managing automotive technical documentation.
The design must be optimized for fast content creation, editing, and management.

## 2. Core Principles

- Admin is a tool, not a reading interface.
- Minimize clicks and friction.
- Keep UI clean, structured, and efficient.
- **CRITICAL:** Reuse the design system from the User UI (Phase 1).
- Responsive (desktop-first, but strictly mobile-supported).

## 3. Global Constraints & Project State

- **No Comments in Code:** Do NOT generate any comments inside the source code files. Output pure executable code only.
- **Color Palette (Inherited):** Ocean Deep (Deep ocean blues as primary, light gray backgrounds, high-contrast accent colors for action buttons).
- **Typography (Inherited):**
  - Headings (H1-H6): Sora
  - Body Text / UI Elements: Manrope Sans
- **Layout Structure:**
  - Sidebar: Fixed left (260px width).
  - Main Content: Takes remaining width, scrollable, padding 24px.

## 4. Global Components

### Sidebar Navigation

- **Items:** Dashboard, Posts, Categories, Media Library, Users, Settings.
- **Behavior:** Highlight active item. Collapsible (icon-only mode). On mobile: becomes a slide-out drawer.

### Header

- Positioned at the top.
- Right side: User Avatar + Logout button.
- Optional: Global search bar.

## 5. Page Specifications

### Page 1: Dashboard

- **Purpose:** Show an overview of the system.
- **Components:**
  - Statistic cards: Total Articles, New Articles, Comments, Popular Articles.
  - Recent activity list.
- **Layout:** Grid with responsive columns.

### Page 2: Posts Management

- **Purpose:** Manage all documentation posts.
- **Components:** Search input (by title), Filter (category, status), Table list.
- **Table Columns:** Title, Category, Status (Draft / Published), Last Updated, Actions (Edit / Delete).

### Page 3: Create / Edit Post (CRITICAL PAGE)

- **Layout:** Two columns (Left: Editor, Right: Settings panel).
- **Editor (Left):**
  - Use a rich text editor component.
  - Features: Headings (H1-H6), Bold/Italic, Lists, Code blocks (for trouble codes), Image embedding, Tables.
- **Settings Panel (Right):**
  - **Article Info:** Title input, Slug (auto-generated).
  - **Category:** Hierarchical tree dropdown.
  - **TOC Settings:** Toggle auto-generate TOC, Select heading levels.
  - **Media:** Upload images, Select from library, Add captions.
  - **Security:** Toggles for Anti-copy overlay, Disable right-click, Watermark images.
- **Actions:** Save Draft, Publish, Preview.

### Page 4: Category Management

- **Layout:** Left column (category tree), Right column (edit form).
- **Features:** Create/edit categories, hierarchical structure, drag-and-drop reorder.
- **Form fields:** Name, Description, Parent category, Icon.

### Page 5: Media Library

- **Purpose:** Manage uploaded files.
- **Features:** Grid display, Upload files, Search by filename, Filter by type, Bulk select.
- **Media Detail View:** Preview, File info, Edit caption/alt text, Watermark preview.

### Page 6: Users Management

- **Features:** List users, Assign roles (Admin, Editor).
- **Table:** Name, Email, Role, Actions.

### Page 7: Settings

- **Sections:** General settings, Branding (logo, watermark), Security settings.

## 6. Responsive Behavior

- **Mobile:** Sidebar becomes a drawer. Editor takes full width. Settings panel moves below the editor. Action buttons become fixed at the bottom of the viewport.

## 7. UX Enhancements

- Auto-save drafts.
- Toast notifications for actions.
- Confirm dialogs before deletion.
- Loading skeletons for asynchronous data fetching.

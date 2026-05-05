# React Posts App

A React + Vite application for managing posts, built as part of a learning exercise to practice modern React concepts, routing, and API integration.

---

## Features

### Routing & Navigation
- Home page (`/`) – clean welcome screen
- Posts page (`/posts`) – main working area
- About page (`/about`)
- 404 Page Not Found for invalid routes

---

### Posts Management
- Display posts list
- View a single post (`/posts/:postId`)
- Edit post content (Edit / Save / Cancel)
- Add a new post (`/posts/new`)
- Navigate back to posts list
- Log all posts to the console

---

### State Management
- Centralized state in the Posts layout component
- Data shared across components using `useOutletContext`
- Dynamic UI updates after:
  - Adding a post
  - Editing a post
  - Deleting a post

---

### API Integration
- Fetch posts from:
  https://jsonplaceholder.typicode.com/posts

- Data mapping:
  - `title` → post title
  - `body` → post content

- Implemented using:
  - `useEffect` for data fetching
  - `useState` for state management

---

### UI States
- Loading state (`Loading...`)
- Error handling for failed API requests

---

### UI & Styling
- Clean multi-page layout (no popups)
- Fixed Header with navigation (NavLink + active state)
- Dynamic content area using React Router `Outlet`
- CSS Modules for scoped styling
- Responsive and modern UI design

---

## Main React Concepts Practiced

- Components architecture
- Props & component communication
- Lifting state up
- useState
- useEffect
- Controlled components (forms)
- Conditional rendering
- Event handling
- React Router (Routes, NavLink, Outlet, Params, Navigation)
- Context sharing via `useOutletContext`
- Working with external APIs (fetch)

---

## How to run the project

```bash
npm install
npm run dev
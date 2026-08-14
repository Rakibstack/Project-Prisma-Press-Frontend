
# 📰 Prisma Press — Frontend

A modern and responsive news publishing platform built with **Next.js, TypeScript, Tailwind CSS, and shadcn/ui**.

Prisma Press allows users to explore public news, access premium content through subscriptions, create and manage their own posts, and interact with a role-based dashboard.

---

## 🚀 Live Demo

🔗 **Live Website:** `YOUR_LIVE_URL`

🔗 **Backend Repository:** `YOUR_BACKEND_REPOSITORY_URL`

---

## ✨ Features

### 📰 News

- Browse public news
- Explore premium news
- News details page
- Featured news
- News categories/tags
- View count
- Comment count
- Responsive news cards
- Premium content indication

### 🔐 Authentication

- User registration
- User login
- Logout
- Access token authentication
- Refresh token flow
- HTTP-only cookies
- Protected routes
- Role-based route protection

### 👥 Role-Based Access

Prisma Press supports multiple user roles:

- `USER`
- `AUTHOR`
- `ADMIN`

Each role has access to its own protected dashboard.

```text
USER
  ↓
/dashboard

AUTHOR
  ↓
/author-Dashboard

ADMIN
  ↓
/admin-Dashboardgit add 
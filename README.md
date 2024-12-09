# Next.js Project Management App

A project management application built with **Next.js**, **PostgreSQL**, and **Redux**. This app allows users to manage projects, track tasks, and collaborate effectively with team members.

## Features

- **User Authentication**: Secure user login and registration. (ongoing)
- **Project Management**: Create, update, and delete projects.
- **Task Tracking**: Assign tasks to projects and track their progress.
- **Redux State Management**: Centralized state for seamless application performance.
- **PostgreSQL Database**: Robust and scalable database integration.
- **Responsive UI**: Optimized for all devices.

## Tech Stack

### Frontend
- [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation.
- [Redux](https://redux.js.org/) - State management library.

### Backend
- [PostgreSQL](https://www.postgresql.org/) - Relational database management system.
- [Prisma](https://www.prisma.io/) - ORM for PostgreSQL integration.

### Others
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for improved developer experience.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-management-app.git
   cd project-management-app
   
2. Install dependencies:
   ```bash
   npm install
   
3. Set up the environment variables: Create a .env file in the root directory and add the following:
   ```bash
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
   JWT_SECRET=your_jwt_secret

4. Set up the database:
   ```bash
   npx prisma migrate dev
   
5. Run the development server:
   ```bash
   npm run dev

# RBAC-Dashboard

This project is a Role-Based Access Control (RBAC) Task Management System built with [Next.js](https://nextjs.org). It allows administrators to manage users and tasks through a dynamic dashboard. Key features include user role management, task assignment, and task tracking, all designed with responsive and modern UI components.

## Features

### User Management
- View a list of users and filter them by role or status (Active/Inactive).
- Change user roles dynamically (Admin, Editor, User).
- Delete users (Admin-only functionality).

### Task Assignment
- Assign tasks to users through a modal form specifying task title and description.
- Tasks are linked to specific users for easy tracking.

### Task Management
- View all assigned tasks in a card-based layout on the Task Page.
- Each task card displays the task title, description, and the user ID it is assigned to.
- Admins can delete tasks directly from the Task Page.

### Role-Based Access
- Only Admin users have permission to manage users, assign tasks, and delete tasks.
- Non-admin users have restricted access to certain features.

### Responsive Design
- The application is fully responsive, ensuring usability on desktops, tablets, and mobile devices.

## Technologies Used
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **State Management**: React Hooks
- **Other Tools**: Context API for role-based management

## Getting Started

Follow these steps to run the project locally.

### Prerequisites
Ensure you have the following installed:
- Node.js >= 16
- npm, yarn, or pnpm package manager

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/RaghavRagh/RBAC-Dashboard
cd rbac-dashboard
npm install
# or
yarn install
# or
pnpm install

# Share Your Opinion

A simple yet modern full-stack application built to demonstrate React 19's form actions and state management features.

## 🚀 Features

- **Post Opinions**: Share your thoughts with a title and description.
- **Voting System**: Upvote or downvote opinions to show your support or disagreement.
- **Modern Tech**: Built with React 19, taking advantage of the latest hooks and form handling.
- **Simple Backend**: Powered by an Express.js server with a JSON file database.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Vanilla CSS.
- **Backend**: Node.js, Express.
- **Data**: `db.json` (filesystem storage).

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository.
2. Install dependencies for the root project:
   ```bash
   npm install
   ```
3. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Running the App

You need to run both the frontend and the backend servers.

1. **Start the Backend**:
   ```bash
   cd backend
   node app.js
   ```
   The server will run on `http://localhost:3000`.

2. **Start the Frontend**:
   In a new terminal:
   ```bash
   npm run dev
   ```
   The app will be available at the URL provided by Vite (usually `http://localhost:5173`).

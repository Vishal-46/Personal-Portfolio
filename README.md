# Portfolio Website - Frontend

This project is a responsive personal portfolio website built with React and Tailwind CSS. It showcases featured projects, work experience, blog posts, and technical skills.

## Features

*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Dark Mode:** User-toggleable dark and light themes.
*   **Dynamic Content:** Projects, blog posts, and other data are loaded from JSON files.
*   **Interactive UI:** Smooth animations and transitions using Framer Motion.
*   **Component-Based:** Built with reusable React components.

## Tech Stack

*   **Frontend:**
    *   React
    *   Tailwind CSS
    *   Framer Motion (for animations)
    *   Lucide React (for icons)
*   **Development Tools:**
    *   Create React App (underlying structure)
    *   ESLint (for linting)

## Project Structure

The main application code is located in the `frontend/` directory.

*   `frontend/public/`: Contains static assets like `index.html` and images.
*   `frontend/src/`: Contains the React application source code.
    *   `frontend/src/App.js`: The main application component where different sections are laid out.
    *   `frontend/src/components/`: (Implicit) While not explicitly a folder in the provided structure, React development typically involves organizing UI into components.
    *   `frontend/src/data/`: Contains JSON files for blog posts. Project and experience data is now consolidated within `App.js`.
*   `frontend/package.json`: Lists project dependencies and scripts.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm (comes with Node.js) or yarn

### Installation & Setup

1.  **Clone the repository (if you haven't already):**
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```

3.  **Install dependencies:**
    Using npm:
    ```sh
    npm install
    ```
    Or using yarn:
    ```sh
    yarn install
    ```

### Running the Development Server

1.  **Ensure you are in the `frontend/` directory.**
2.  **Start the development server:**
    Using npm:
    ```sh
    npm start
    ```
    Or using yarn:
    ```sh
    yarn start
    ```
    This will typically open the application in your default web browser at `http://localhost:3000`.

## Building for Production

To create an optimized build of the application for deployment:

1.  **Ensure you are in the `frontend/` directory.**
2.  **Run the build script:**
    Using npm:
    ```sh
    npm run build
    ```
    Or using yarn:
    ```sh
    yarn run build
    ```
    This will create a `build/` folder in the `frontend/` directory containing the static assets.

## Deployment

The `frontend/build/` directory contains a static build of the React application. This can be deployed to any static site hosting service, such as:

*   Vercel
*   Netlify
*   GitHub Pages
*   AWS S3 (with static website hosting enabled)

Upload the contents of the `frontend/build/` directory to your chosen hosting provider.

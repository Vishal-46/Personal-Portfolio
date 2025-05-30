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

This project is optimized for deployment on Vercel, but can also be deployed to other static site hosting services.

### Vercel (Recommended)

This project can be easily deployed with Vercel. If your React application is in the `frontend/` subdirectory, follow these key configuration steps in your Vercel project settings:

1.  **Framework Preset:** Vercel should automatically detect this as a "Create React App" project.
2.  **Root Directory:**
    *   In your Vercel project's settings (General > Root Directory), set this to `frontend/`.
    *   This tells Vercel that your application's source code and `package.json` are located within the `frontend` subdirectory.
3.  **Build and Output Settings (usually auto-detected if Root Directory is set correctly):**
    *   **Build Command:** `npm run build` (or `yarn build`). Vercel will execute this command within the specified "Root Directory".
    *   **Output Directory:** `build` (This is the default for Create React App and will be relative to the "Root Directory").
    *   **Install Command:** `npm install` (or `yarn install`). Vercel will execute this within the specified "Root Directory".

By setting the "Root Directory" in Vercel to `frontend/`, Vercel will handle the build process correctly and serve your site from the `frontend/build` directory. You do not need to move any files to the repository root manually.

### Other Static Hosting Services

For other services like Netlify, GitHub Pages, or AWS S3:

1.  Build the application as described in the "Building for Production" section (this creates `frontend/build/`).
2.  Deploy the contents of the `frontend/build/` directory to your chosen hosting provider. You may need to configure the provider to understand that the site is in a subdirectory if you are deploying the whole repository, or simply point it to the `frontend/build` directory as the publish directory.

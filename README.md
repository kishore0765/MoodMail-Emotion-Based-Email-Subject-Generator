# MoodMail - AI-Powered Email Subject Generator 📧✨


A simple and fun React application that generates an email subject and footer based on your current mood. Feeling happy, sad, or excited? Let MoodMail craft the perfect, mood-fitting sign-off for you!

---

## 🚀 Features

-   **Emotion & Tone Analysis:** Automatically analyzes your email body to understand the underlying sentiment.
-   **AI-Powered Suggestions:** Uses a powerful AI model (like Google's Gemini) to generate creative and relevant subject lines.
-   **Customizable Tone:** Select the tone you're aiming for—Professional, Casual, Urgent, or Playful.
-   **One-Click Copy:** Easily copy your chosen subject line to the clipboard.
-   **Modern UI:** A clean, responsive, and intuitive interface built with React and TypeScript.

---

## 🛠️ Tech Stack

-   **Frontend:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (or your preferred CSS framework)
-   **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
-   **Linting:** [ESLint](https://eslint.org/)

---

## 📂 Project Structure

A brief overview of the project's directory structure:

```
/
├── public/              # Static assets like favicons and images
├── src/
│   ├── components/      # Reusable React components
│   ├── lib/             # Helper functions, API calls (e.g., for Gemini)
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # React application entry point
│   └── index.css        # Global styles
├── index.html           # Main HTML file for Vite
├── package.json         # Project dependencies and scripts
├── README.md            # You are here!
└── vite.config.ts       # Vite configuration file
```

---

## 📦 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later recommended)
-   [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/) package manager

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/kishore0765/MoodMail-Emotion-Based-Email-Subject-Generator.git
    cd "MoodMail Emotion-Based Email Subject Generator"
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of your project and add your Google Gemini API key. You can get one from Google AI Studio.

   

4.  **Run the development server:**
    ```sh
    npm run dev
    # or
    yarn dev
    ```

5.  Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).

---

## Usage

1.  Enter the body of your email into the main text area.
2.  Choose the desired `Tone` from the dropdown menu.
3.  Click the "Generate Subjects" button.
4.  Review the list of AI-generated subject lines.
5.  Click on any suggestion to copy it to your clipboard!

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

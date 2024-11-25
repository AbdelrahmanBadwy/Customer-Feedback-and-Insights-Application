# Customer Feedback App

A modern web application designed to collect and analyze customer feedback with the power of AI. Built using **Next.js**, **TailwindCSS**, and **Supabase**.

## Features

- 📊 **Feedback Submission**: Allow customers to submit feedback effortlessly.
- 💡 **AI-Powered Insights**: Analyze feedback for actionable insights using OpenAI's API.
- 🖥 **Responsive Design**: TailwindCSS ensures the app looks great on all devices.
- 🔐 **Secure and Scalable**: Supabase integration for authentication and database management.

---


## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16.8.0 or higher)
- **npm** or **yarn**

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/customer-feedback-app.git
   cd customer-feedback-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

- **Start development server**: `npm run dev`
- **Build production version**: `npm run build`
- **Start production server**: `npm start`
- **Lint the code**: `npm run lint`
- **Watch CSS changes**: `npm run postcss:watch`
- **Build Tailwind CSS**: `npm run build:css`

---

## Configuration

### TailwindCSS Setup

The **TailwindCSS** configuration file (`tailwind.config.ts`) includes content paths for Next.js:

```ts
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### PostCSS Setup

PostCSS is configured in `postcss.config.js`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## Deployment

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

3. Deploy to your preferred platform:
   - [Vercel](https://vercel.com/)
   - [Netlify](https://www.netlify.com/)
   - [AWS Amplify](https://aws.amazon.com/amplify/)

---

## Troubleshooting

### Common Issues

- **Styles not applying**:
  - Verify `tailwind.config.ts` paths match your file structure.
  - Ensure `globals.css` is imported in `pages/_app.tsx`.

- **Permission errors**:
  Run the following to fix permissions:
  ```bash
  sudo chown -R $USER:$USER .
  ```

- **Build errors**:
  Clear `.next` and rebuild:
  ```bash
  rm -rf .next
  npm run build
  ```

---

## Contributing

Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For inquiries or feedback, reach out to:  
📧 Here's a **GitHub README** template tailored for your **Customer Feedback App** using TailwindCSS and Next.js. You can customize it as needed.

---

# Customer Feedback App

A modern web application designed to collect and analyze customer feedback with the power of AI. Built using **Next.js**, **TailwindCSS**, and **Supabase**.

## Features

- 📊 **Feedback Submission**: Allow customers to submit feedback effortlessly.
- 💡 **AI-Powered Insights**: Analyze feedback for actionable insights using OpenAI's API.
- 🖥 **Responsive Design**: TailwindCSS ensures the app looks great on all devices.
- 🔐 **Secure and Scalable**: Supabase integration for authentication and database management.

---

## Project Structure

```
customer-feedback-app/
├── pages/               # Next.js pages for routing
│   ├── api/             # API routes for server-side operations
│   ├── feedback.tsx     # Feedback submission page
│   └── insights.tsx     # Insights dashboard
├── components/          # Reusable React components
├── styles/              # TailwindCSS and global styles
│   └── globals.css      # Global CSS for the app
├── public/              # Static assets (images, fonts, etc.)
├── tailwind.config.ts   # TailwindCSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16.8.0 or higher)
- **npm** or **yarn**

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/customer-feedback-app.git
   cd customer-feedback-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

- **Start development server**: `npm run dev`
- **Build production version**: `npm run build`
- **Start production server**: `npm start`
- **Lint the code**: `npm run lint`
- **Watch CSS changes**: `npm run postcss:watch`
- **Build Tailwind CSS**: `npm run build:css`

---

## Configuration

### TailwindCSS Setup

The **TailwindCSS** configuration file (`tailwind.config.ts`) includes content paths for Next.js:

```ts
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### PostCSS Setup

PostCSS is configured in `postcss.config.js`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## Deployment

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

3. Deploy to your preferred platform:
   - [Vercel](https://vercel.com/)
   - [Netlify](https://www.netlify.com/)
   - [AWS Amplify](https://aws.amazon.com/amplify/)

---

## Troubleshooting

### Common Issues

- **Styles not applying**:
  - Verify `tailwind.config.ts` paths match your file structure.
  - Ensure `globals.css` is imported in `pages/_app.tsx`.

- **Permission errors**:
  Run the following to fix permissions:
  ```bash
  sudo chown -R $USER:$USER .
  ```

- **Build errors**:
  Clear `.next` and rebuild:
  ```bash
  rm -rf .next
  npm run build
  ```

---

## Contributing

Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For inquiries or feedback, reach out to:  
📧 abdelrahmanelbadawy9@gmail.com 

--- 

# ⭐ Framer Plugin - Review Summary

![Framer](https://img.shields.io/badge/Built%20for-Framer-blue) ![TypeScript](https://img.shields.io/badge/Powered%20by-TypeScript-informational) ![Vite](https://img.shields.io/badge/Bundler-Vite-blueviolet)  

## 📌 Overview
The **Framer Plugin - Review Summary** is a powerful tool that allows designers and developers to seamlessly integrate a **Review Summary section** into their Framer projects. With just a click, users can add a **fully functional review component** that enhances their design with **user ratings, summaries, and feedback sections**.

## 🚀 Features
- ✅ **Seamless Framer Integration** - Add review sections with one click.
- ✅ **Fully Responsive** - Adapts to different screen sizes automatically.
- ✅ **Dynamic Review Display** - Fetches and displays reviews dynamically.
- ✅ **Optimized for Performance** - Built with React & TypeScript for efficiency.
- ✅ **Vercel Deployment Ready** - Easily deploy and update the plugin.

## 🛠️ Setup & Installation
### **1. Clone the Repository**
```sh
 git clone https://github.com/eleninistikaki/reviews-framer.git
 cd framer-plugin
```

### **2. Install Dependencies**
```sh
 npm install
```

### **3. Run Locally**
```sh
 npm run dev
```
This will start the plugin development environment using **Vite**.

## 📦 Plugin Structure
```
framer-plugin/
│── src/
│   ├── App.tsx            # Main application UI
│   ├── components/
│   │   ├── PluginButton.tsx   # Button to insert review component
│── public/
│── framer.json            # Framer Plugin Configuration
│── package.json           # Project Dependencies
│── vite.config.ts         # Vite Configuration
```

## 🎨 How It Works
The plugin integrates into **Framer's UI**, providing a **floating panel** that allows users to:
1. **Click the Add Reviews Button** - The plugin inserts a **Review Summary** component into the Framer design.
2. **Fetch & Display Reviews** - Automatically pulls review data.
3. **Customize the Appearance** - Styled using modern React & Tailwind CSS.

## 🖥️ Usage Example
The plugin registers itself inside Framer using:
```tsx
framer.showUI({
  position: "top right",
  width: 340,
  height: 320,
});
```
When the button is clicked, it dynamically adds the review component:
```tsx
const instance = await framer.addComponentInstance({
  url: "https://framer.com/m/ReviewSummary-3TV0.js@RFyaZnZ4GBBbAJmjtiLP",
  attributes: {
    width: "1800px",
    height: "200px",
  },
});
```

This will bundle the plugin and deploy it on **Vercel**.

## 📄 License
This project is **open-source** and available under the **MIT License**.

---

📌 **Author:** [Muhammed Zubair](https://github.com/engrmzubair)  
📌 **Maintainer:** [eleninistikaki](https://github.com/eleninistikaki)  
📌 **Built for:** [Framer](https://www.framer.com/)  


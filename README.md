<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

Desktop App made with Electron + Vite + React

"npm run dev": run in dev mode
"electron .": run as an Electron app
"npm run build": build version to be able to see changes in Electron app version
"npx electron-builder": pack the Electron App into a executable file

I use https://www.dnd5eapi.co/ to get the spells, and localStorage to get a manual save and autosave functionality. Initial data load is made via a JSON file. The app is capped at lvl 10.

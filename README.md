# 🌳 JSON Tree Visualizer

An interactive **JSON Tree Visualizer** built with **React**, **Tailwind CSS**, and **React Flow**.  
It allows users to paste JSON data, visualize it as a hierarchical tree, search specific JSON paths, and toggle between **Light/Dark modes**.

---

## 🚀 Features

✅ **JSON Input & Validation**  
- Paste or type any JSON data  
- Validate JSON before visualization  
- Shows errors for invalid JSON  

✅ **Tree Visualization (React Flow)**  
- Displays JSON data as a **hierarchical node tree**  
- Objects, Arrays, and Primitive values have distinct colors  
- Auto-arranged nodes with parent–child connections  
- Zoom and pan support via React Flow controls  

✅ **Search Functionality**  
- Search by JSON path (e.g. `$.user.address.city`)  
- Highlights matching nodes  
- Centers view on the matched node  

✅ **Dark / Light Mode**  
- Toggle between themes  
- Theme preference saved in localStorage  

✅ **Bonus Features (Optional)**  
- Clear / Reset button  
- Copy JSON path on node click  
- Export tree as image  

---

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [React (Vite)](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Visualization | [React Flow](https://reactflow.dev/) |
| Unique IDs | [nanoid](https://github.com/ai/nanoid) |

---

## 🧩 Folder Structure

json-tree-visualizer/
├── src/
│ ├── components/
│ │ ├── JsonInput.jsx
│ │ ├── SearchBar.jsx
│ │ └── TreeVisualizer.jsx
│ ├── utils/
│ │ └── jsonToFlow.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js


---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/json-tree-visualizer.git
cd json-tree-visualizer
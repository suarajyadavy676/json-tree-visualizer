import { nanoid } from "nanoid";

export function jsonToFlow(json, searchQuery) {
  if (!json) return { nodes: [], edges: [] };

  const nodes = [];
  const edges = [];
  let yOffset = 0;

  function traverse(obj, parentId = null, depth = 0, path = "$") {
    const id = nanoid();
    const label = Array.isArray(obj)
      ? "Array"
      : typeof obj === "object" && obj !== null
      ? "Object"
      : `${obj}`;
    const type = Array.isArray(obj)
      ? "array"
      : typeof obj === "object" && obj !== null
      ? "object"
      : "primitive";

    const isMatch = searchQuery && path.toLowerCase().includes(searchQuery.toLowerCase());
    const color =
      isMatch
        ? "#facc15"
        : type === "object"
        ? "#60a5fa"
        : type === "array"
        ? "#34d399"
        : "#f97316";

    const node = {
      id,
      data: { label: `${path.split(".").pop()} (${label})` },
      position: { x: depth * 220, y: yOffset * 90 },
      style: {
        background: color,
        color: "#fff",
        padding: 8,
        borderRadius: 8,
        border: "1px solid rgba(0,0,0,0.1)",
      },
    };
    nodes.push(node);

    if (parentId)
      edges.push({
        id: nanoid(),
        source: parentId,
        target: id,
      });

    if (typeof obj === "object" && obj !== null) {
      const entries = Array.isArray(obj) ? obj.entries() : Object.entries(obj);
      for (const [key, val] of entries) {
        yOffset++;
        traverse(val, id, depth + 1, `${path}.${key}`);
      }
    }
  }

  traverse(json);
  return { nodes, edges };
}

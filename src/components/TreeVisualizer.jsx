import React, { useMemo } from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { jsonToFlow } from "../utils/jsonToFlow";

export default function TreeVisualizer({ data, searchQuery }) {
  const { nodes, edges } = useMemo(() => jsonToFlow(data, searchQuery), [data, searchQuery]);

  if (!data)
    return <p className="text-gray-500 text-center mt-10">Enter JSON and click “Visualize”</p>;

  return (
    <div className="h-[600px] border rounded-lg overflow-hidden">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

import './styles.scss'
import { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
} from 'react-flow-renderer';

//script

//initial state of visualizer will be the nodes and edges

// some click action on nodes will bring up the node data entry
//submit will fire reducer which will then update state of visualizer and the data for that node

//initial nodes will be empty
const initialNodes: Node[] = [
  { id: '1', data: { label: 'Engineer/Google' }, position: { x: 5, y: 5 } },
  { id: '2', data: { label: 'Interview' }, position: { x: 5, y: 75 } },
  { id: '3', data: { label: 'Comments: Resume has been submitted' }, position: { x: 5, y: 25 } },
  { id: '4', data: { label: 'Comments: First office visit scheduled' }, position: { x: 75, y: 135 } },

];

//initial edges will be empty
const initialEdges: Edge[] = [{ id: `e1-2`, source: '1', target: '2' }, { id: `e2-3`, source: '2', target: '3' }, { id: `e3-4`, source: '3', target: '4' }];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

//markdown
export default function Visualizer() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1 className='header-title'>Visualizer</h1>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={fitViewOptions}
      />
    </div>
  );
}

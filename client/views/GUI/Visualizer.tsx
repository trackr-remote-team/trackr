import './styles.scss';
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

const reactFlowStyle = {
  width: '100%',
  height: '100%',
};

//script

//initial state of visualizer will be the nodes and edges

// some click action on nodes will bring up the node data entry
//submit will fire reducer which will then update state of visualizer and the data for that node

//initial nodes will be empty
const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Engineer/Google id1' },
    position: { x: -124, y: -396 },
  },
  { id: '2', data: { label: 'Interview id2' }, position: { x: -273, y: -338 } },
  {
    id: '3',
    data: { label: 'Comments: Resume has been submitted id3' },
    position: { x: -369, y: -266 },
  },
  {
    id: '4',
    data: { label: 'Comments: First office visit scheduled id 4' },
    position: { x: -332, y: -428 },
  },

  {
    id: '5',
    data: { label: 'FrontEnd/AirBnb id 5' },
    position: { x: 265, y: -241 },
  },
  { id: '6', data: { label: 'Interview id6' }, position: { x: 163, y: -175 } },
  {
    id: '7',
    data: { label: 'Comments: Resume has been submitted id 7' },
    position: { x: 394, y: -146 },
  },
  {
    id: '8',
    data: { label: 'Comments: Phone Screen scheduled id8' },
    position: { x: 358, y: -28 },
  },
];

//initial edges will be empty
const initialEdges: Edge[] = [
  { id: `e1-2`, source: '1', target: '2' },
  { id: `e2-3`, source: '2', target: '3' },
  { id: `e4-2`, source: '4', target: '2' },

  { id: `e5-6`, source: '5', target: '6' },
  { id: `e6-7`, source: '6', target: '7' },
  { id: `e7-8`, source: '7', target: '8' },
];

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
        style={reactFlowStyle}
      />
    </div>
  );
}

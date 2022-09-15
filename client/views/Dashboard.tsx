
import UtilityMenu from './GUI/UtilityMenu';
import Visualizer from './GUI/Visualizer';

//script


//markdown
export default function Dashboard() {


  return (
    <div style={{ height: '100vh', width: '100vw' }}>
        <UtilityMenu />
      <Visualizer />
    </div>
  );
}

import './styles.scss';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';



export default function UtilityMenu() {
  return (
    <Menu menuButton={<MenuButton>Open Menu</MenuButton>} transition>
      <MenuItem>Add Job </MenuItem>
      <MenuItem>Add Interview</MenuItem>
      <MenuItem>Add Comments</MenuItem>
    </Menu>
  );
}

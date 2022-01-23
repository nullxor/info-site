import React, { useReducer } from 'react';
import Menu from  './components/dos/menu/Menu';
import MenuItem from './components/dos/menu/MenuItem';
import MenuPopup from './components/dos/menu/MenuPopup';
import MenuPopupItem from './components/dos/menu/MenuPopupItem';
import MenuPopupItemLink from './components/dos/menu/MenuPopupItemLink';
import Clock from './components/dos/clock/Clock';
import Dialogs from './components/dialogs/Dialogs';
import dialogReducer from './state/reducers/dialogReducer';
import { openDialog, closeDialog } from './state/actions/dialogActions';
import './App.css';

function App() {
  const [currentDialog, dispachDialog] = useReducer(dialogReducer, null);

  return (
    <div className="fh">
      <Menu>
        <MenuItem icon="fa fa-bars">
          <MenuPopup>
            <MenuPopupItem id="tetris" label="Play Tetris" onItemClick={() => dispachDialog(openDialog('tetris'))} />
          </MenuPopup>
        </MenuItem>
        <MenuItem label="File">
          <MenuPopup>
            <MenuPopupItem id="about" label="About Me" onItemClick={() => dispachDialog(openDialog('about'))} />
            <MenuPopupItem id="projects" label="Side projects" onItemClick={() => dispachDialog(openDialog('projects'))} />
          </MenuPopup>
        </MenuItem>
        <MenuItem label="Social">
          <MenuPopup>
            <MenuPopupItemLink label="Github" link="https://github.com/nullxor" icon="fa-github" />
            <MenuPopupItemLink label="LinkedIn" link="https://www.linkedin.com/in/olfran/" icon="fa-linkedin" />
            <MenuPopupItemLink label="Twitter" link="https://twitter.com/nullxor" icon="fa-twitter" />
          </MenuPopup>
        </MenuItem>
        <MenuItem placeholder="true">
          <Clock />
        </MenuItem>
      </Menu>
      <Dialogs currentDialog={currentDialog} onCloseCurrentDialog={() => dispachDialog(closeDialog())} />
    </div>
  );
}

export default App;

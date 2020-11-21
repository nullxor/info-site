import React, { useState } from 'react';
import Menu from  './components/dos/menu/Menu';
import MenuItem from './components/dos/menu/MenuItem';
import MenuPopup from './components/dos/menu/MenuPopup';
import MenuPopupItem from './components/dos/menu/MenuPopupItem';
import MenuPopupItemLink from './components/dos/menu/MenuPopupItemLink';
import Clock from './components/dos/clock/Clock';
import AboutDialog from './components/dialogs/AboutDialog';
import ProjectsDialog from './components/dialogs/ProjectsDialog';
import TetrisDialog from './components/dialogs/TetrisDialog';
import './App.css';

function App() {
  const [currentDialog, setCurrentDialog] = useState('about');

  const closeDialog = () => setCurrentDialog('');

  const getCurrentDialog = (id) =>  {
    if (id === 'about') {
      return <AboutDialog onButtonClick={closeDialog} />;
    } else if (id === 'projects') {
      return <ProjectsDialog onButtonClick={closeDialog} />;
    } else if (id === 'tetris') {
      return <TetrisDialog onButtonClick={closeDialog} />;
    }
    return null;
  }

  return (
    <div className="fh">
      <Menu>
        <MenuItem icon="fa fa-bars">
          <MenuPopup>
            <MenuPopupItem id="tetris" label="Play Tetris" onItemClick={() => setCurrentDialog('tetris')} />
          </MenuPopup>
        </MenuItem>
        <MenuItem label="File">
          <MenuPopup>
            <MenuPopupItem id="about" label="About Me" onItemClick={() => setCurrentDialog('about')} />
            <MenuPopupItem id="projects" label="Side projects" onItemClick={() => setCurrentDialog('projects')} />
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
      {getCurrentDialog(currentDialog)}
    </div>
  );
}

export default App;

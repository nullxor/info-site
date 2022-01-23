import React from 'react';
import AboutDialog from './AboutDialog';
import ProjectsDialog from './ProjectsDialog';
import TetrisDialog from './TetrisDialog';


export default function Dialogs({currentDialog, onCloseCurrentDialog}) {
  return (
    <>
      <AboutDialog show={currentDialog === 'about'} onButtonClick={onCloseCurrentDialog} />
      <ProjectsDialog show={currentDialog === 'projects'} onButtonClick={onCloseCurrentDialog} />
      <TetrisDialog show={currentDialog === 'tetris'} onButtonClick={onCloseCurrentDialog} />
    </>
  );
}
import React, { useState } from 'react';
import Menu from  './components/dos/menu/Menu';
import MenuItem from './components/dos/menu/MenuItem';
import MenuPopup from './components/dos/menu/MenuPopup';
import MenuPopupItem from './components/dos/menu/MenuPopupItem';
import MenuPopupItemLink from './components/dos/menu/MenuPopupItemLink';
import MsgBox from './components/dos/msgbox/MsgBox';
import Clock from './components/dos/clock/Clock';
import Tetris from './components/tetris/Tetris';
import './App.css';

function App(props) {
  const [currentDialog, setCurrentDialog] = useState('');

  const closeDialog = () => setCurrentDialog('');

  const getCurrentDialog = (id) =>  {
    if (id === 'about') {
      return (
        <MsgBox title="about" onButtonClick={closeDialog}>
        Just another Dev learning new things and trying to have fun, you won't get bored 
        if you enjoy what you're doing, right?. About this weird design: the first programming language that I learnt was C,
        even though there was a lot of modern IDEs, for some weird reason we used Borland Turbo C at college,
        so I tried to mimic that style with this page.
        <p className="box">
          I'm always reinventing the wheel because I think it's the best way to learn, in real
          projects I usually (almost) try to use some Framework, but I'm not a '(Put Here your Framework) Developer'  I like to learn things
          from the ground up, I like to build things from scratch, especially if it's something that I haven't done before or I don't know how to do it, 
          because I think this is the best way to learn.
        </p>
        <p className="box">
          Feel free to <a href="https://github.com/nullxor/info-site" target="_blank" rel="noopener noreferrer">send me a Pull Request</a> for any typo.
        </p>
      </MsgBox>
      );
    } else if (id === 'projects') {
      return (
        <MsgBox title="side projects" onButtonClick={closeDialog}>
        Some of the stuff that I'm planning to work on (No particular order). Maybe you'd want to work on it too :)
        <ul className="list">
          <li><a href="https://github.com/nullxor/tetris-js/" target="_blank" rel="noopener noreferrer">Tetris game</a></li>
          <li>Snake game (Probably with vanilla JavaScript ES6/ES7)</li>
          <li>Tiny bootloader or a tiny Pet Operating System (in C or maybe ASM)</li>
          <li>Image to ASCII converter</li>
          <li>Any simple progamming language with a compiler or transpiler (Probably will compile to WASM)</li>
          <li>A template engine (Likely to be in Golang)</li>
          <li>Build an emulator (MIPS or Atari 2600 emulator, I'll use Golang or C# for this)</li>
          <li>Try to code a basic ACID Database with simple SQL Support (Probably in JavaScript or maybe C# or Golang)</li>
          <li>Anything related to blockchain (I have to learn a lot about this)</li>
          <li>Some kind of IA to play the previous games that I build, Snake or Tetris, maybe a Neural Network (I have to learn a lot about this)</li>
        </ul>
      </MsgBox>
      );
    } else if (id === 'tetris') {
      return (
        <div class="tetris">
          <MsgBox title="tetris" onButtonClick={closeDialog}>
            <Tetris></Tetris>
          </MsgBox>
        </div>
      );
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
      <div className="flex box">
        <div className="dialog">
          {getCurrentDialog(currentDialog)}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Menu from  './components/dos/menu/Menu';
import MenuItem from './components/dos/menu/MenuItem';
import MenuPopup from './components/dos/menu/MenuPopup';
import MenuPopupItem from './components/dos/menu/MenuPopupItem';
import MenuPopupItemLink from './components/dos/menu/MenuPopupItemLink';
import './App.css';
import MsgBox from './components/dos/msgbox/MsgBox';
import Clock from './components/dos/clock/Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: ''
    }
  }

  onItemClick = (show) => {
    this.setState({ show });
    if (show === 'tetris') {
      this.refs.frame.contentWindow.location.reload();
    }
  }

  closeDialog = () => {
    this.setState({ show: '' });
  }

  render() {
    return (
      <div>
        <Menu>
          <MenuItem icon="fa fa-bars">
            <MenuPopup>
              <MenuPopupItem id="tetris" label="Play Tetris" onItemClick={this.onItemClick} />
            </MenuPopup>
          </MenuItem>
          <MenuItem label="File">
            <MenuPopup>
              <MenuPopupItem id="about" label="About Me" onItemClick={this.onItemClick} />
              <MenuPopupItem id="side" label="Side projects" onItemClick={this.onItemClick} />
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
        <div className="box flex">
          <MsgBox title="about" visible={this.state.show === 'about'} onButtonClick={this.closeDialog}>
            I'm just a normal guy, another Software Engineer trying to learn new things everyday and more importantly trying to having fun.
            The first programming language that I learnt was C in 2005, even though there was a lot of modern IDEs
            at that time, for some weird reason we used Borland Turbo C at college, so I tried to mimic that style
            with this page. It probably won't work well on mobile devices. Also this page is just for fun, so it won't follow the best practices.
            <p className="box">
              I'm always reinventing the wheel because I think it's the best way to learn, for real
              projects I always (almost) try to use some Framework, but I'm not a '(Put Here your Framework) Developer'  I like to learn things
              from the ground up, I like to build things from scratch, especially if it's something that I don't know how to do it.
            </p>
            <p className="box">
              By the way, as you might be noticed already, I'm not a native english speaker, so feel free correct me or (much better)
              <a href="https://github.com/nullxor" target="_blank" rel="noopener noreferrer">send me a Pull Request</a> for any typo.
            </p>
          </MsgBox>
          <MsgBox title="side projects" visible={this.state.show === 'side'} onButtonClick={this.closeDialog}>
            Some of the stuff that I'm planning to work on (No particular order). Maybe you'd want to work on it too :)
            <ul className="list">
              <li><a href="https://github.com/nullxor/tetris-js/" target="_blank" rel="noopener noreferrer">Tetris game</a></li>
              <li>Snake game (Probably with vanilla JavaScript ES6/ES7)</li>
              <li>Tiny bootloader or a tiny Pet Operating System (in C or maybe ASM)</li>
              <li>Image to ASCII converter</li>
              <li>Any simple progamming language with a compiler or transpiler (Probably will compile to WASM)</li>
              <li>A template engine (Likely to be in Golang)</li>
              <li>Build an emulator (MIPS or Atari emulator, I'll use Golang or C# for this)</li>
              <li>Try to code a basic ACID Database with simple SQL Support (Probably in JavaScript or maybe C# or Golang)</li>
              <li>Anything related to blockchain (I have to learn a lot about this)</li>
              <li>Some kind of IA to play the previous games that I build, Snake or Tetris, maybe a Neural Network (I have to learn a lot about this)</li>
            </ul>
          </MsgBox>
          <div hidden={this.state.show !== 'tetris'}>
            <iframe ref="frame" title="Tetris" src="tetris/index.html" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

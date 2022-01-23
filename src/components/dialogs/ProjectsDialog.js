import React from 'react';
import MsgBox from '../dos/msgbox/MsgBox';

export default function ProjectsDialog(props) {
  return (
    props.show &&
    <MsgBox title="side projects" onButtonClick={props.onButtonClick}>
      Some of the side stuff that I've worked or I'm planning to work on (No particular order). Maybe you'd want to work on it too :)
      <ul className="list">
        <li><a href="https://github.com/nullxor/tetris-js" target="_blank" rel="noopener noreferrer">Tetris game</a></li>
        <li><a href="https://github.com/nullxor/path-finding-ts" target="_blank" rel="noopener noreferrer">Path Finding Algorithms in TS</a></li>
        <li>Snake game (Probably with vanilla JavaScript ES6/ES7)</li>
        <li>Tiny bootloader or a tiny Pet Operating System (in C or maybe ASM)</li>
        <li>Image to ASCII converter</li>
        <li>Any simple progamming language with a compiler or transpiler (Probably will compile to WASM)</li>
        <li>A template engine (Likely to be in Golang)</li>
        <li>Build an emulator (MIPS or Atari 2600 emulator, I'll use Golang or C#)</li>
        <li>Try to code a basic ACID Database with simple SQL Support (Probably in JavaScript or maybe C# or Golang)</li>
        <li>Anything related to blockchain (I need to learn about it)</li>
        <li>Some kind of IA to play the previous games that I build, Snake or Tetris, maybe a Neural Network (I got to learn about it)</li>
      </ul>
    </MsgBox>
  );
}
import React from 'react';
import MsgBox from '../dos/msgbox/MsgBox';


export default function AboutDialog(props) {
  return (
    <MsgBox title="about" onButtonClick={props.onButtonClick}>
    <p className="box">
      I'm always reinventing the wheel because I think it's the best way to learn, in real
      projects I usually (almost) try to use some Framework, but I'm not a '(Put Here your Framework) Developer' I like to learn
      from the ground up, I like to build things from scratch, especially if it's something that I haven't done before or
      I don't know how to do it, because I think it is the best way to learn.
    </p>
    <p className="box">
      About this weird design: I tried to mimic the old <a href="https://en.wikipedia.org/wiki/MS-DOS_Editor" target="_blank" rel="noopener noreferrer">MS-DOS Edit style</a>.
      Actually it is a mix between the Old MS-DOS Style and the old Borland's Turbo C Style.
    </p>
    <p className="box">
      Feel free to <a href="https://github.com/nullxor/info-site" target="_blank" rel="noopener noreferrer">send me a Pull Request</a> for any typo.
    </p>
  </MsgBox>
  );
}
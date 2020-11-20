import React, { useState, useRef, useEffect } from 'react';
import './Window.css';

export default function Window(props) {
  const [pos, setPos] = useState({x: 30, y: 0});
  const [dragging, setDragging] = useState(false);
  const [clientRect, setClientRect] = useState({width: 0, height: 0});
  const windowRef = useRef();


  useEffect(() => {
    const x = window.innerWidth - windowRef.current.clientWidth - (windowRef.current.clientWidth / 2);
    const y = window.innerHeight - windowRef.current.clientHeight - (windowRef.current.clientHeight / 2);
    console.log(window);
    setClientRect({width: window.innerWidth, height: window.innerHeight});
    setPos({x, y})
  }, []);

  function onMouseDown(e) {
    setDragging(true);
    e.preventDefault();
  }

  function onMouseUp(e) {
    setDragging(false);
  }

  function onMouseOut() {
    setDragging(false);
  }

  function onMouseMove(e) {
    if (dragging) {
      const x = pos.x + e.movementX;
      const xLimit = clientRect.width - windowRef.current.clientWidth;
      const y = pos.y + e.movementY; 
      const yLimit = clientRect.height - windowRef.current.clientHeight;
      if ((x > 0 && x < xLimit) && (y > 28 && y < yLimit)) {
        setPos({x, y});
      }
    }
  }

  return (
    <div className="window" ref={windowRef} style={{top: pos.y, left: pos.x}} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onBlur={onMouseOut} onMouseMove={onMouseMove}>
      <div className="border">
        <div className="window-title">
          <span className="title">{props.title}</span>
        </div>
        <div className="window-body">
          {props.children}
        </div>
      </div>
    </div>
  );  
}

Window.defaultProps = {
  title: ''
}
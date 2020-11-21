import React, { useState, useRef, useEffect } from 'react';
import './Window.css';

export default function Window(props) {
  const windowRef = useRef();
  const [pos, setPos] = useState({x: 0, y: 0});
  const [dragInfo, setDragInfo] = useState(false);


  useEffect(() => {
    const x = Math.abs((window.innerWidth / 2) - (windowRef.current.offsetWidth / 2));
    const y = Math.abs((window.innerHeight / 2) - (windowRef.current.offsetHeight / 2));
    setPos({x, y});
  }, []);

  useEffect(() => {
    function mouseMove(e) {
        const x = e.screenX - dragInfo.dragX;
        const xLimit = window.innerWidth - windowRef.current.offsetWidth;
        const y = e.screenY - dragInfo.dragY; 
        const yLimit = window.innerHeight - windowRef.current.offsetHeight;
        if ((x > 0 && x < xLimit) && (y > 25 && y < yLimit)) {
          setPos({x, y});
        } else {
          setDragInfo(false);
        }
    }
    if (dragInfo) {
      window.addEventListener('mousemove', mouseMove);
    }
    return function cleanup() {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [dragInfo]);

  function onMouseDown(e) {
    e.preventDefault();
    setDragInfo({dragX: e.screenX - windowRef.current.offsetLeft, dragY: e.screenY - windowRef.current.offsetTop});
  }

  function onMouseUp(e) {
    e.preventDefault();
    setDragInfo(false);
  }

  return (
    <div className={dragInfo ? 'window dragging' : 'window'} ref={windowRef} style={{top: pos.y, left: pos.x}}>
      <div className="border">
        <div className="window-title" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
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
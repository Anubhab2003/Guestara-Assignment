import React, { useState, useRef, useEffect } from 'react';

function DraggableButton() {
  const [buttonWidth, setButtonWidth] = useState(150);
  const buttonRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startWidth = buttonWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newWidth = Math.max(50, startWidth + deltaX); // Minimum width of 50px
      setButtonWidth(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={buttonRef}
      className="bg-blue-200 h-8 border rounded-sm cursor-ew-resize"
      style={{ width: `${buttonWidth}px` }}
      onMouseDown={handleMouseDown}
    >
      Event 9:00-10:00 am
    </div>
  );
}

export default DraggableButton;

import { Fragment, useEffect, useRef } from 'react';
import { OuterTail, InnerTail } from './styles';

function Cursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  const mouseMoveEvent = (e: MouseEvent) => {
    if (innerRef.current) {
      innerRef.current.style.left = e.pageX.toString() + 'px';
      innerRef.current.style.top = e.pageY.toString() + 'px';
    }
    if (outerRef.current) {
      outerRef.current.style.left = e.pageX.toString() + 'px';
      outerRef.current.style.top = e.pageY.toString() + 'px';
    }
  }

  const mouseDownEvent = () => {
    if (outerRef.current) {
      outerRef.current.style.width = '0px';
      outerRef.current.style.height= '0px';
    }
  }

  const mouseUpEvent = () => {
    if (outerRef.current) {
      outerRef.current.style.width = '20px';
      outerRef.current.style.height= '20px';
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mousedown', mouseDownEvent);
    document.addEventListener('mouseup', mouseUpEvent);
    return () => {
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mousemove', mouseDownEvent);
      document.removeEventListener('mouseup', mouseUpEvent);
    }
  }, [])

  return (
    <Fragment>
      <InnerTail ref={innerRef} className="fadedIn" />
      <OuterTail ref={outerRef} className="fadedIn" />
    </Fragment>
  )
}

export default Cursor;
import { Fragment } from 'react';
import { OuterTail, InnerTail } from './styles';
import useMousePosition from '../Cursor/useMousePosition';

function Cursor() {
  const { left, top } = useMousePosition();

  return (
    <Fragment>
      <InnerTail className="fadedIn" style={{ left: `${left}px`, top: `${top}px` }} />
      <OuterTail className="fadedIn" style={{ left: `${left}px`, top: `${top}px` }} />
    </Fragment>
  )
}

export default Cursor;
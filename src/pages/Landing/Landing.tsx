import React from 'react';
import { LeftHalf, LeftContent, Name, Tagline, RightHalf, Menu, MenuItem } from './styles';

interface LandingProps {
  setPageNum: Function;
}

const Landing = React.forwardRef<HTMLDivElement, LandingProps>((props, ref) => {
  const { setPageNum } = props;
  return (
    <div ref={ref} id="start" className="landing content">
      <LeftHalf>
        <LeftContent>
          <Name className="fadedIn">Grey Lee</Name>
          <Tagline className="fadedIn">Hello! I'm a computer science student with a passion for art and storytelling.</Tagline>
        </LeftContent>
      </LeftHalf>
      <RightHalf className="fadedIn">
        <Menu>
          <MenuItem>
            <a onClick={() => setPageNum(1)}>About</a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => setPageNum(2)}>Projects</a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => setPageNum(3)}>Contact</a>
          </MenuItem>
        </Menu>
      </RightHalf>
    </div>
  );
});

export default Landing;
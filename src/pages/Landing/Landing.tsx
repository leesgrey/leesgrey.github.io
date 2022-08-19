import React from 'react';
import { LeftHalf, LeftContent, Name, Tagline, RightHalf, Menu, MenuItem } from './styles';
import { Content } from '../shared';

interface LandingProps {
  setPageNum: Function;
  visible: boolean;
}

const Landing = React.forwardRef<HTMLDivElement, LandingProps>(({ setPageNum, visible }, ref) => {
  return (
    <Content visible={visible} ref={ref} className="landing">
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
    </Content>
  );
});

export default Landing;
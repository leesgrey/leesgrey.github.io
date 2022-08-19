import React, { useState, useEffect, useRef } from 'react';
import Landing from '../../pages/Landing/Landing';
import About from '../../pages/About/About';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';
import Cursor from '../Cursor/Cursor';
import leftArrow from '../../assets/left.svg';
import rightArrow from '../../assets/right.svg'
import frontMountains from '../../assets/front_mountains.svg';
import midMountains from '../../assets/mid_mountains.svg';
import backMountains from "../../assets/back_mountains.svg";
import { ArrowContainer, LeftArrow, RightArrow, Moon, Mountain, ScrollWrapper, Header, PageTitle, PageMenu, MenuItem } from './styles';

const MAX_PAGE_NUM = 3;

const Wrapper = () => {
  const [pageNum, setPageNum] = useState(0);
  const landingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const pages = [landingRef, aboutRef, projectRef, contactRef];
  const pageNames = ["", "ABOUT", "PROJECTS", "CONTACT"]

  const scrollToPage = (pageNum: number) => {
    pages[pageNum].current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  useEffect(() => {
    scrollToPage(pageNum)
  }, [pageNum]);

  window.addEventListener('resize', () => scrollToPage(pageNum))
  
  return (
    <React.Fragment>
      <Cursor />
      <ArrowContainer className="fadedIn">
        <LeftArrow
          className="fadedIn"
          active={!!pageNum}
          src={leftArrow}
          onClick={() => pageNum > 0 && setPageNum(pageNum - 1)}
        />
        <RightArrow
          className="fadedIn"
          active={pageNum < MAX_PAGE_NUM}
          src={rightArrow}
          onClick={() => pageNum < pages.length - 1 && setPageNum(pageNum + 1)} />
      </ArrowContainer>
      <Header>
        <Moon className="fadedIn" onClick={() => setPageNum(0)}></Moon>
        {!!pageNum && <PageTitle>{pageNames[pageNum]}</PageTitle>}
        <PageMenu className="pagemenu">
          <MenuItem>
            <a className="menuLink" onClick={() => setPageNum(1)}>About</a>
          </MenuItem>
          <MenuItem>
            <a className="menuLink" onClick={() => setPageNum(2)}>Projects</a>
          </MenuItem>
          <MenuItem>
            <a className="menuLink" onClick={() => setPageNum(3)}>Contact</a>
          </MenuItem>
        </PageMenu>
      </Header>

      <div className="outer-wrapper">
        <ScrollWrapper>
          <Landing ref={landingRef} setPageNum={setPageNum} />
          <About ref={aboutRef} />
          <Projects ref={projectRef} />
          <Contact ref={contactRef} />
        </ScrollWrapper>
      </div>

      <Mountain left={pageNum * 20} style={{ zIndex: 3, animationDelay: '1s' }} className="fadedIn" src={frontMountains} />
      <Mountain left={pageNum * 10} style={{ zIndex: -2, animationDelay: '1.1s' }} className="fadedIn" src={midMountains} />
      <Mountain left={pageNum * 5} style={{ zIndex: -3, animationDelay: '1.2s' }} className="fadedIn" src={backMountains} />
    </React.Fragment>
  );
}

export default Wrapper;
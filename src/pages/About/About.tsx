import React from 'react';
import me from '../../assets/me.jpeg';
import { ScrollPage, TranslucentBordered, Content } from 'pages/shared';
import { PlaylistContainer } from './styles';

interface AboutProps {
  visible: boolean;
}

const About = React.forwardRef<HTMLDivElement, AboutProps>(({ visible }, ref) => {
  return (
    <Content visible={visible} ref={ref} className="content fades">
      <div className="pagecontent">
        <ScrollPage>
          <TranslucentBordered>
            <img id="profile" src={me} />
            <p className="abtcap">Hello! My name's Grey, and I'm a computer science student at the University of Toronto with an interest in human-computer interaction and game design. <br></br>
              Since childhood, I've been inspired by animation and games to combine art and technology into new forms of storytelling.<br></br>
              I believe technology can be fun and human, and I hope to foster experiences that are accessible and enjoyable to everyone!</p>
            <p style={{ marginTop: '-2rem' }} className="abtcap">In my free time I like to draw, read horror novels, and refine my banana bread technique. I also enjoy playing games with friends, ranging from running tabletop RPGs to collaborating on video game projects. <br></br>
              I love finding new music to listen to, especially for long runs around the city. To the right is a small playlist of some of my long-time favorites and new obsessions!
            </p>
            <PlaylistContainer>
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/2jg6rvofRPYfXeePl5tw0t?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </PlaylistContainer>
          </TranslucentBordered>
        </ScrollPage>
      </div>
    </Content>
  )
});

export default About;
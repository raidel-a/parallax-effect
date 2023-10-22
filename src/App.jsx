import { useRef } from 'react';
import sky from './assets/galaxies-pix.jpg';
import tierra from './assets/land-pix.jpg';
import einFloat from './assets/einFloat.gif';
import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer
          offset={0.5}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${sky})`,
            backgroundSize: 'contain',
            // backgroundPosition: 'center',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2> Welcome! </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={3}
          style={{
            backgroundImage: `url(${tierra})`,
            backgroundSize: 'contain',
            // backgroundPosition: 'center',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.75, end: 3 }}
          // style={{ textAlign: 'center' }}
        >
          <img
            src={einFloat}
            alt="Ein Floating"
            style={{
              animation:
                 `spin 20s  reverse linear infinite,
                  move 50s linear infinite`
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.75}
          speed={1}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2> You have reached the end </h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

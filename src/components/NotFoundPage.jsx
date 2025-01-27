import React from 'react';
import { Link } from 'react-router-dom';
import { Particles } from 'react-tsparticles';

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: 'image',
              options: {
                images: [
                  {
                    src: 'images/circle.png',
                    width: 1024,
                    height: 853,
                  },
                  {
                    src: 'images/cross.png',
                    width: 1024,
                    height: 853,
                  },
                  {
                    src: 'images/square.png',
                    width: 1024,
                    height: 853,
                  },
                  {
                    src: 'images/triangle.png',
                    width: 1024,
                    height: 853,
                  },
                ],
              },
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'top',
              random: true,
              gravity: {
                enable: true,
                inverse: true,
                acceleration: 1.5,
              },
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 35,
              random: true,
            },
            rotate: {
              value: 360,
              animation: {
                enable: true,
                speed: 5,
              },
            },
          },
        }}
      />
      
      <div id="backdrop">
        <div id="text">
          <h1>404</h1>
          <p>🎮 You're out of bounds! <Link to="/">Return?</Link></p>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;

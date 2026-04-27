import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  detectRetina: true,
  fullScreen: {
    enable: false,
  },
  interactivity: {
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
    },
  },
  particles: {
    color: {
      value: ["#3b82f6", "#5a7fff", "#8654f6"],
    },
    links: {
      color: "#6b8cff",
      distance: 155,
      enable: true,
      opacity: 0.14,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      speed: 0.9,
    },
    number: {
      density: {
        enable: true,
        area: 900,
      },
      value: 52,
    },
    opacity: {
      value: {
        min: 1,
        max: 0.45,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        min: 1,
        max: 4,
      },
    },
  },
};

function ParticlesBackground() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });

      if (isMounted) {
        setIsReady(true);
      }
    };

    initializeParticles();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <Particles
      id="app-particles"
      className="app-particles"
      options={particlesOptions}
    />
  );
}

export default ParticlesBackground;

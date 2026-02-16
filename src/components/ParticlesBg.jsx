import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },

        background: {
          color: { value: "transparent" } // 🔥 REQUIRED
        },

        particles: {
          number: {
            value: 160,
            density: { enable: true, area: 800 }
          },

          color: { value: "#f5c400" }, // 🔥 visible on light & dark

          opacity: {
            value: { min: 0.3, max: 0.7 }
          },

          size: {
            value: { min: 1, max: 2 }
          },

          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            outModes: "out"
          }
        },

        detectRetina: true
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0 // 🔥 BACKGROUND
      }}
    />
  );
}

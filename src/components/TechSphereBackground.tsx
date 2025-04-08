// src/components/TechSphereBackground.tsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import type { Engine } from "tsparticles-engine";

const TechSphereBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const techIcons = [
    "python", "javascript", "java", "cplusplus",
    "tailwindcss", "react", "nodejs", "express", "typescript",
    "tensorflow", "scikitlearn",
    "mysql", "sqlite", "mongodb",
    "git", "linux", "vscode", "figma", "jupyter"
  ];

  const images = techIcons.map((icon) => ({
    src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`,
    width: 20,
    height: 20,
  }));

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: { value: "transparent" } },
        particles: {
          number: {
            value: 10,
            density: { enable: true, area: 800 }
          },
          shape: {
            type: "image",
            image: images
          },
          size: {
            value: 35,
            random: { enable: true, minimumValue: 20 }
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
            attract: {
              enable: false
            }
          },
          opacity: {
            value: 1
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default TechSphereBackground;

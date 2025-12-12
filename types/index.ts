// Scene component props types
export interface SceneProps {
  scrollYProgress: import('framer-motion').MotionValue<number>;
}

export interface ParticleData {
  depth: number;
  size: number;
  left: string;
  top: string;
  filter: string;
}

export interface ContentOverlayProps {
  currentScene: number;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

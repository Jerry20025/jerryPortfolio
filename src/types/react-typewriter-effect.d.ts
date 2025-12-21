declare module 'react-typewriter-effect' {
  interface TypewriterProps {
    text: string[];
    cursorColor?: string;
    multiTextDelay?: number;
    typeSpeed?: number;
    deleteSpeed?: number;
    style?: React.CSSProperties;
  }

  const Typewriter: React.FC<TypewriterProps>;
  export default Typewriter;
} 
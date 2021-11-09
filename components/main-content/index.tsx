import { motion } from "framer-motion";
import fade from "components/animations/fade";
import { ReactChild } from "react";

interface MainContentProps {
  wide?: boolean,
  insertSpaceForHeader?: boolean,
  children: ReactChild | ReactChild[],
}

export default function MainContent({
  wide = false,
  insertSpaceForHeader = true,
  children,
}: MainContentProps) {
  return (
    <motion.div
      className={`
        ${insertSpaceForHeader ? "pt-14" : ""}  
        w-full min-h-screen
        px-2
      `}
      variants={fade}
      initial="out"
      animate="in"
    >
      <div
        className={`
          h-full 
          ${wide ? "" : "max-w-xl"} 
          relative z-10 
          mx-auto
        `}>
        {children}
      </div>
    </motion.div>
  );
}

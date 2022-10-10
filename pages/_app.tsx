import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="app-wrap dark:bg-black">
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            key={router.route.concat("Fade Back")}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
              },
              exit: {
                opacity: 0,
              },
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}

export default MyApp;

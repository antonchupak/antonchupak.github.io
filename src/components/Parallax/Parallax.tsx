import * as React from "react";
// import throttle from 'lodash.throttle';
import useIsMobile from "hooks/useIsMobile";
import styles from "./Parallax.module.sass";
import image from "media/editor.png";

interface IParallaxProps {
  className?: string;
}

const Parallax: React.FC<IParallaxProps> = () => {
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile);

  // const refContainer = React.createRef<HTMLDivElement>();

  // React.useEffect(() => {
  // window.addEventListener('mousemove', throttle(onMouseMove, 100))

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove)
  //   }
  // }, [])

  // function onMouseMove(event: any) {
  //   console.log(event);
  // }

  return (
    <div className={styles.parallax}>
      <img className={styles.image} src={image} alt="Code Editor" />
      <span className={styles.overlay} />
    </div>
  );
};

export default Parallax;

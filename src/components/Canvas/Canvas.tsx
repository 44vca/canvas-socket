import styles from './Canvas.module.scss';

const Canvas = () => {
  return (
    <div className={styles.canvas}>
      <canvas width={600} height={400}></canvas>
    </div>
  );
};

export default Canvas;

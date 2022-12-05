import classnames from 'classnames';

import styles from './Toolbar.module.scss';

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <button className={classnames(styles.button, styles.brush)}></button>
      <button className={classnames(styles.button, styles.rectangle)}></button>
      <button className={classnames(styles.button, styles.circle)}></button>
      <button className={classnames(styles.button, styles.eraser)}></button>
      <button className={classnames(styles.button, styles.line)}></button>
      <input type="color" />
      <button className={classnames(styles.button, styles.undo)}></button>
      <button className={classnames(styles.button, styles.redo)}></button>
      <button className={classnames(styles.button, styles.save)}></button>
    </div>
  );
};

export default Toolbar;

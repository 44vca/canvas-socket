import classnames from 'classnames';

import Brush from "../../tools/Brush";
import Rectangle from "../../tools/Rectangle";
import Circle from "../../tools/Circle";
import Eraser from "../../tools/Eraser";
import Line from "../../tools/Line";

import toolState from "../../store/toolState";
import canvasState from "../../store/canvasState";

import styles from './Toolbar.module.scss';

const Toolbar = () => {
  const handleClick = (Tool: any) => {
    toolState.setTool(new Tool(canvasState.canvas));
  };

  const handleColorChange = (event: any) => {
    const color = event.target.value;

    toolState.setFillColor(color);
    toolState.setStrokeColor(color);
  };

  const handleUndo = () => {
    canvasState.undo();
  };

  const handleRedo = () => {
    canvasState.redo();
  };

  return (
    <div className={styles.toolbar}>
      <button className={classnames(styles.button, styles.brush)} onClick={() => handleClick(Brush)} />
      <button className={classnames(styles.button, styles.rectangle)} onClick={() => handleClick(Rectangle)} />
      <button className={classnames(styles.button, styles.circle)} onClick={() => handleClick(Circle)} />
      <button className={classnames(styles.button, styles.eraser)} onClick={() => handleClick(Eraser)} />
      <button className={classnames(styles.button, styles.line)} onClick={() => handleClick(Line)} />
      <input type="color" onChange={handleColorChange} />
      <button className={classnames(styles.button, styles.undo)} onClick={handleUndo} />
      <button className={classnames(styles.button, styles.redo)} onClick={handleRedo} />
      <button className={classnames(styles.button, styles.save)} />
    </div>
  );
};

export default Toolbar;

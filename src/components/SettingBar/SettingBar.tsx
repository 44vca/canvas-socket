import toolState from "../../store/toolState";

import styles from './SettingBar.module.scss';

const SettingBar = () => {
  const handleChange = (event: any) => {
    const lineWidth = event.target.value;

    toolState.setLineWidth(lineWidth);
  };

  return (
    <div className={styles.settingBar}>
      <label htmlFor="line-width">Толщина линии</label>
      <input id="line-width" type="number" defaultValue={1} min={1} style={{ margin: '0 10px', width: '50px' }}
             onChange={handleChange} />
    </div>
  );
};

export default SettingBar;

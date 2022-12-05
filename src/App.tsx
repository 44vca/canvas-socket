import Toolbar from './components/Toolbar/Toolbar';
import SettingBar from './components/SettingBar/SettingBar';
import Canvas from './components/Canvas/Canvas';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
}

export default App;

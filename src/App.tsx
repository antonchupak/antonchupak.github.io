import React from 'react';
import styles from './App.module.sass';

// vendor
import 'ress';

// components
import {
  Header,
  Footer
} from './components';

// other
import { HELLO_TEXT } from './framework/constants';

const App: React.FC = () => {
  return <>
    <div className={styles.app}>
      
      <Header
        name={HELLO_TEXT.name}
        position={HELLO_TEXT.position}
      />

      <Footer
        description={HELLO_TEXT.description}
      />

    </div>
    
    <div className={styles.bg} />
  </>;
}

export default App;

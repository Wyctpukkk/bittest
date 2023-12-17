import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

function App() {
  const [showAside, setShowAside] = useState<boolean>(false);

  return (
    <div
      className={`bg-darkBlue ${
        showAside ? 'h-[100vh] overflow-hidden' : 'h-full'
      } w-full px-[25px] py-[34px] flex flex-col gap-[32px]`}
    >
      <Header />
      <Dashboard showAside={showAside} setShowAside={setShowAside} />
    </div>
  );
}

export default App;

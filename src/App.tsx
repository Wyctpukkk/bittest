import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

function App() {
  const [showAside, setShowAside] = useState<boolean>(false);

  return (
    <div
      className={`bg-darkBlue ${
        showAside ? 'h-[100vh] overflow-hidden' : 'min-h-[100vh] h-full'
      } w-full sm:px-[25px] py-[27px] sm:py-[34px] flex flex-col gap-[32px]`}
    >
      <div className="px-[15px] sm:px-[0px]">
        <Header />
      </div>
      <Dashboard showAside={showAside} setShowAside={setShowAside} />
    </div>
  );
}

export default App;

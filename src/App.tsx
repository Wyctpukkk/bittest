import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

function App() {
  return (
    <div className="bg-darkBlue w-full h-full px-[25px] py-[34px] flex flex-col gap-[32px]">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;

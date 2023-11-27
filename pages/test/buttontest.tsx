/* App.tsx  */
import Button from '../../components/ui/Button';

const App = () => {
  return (
    <main>
      <Button
        handleClick={() => {}}
        styles={'w-full bg-violet-500'}
        type={'button'}
        title={'Open modal'}
        disabled={false}
      >
        {/* children */}
        Open modal
      </Button>
    </main>
  );
};

export default App;

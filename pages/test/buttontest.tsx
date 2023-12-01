/* App.tsx  */
import Button from '../../components/ui/Button';
import { withUserAuth } from '@/helpers/withAuth';

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

export default withUserAuth(App);

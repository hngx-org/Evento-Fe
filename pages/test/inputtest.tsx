import React from 'react';
import Input from '../../components/ui/Input';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto py-20">
        <div className="grid grid-cols-4 gap-8">
          <Input label="Your name" required />
          <Input
            label="Your name"
            placeholder="Error State"
            errorText="Field is required"
            error
            required
          />
          <Input label="Your name" placeholder="Success State" valid />
          <Input label="Your name" placeholder="Disabled" disabled />

          <Input label="Your name" placeholder="Square" rounded="none" />
          <Input label="Your name" placeholder="Small" rounded="sm" />
          <Input label="Your name" placeholder="Medium" rounded="md" />
          <Input label="Your name" placeholder="Large is default" />
        </div>
      </div>
    </div>
  );
}

export default App;

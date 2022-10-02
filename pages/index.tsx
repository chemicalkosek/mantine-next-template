import { Radio } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <div style={{ margin: 'auto', maxWidth: '500px' }}>
      <Welcome />
      <div style={{ margin: '20px auto' }}>
        <Radio.Group
          name="favoriteFramework"
          label="Select your favorite framework/library"
          description="This is anonymous"
          orientation="vertical"
          size="sm"
          withAsterisk
        >
          <Radio value="react" label="React" />
          <Radio value="svelte" label="Svelte" />
          <Radio value="ng" label="Angular" />
          <Radio value="vue" label="Vue" />
        </Radio.Group>
      </div>
      <ColorSchemeToggle />
    </div>
  );
}

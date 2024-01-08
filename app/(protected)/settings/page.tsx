import { signOut } from '@/auth';

const SettingsPage = () => {
  return (
    <div>
      <h1>Settings</h1>
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <button type='submit'>Sign Out</button>
      </form>
    </div>
  );
};

export default SettingsPage;

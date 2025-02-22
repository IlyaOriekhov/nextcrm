import AddCompanyButton from '@/app/components/add-company-button';
import ServerComponent from './components/server-component';
import ClientComponent from './components/client-component';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page{new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent />
    </main>
  );
}

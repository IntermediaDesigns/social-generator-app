import { useUser } from "../lib/context/userData";

export function Dashboard() {
  const { user } = useUser();

  return (
    <main>
      <h1>Dashboard</h1>
      {user && user.current ? (
        <p>Welcome, {user.current.name}!</p>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
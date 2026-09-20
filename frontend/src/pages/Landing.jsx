import { useEffect, useState } from 'react';

// Piece 1's only goal: prove the frontend and backend are actually connected.
// Piece 2 replaces this with the real landing page from the spec —
// the "Continue as Patient" / "Continue as Healthcare Partner" pathways
// and the Siya command bar.
export default function Landing() {
  const [backendStatus, setBackendStatus] = useState('checking...');

  // useEffect with an empty [] dependency array means:
  // "run this once, right after the page first renders."
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.message))
      .catch(() => setBackendStatus('could not reach backend'));
  }, []);

  return (
    <main className="scaffold-check">
      <h1>HealX</h1>
      <p>
        Backend says: <strong>{backendStatus}</strong>
      </p>
    </main>
  );
}

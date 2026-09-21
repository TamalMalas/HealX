import SiyaBar from '../components/SiyaBar.jsx';

// Piece 3 will turn these two buttons into real navigation
// (to patient auth and partner auth). For now they're placeholders
// that prove the layout and design work.
function handlePatientClick() {
  console.log('Continue as patient — wired up in Piece 3');
}

function handlePartnerClick() {
  console.log('Continue as healthcare partner — wired up in Piece 3');
}

export default function Landing() {
  return (
    <>
      <SiyaBar />

      <header className="hero">
        <p className="hero__wordmark">HealX</p>
        <h1 className="hero__headline">
          Tell us what&apos;s wrong.
          <br />
          We&apos;ll find who can help.
        </h1>
      </header>

      <main className="pathways">
        <button
          className="pathway pathway--patient"
          onClick={handlePatientClick}
          type="button"
        >
          <h2 className="pathway__title">Continue as patient</h2>
          <p className="pathway__subtext">
            Find care, book visits, and keep your records in one place.
          </p>
        </button>

        <button
          className="pathway pathway--partner"
          onClick={handlePartnerClick}
          type="button"
        >
          <h2 className="pathway__title">Continue as healthcare partner</h2>
          <p className="pathway__subtext">
            Manage bookings, patients, and your practice.
          </p>
        </button>
      </main>
    </>
  );
}
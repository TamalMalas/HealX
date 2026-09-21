// The persistent AI assistant bar described in the spec: upload button,
// "Ask Siya" input, mic button. Piece 2 is UI only — no real triage logic
// yet. That comes in a later piece, wired into this same component.
export default function SiyaBar() {
  return (
    <div className="siya-bar">
      <button className="siya-bar__icon-btn" aria-label="Upload a document or photo" type="button">
        +
      </button>
      <input
        className="siya-bar__input"
        type="text"
        placeholder="Ask Siya"
        aria-label="Ask Siya"
      />
      <button className="siya-bar__icon-btn" aria-label="Speak to Siya" type="button">
        🎤
      </button>
    </div>
  );
}
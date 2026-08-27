import { SectionShell } from "@/components/layout/SectionShell";

const ARTISTS = [
  "TLC",
  "Aaliyah",
  "SWV",
  "Jodeci",
  "Mary J. Blige",
  "Usher",
  "Brandy",
  "Monica",
  "112",
  "Maxwell",
  "Jagged Edge",
  "Destiny's Child",
];

export function SoundSection() {
  return (
    <SectionShell
      id="sound"
      tight
      eyebrow="The Sound"
      title="90s and early-2000s R&B, all night"
      lede="No autoplay, no playlist embed — just the artists setting the tone."
    >
      <div className="sound-strip">
        <div className="sound-track">
          {ARTISTS.map((artist) => (
            <span key={artist}>{artist}</span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// Marquee.jsx
export default function Marquee() {
  return (
    <>
      <div className="bg-red-500 text-white p-4">Tailwind is working?</div>

      <div className="overflow-hidden w-full bg-black">
        <div className="flex whitespace-nowrap animate-marquee">
          <p className="text-white text-xl px-8">🚀 Scroll Like Magic</p>
          <p className="text-white text-xl px-8">🔥 Powered by Tailwind</p>
          <p className="text-white text-xl px-8">✨ Works Without GSAP</p>
          <p className="text-white text-xl px-8">🚀 Scroll Like Magic</p>{" "}
          {/* Repeat for loop effect */}
        </div>
      </div>
    </>
  );
}

// src/pages/projects/VbaIntellisense.tsx

export default function SleepTracker() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-customGreen mb-4">VBA Intellisense</h1>

      <p className="text-gray-700 text-lg mb-6">
        This project extends the VBA editor by introducing a custom IntelliSense
        system built in C#. It features autocomplete, symbol lookup, and context-aware
        documentation inside a standalone WinForms app.
      </p>

      <img
        src="/images/vba-intellisense-main.png"
        alt="VBA IntelliSense Screenshot"
        className="rounded-xl shadow mb-6"
      />

      <video
        className="rounded-xl w-full mb-6"
        controls
        poster="/images/vba-intellisense-thumb.png"
      >
        <source src="/videos/vba-intellisense-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <a
        href="https://github.com/yourusername/vba-intellisense"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white bg-customGreen hover:bg-emerald-700 px-4 py-2 rounded-lg transition"
      >
        View Source on GitHub
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 text-center bg-[#0f0f10]">
      <div className="max-w-7xl mx-auto">
        <a
          href="https://www.instagram.com/anko_studios/?hl=en"
          target="_blank"
          className="inline-flex items-center justify-center mb-4"
        >
          <img
            src="https://res.cloudinary.com/dhtytlwnz/image/upload/v1755606513/Anko_Studios_LOGO_for_social_media_ltaet6.png"
            alt="Anko Studios Social"
            className="h-10 w-10 rounded-full"
          />
        </a>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ANKO Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

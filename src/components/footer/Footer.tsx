import Link from "next/link";

function IconTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M22 5.92c-.74.33-1.53.55-2.36.66a4.06 4.06 0 0 0 1.79-2.24 8.08 8.08 0 0 1-2.57.98A4.04 4.04 0 0 0 16.1 4c-2.24 0-4.06 1.86-4.06 4.16 0 .33.03.64.1.94A11.5 11.5 0 0 1 3.16 4.86a4.27 4.27 0 0 0-.55 2.1c0 1.44.71 2.72 1.79 3.47-.66-.02-1.29-.21-1.83-.51v.05c0 2.02 1.37 3.7 3.18 4.09-.33.1-.68.15-1.04.15-.25 0-.5-.02-.73-.07.5 1.65 2.02 2.86 3.8 2.9A8.12 8.12 0 0 1 2 19.56 11.45 11.45 0 0 0 8.29 21c7.93 0 12.27-6.79 12.27-12.67 0-.19 0-.38-.01-.56A8.97 8.97 0 0 0 22 5.92z"
      />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.82v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.15V23h-4v-7.07c0-1.69-.03-3.86-2.35-3.86-2.36 0-2.72 1.84-2.72 3.74V23h-4V8z"
      />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.483v-9.294H9.847v-3.622h2.961V8.413c0-2.934 1.793-4.533 4.414-4.533 1.255 0 2.333.093 2.647.135v3.07l-1.818.001c-1.426 0-1.701.678-1.701 1.672v2.192h3.404l-.444 3.622h-2.96V24h5.803C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-neutral-300">© {new Date().getFullYear()} Fuel Industry Association of South Africa. All rights reserved.</p>

          <div className="flex w-full items-center justify-center gap-10 sm:w-auto sm:justify-end">
            <nav aria-label="Footer">
              <ul className="flex items-center gap-8 text-[15px] font-semibold">
                <li>
                  <Link href="/partners" className="hover:text-secondary">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/media" className="hover:text-secondary">
                    Media
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-secondary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-6">
              <Link href="#" aria-label="Twitter" className="text-white hover:text-secondary">
                <IconTwitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-white hover:text-secondary">
                <IconLinkedIn className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-white hover:text-secondary">
                <IconFacebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type CtaAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

type CtaProps = {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  primaryAction?: CtaAction;
  secondaryAction?: CtaAction;
  className?: string;
  containerClassName?: string;
};

/**
 * Reusable two-column CTA section with reversible image/content layout.
 * A bottom-weighted shadow is applied to the card container.
 */
export default function Cta({
  eyebrow,
  title,
  description,
  imageUrl,
  imageAlt = "",
  imagePosition = "right",
  primaryAction,
  secondaryAction,
  className,
  containerClassName,
}: CtaProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={cn("mx-auto mt-10 max-w-7xl", imageUrl ? "px-4" : "px-0", containerClassName)}>
      <div
        className={cn(
          "overflow-hidden rounded-xl text-white",
          imageUrl ? "grid md:grid-cols-2" : "block",
          // bottom-emphasized shadow
          "shadow-[0_24px_48px_-24px_rgba(0,0,0,0.45)]",
          className
        )}
        style={{ backgroundColor: '#0f243f' }}
      >
        {/* Content */}
        <div className={cn(
          imageUrl ? "p-8 md:p-10 lg:p-12" : "p-8 md:p-10 lg:p-12 pr-0", 
          imageUrl ? (isImageLeft ? "md:order-2" : "md:order-1") : "w-full"
        )}>
          {eyebrow ? (
            <div className="mb-3 flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-800 border-2 border-blue-400 flex items-center justify-center text-white font-bold text-sm">
                {eyebrow}
              </div>
            </div>
          ) : null}
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          {description ? (
            <p className={cn("mt-4 text-[17px] leading-7 text-white/85", imageUrl ? "max-w-2xl" : "max-w-none")} dangerouslySetInnerHTML={{
              __html: description.replace(
                /(profiles@bankenvelddev\.co\.za|clo@bankenvelddev\.co\.za)/g,
                '<a href="mailto:$1" class="text-blue-300 hover:text-blue-200 underline">$1</a>'
              )
            }} />
          ) : null}

          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryAction ? (
                <Link
                  href={primaryAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={primaryAction.ariaLabel || primaryAction.label}
                  className="inline-flex items-center justify-center rounded-md bg-red-500 px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-red/90"
                >
                  {primaryAction.label}
                </Link>
              ) : null}
              {secondaryAction ? (
                <Link
                  href={secondaryAction.href}
                  aria-label={secondaryAction.ariaLabel || secondaryAction.label}
                  className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-[15px] font-semibold text-white ring-1 ring-inset ring-white/30 transition hover:bg-white/20"
                >
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>

        {/* Image */}
        {imageUrl && (
          <div className={cn("relative min-h-[240px] md:min-h-[320px]", isImageLeft ? "md:order-1" : "md:order-2")}>
            <Image src={imageUrl} alt={imageAlt} fill className="object-cover object-center" />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}



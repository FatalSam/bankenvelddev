import Link from "next/link";
import type { ReactNode } from "react";

type CtaAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

type CtaProps = {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  primaryAction?: CtaAction;
  secondaryAction?: CtaAction;
  className?: string;
};

export default function CtaCentered({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CtaProps) {
  return (
    <section className={`mx-auto max-w-4xl px-4 py-16 text-center ${className || ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-neutral-500">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>

      {description ? (
        <p className="mt-4 text-lg leading-7 text-neutral-600">{description}</p>
      ) : null}

      {(primaryAction || secondaryAction) && (
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {primaryAction ? (
            <Link
              href={primaryAction.href}
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
              className="inline-flex items-center justify-center rounded-md bg-neutral-100 px-6 py-3 text-[15px] font-semibold text-neutral-700 ring-1 ring-inset ring-neutral-300 transition hover:bg-neutral-200"
            >
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      )}
    </section>
  );
}

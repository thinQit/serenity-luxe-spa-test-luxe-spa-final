import Image from "next/image";

export type HeroImageProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
  className?: string;
};

export default function HeroImage({
  title,
  subtitle,
  imageSrc = "/hero.jpg",
  imageAlt = "Hero image",
  priority = false,
  className,
}: HeroImageProps) {
  return (
    <section className={className ?? ""}>
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            {title ? (
              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
            ) : null}
            {subtitle ? (
              <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
            ) : null}
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border bg-muted">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

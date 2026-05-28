"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock3,
  ExternalLink,
  MapPin,
  Menu,
  Phone,
  PlayCircle,
  Star,
  UsersRound,
  Utensils,
  Wifi
} from "lucide-react";

const heroMedia = {
  poster: "https://files.yappe.in/place/full/chouksey-marriage-garden-4695617.webp",
  videoUrl: "",
  title: "Chouksey Marriage Garden venue film"
};

const venuePhotos = [
  {
    src: "https://files.yappe.in/place/full/chouksey-marriage-garden-4695617.webp",
    title: "Garden entry and open lawn"
  },
  {
    src: "https://files.yappe.in/place/full/chouksey-marriage-garden-4695618.webp",
    title: "Wedding lawn setup"
  },
  {
    src: "https://files.yappe.in/place/full/chouksey-marriage-garden-4695619.webp",
    title: "Celebration space"
  },
  {
    src: "https://files.yappe.in/place/full/chouksey-marriage-garden-4695620.webp",
    title: "Hall and event area"
  }
];

const quickStats = [
  { icon: UsersRound, label: "Floating capacity", value: "700+", detail: "BookEventZ listing" },
  { icon: MapPin, label: "Lawn area", value: "43,560 sq.ft.", detail: "VenueBook listing" },
  { icon: Clock3, label: "Rooms", value: "15 AC", detail: "Up to 90 guests" },
  { icon: Car, label: "4-wheeler parking", value: "550", detail: "Listed capacity" }
];

const facilities = [
  "Big lawn for wedding, reception and sangeet",
  "Marriage hall listed at 2,700 sq.ft.",
  "Stage area listed at 900 sq.ft. for lawn events",
  "Kitchen area listed at 5,000 sq.ft.",
  "Generator power backup",
  "Normal/cane water supply",
  "Bride and groom changing rooms",
  "Havan allowed",
  "Guest accommodation rooms",
  "Large two-wheeler and four-wheeler parking"
];

const eventTypes = [
  "Wedding",
  "Reception",
  "Engagement",
  "Birthday",
  "Corporate event",
  "Family gathering"
];

const contactCards = [
  {
    label: "Mobile",
    value: "7000699657",
    href: "tel:7000699657"
  },
  {
    label: "Phone",
    value: "9425679299",
    href: "tel:9425679299"
  },
  {
    label: "Justdial",
    value: "08128805895",
    href: "tel:08128805895"
  }
];

const ratingCards = [
  { source: "Yappe", score: "3.7", note: "265 reviews" },
  { source: "Justdial", score: "3.8", note: "300 reviews, 37 photos" },
  { source: "BookEventZ", score: "4.2", note: "1 review" }
];

const policies = [
  ["Veg menu starts", "Rs. 300 per plate"],
  ["Operation timing", "7 AM to 12 midnight"],
  ["Sales office", "10:30 AM to 8 PM"],
  ["Payment modes", "UPI, cash, card, cheque/DD, net banking"],
  ["Booking amount", "Listed as 28% on BookEventZ"],
  ["Late night music", "Listed as not allowed"],
  ["Outside catering", "Listed as not allowed"],
  ["Kids food", "Below 6 free, 6-12 half price"]
];

const sources = [
  {
    label: "BookEventZ",
    href: "https://www.bookeventz.com/banquets/bhopal/mandideep/chouksey-marriage-garden"
  },
  {
    label: "Yappe",
    href: "https://yappe.in/madhya-pradesh/bhopal/chouksey-marriage-garden/446551"
  },
  {
    label: "VenueBook",
    href: "https://www.venuebook.online/Home/SingleList/chouksey-marriage-garden-In--1161"
  },
  {
    label: "Justdial Photos",
    href: "https://www.justdial.com/photos/chouksey-marriage-garden-mandideep-bhopal-banquet-halls-cljbm-pc-79546565-sco-17yyeqeiaaq"
  }
];

function SectionTitle({
  eyebrow,
  title,
  body,
  light = false
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-10">
      <p className={`section-kicker mb-4 ${light ? "text-champagne" : "text-antique"}`}>
        {eyebrow}
      </p>
      <h2
        className={`editorial-title text-[clamp(2.65rem,10vw,4.8rem)] ${
          light ? "text-pearl" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 sm:text-base sm:leading-8 ${light ? "text-pearl/72" : "text-ink/66"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ivory pb-20 sm:pb-0">
      <div className="noise" aria-hidden="true" />

      <nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-pearl sm:px-8">
        <a href="#top" className="font-display text-2xl font-semibold">
          CMG
        </a>
        <div className="hidden items-center gap-6 rounded-full border border-pearl/16 bg-ink/38 px-5 py-3 text-sm font-semibold text-pearl/84 backdrop-blur-xl md:flex">
          <a href="#spaces" className="hover:text-champagne">
            Spaces
          </a>
          <a href="#gallery" className="hover:text-champagne">
            Photos
          </a>
          <a href="#pricing" className="hover:text-champagne">
            Details
          </a>
          <a href="#map" className="hover:text-champagne">
            Map
          </a>
        </div>
        <a
          href="tel:7000699657"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-champagne/50 bg-champagne/16 text-champagne backdrop-blur-xl transition hover:bg-champagne hover:text-ink"
          aria-label="Call Chouksey Marriage Garden"
        >
          <Phone size={17} />
        </a>
      </nav>

      <div className="fixed bottom-3 left-3 right-3 z-50 grid grid-cols-[1fr_1fr_auto] gap-2 rounded-[8px] border border-pearl/14 bg-ink/86 p-2 text-pearl shadow-candle backdrop-blur-xl md:hidden">
        <a
          href="tel:7000699657"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-champagne px-3 text-sm font-extrabold text-ink"
        >
          <Phone size={16} />
          Call
        </a>
        <a
          href="https://www.google.com/maps?q=23.1226875,77.5034375"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-pearl/16 px-3 text-sm font-extrabold text-pearl"
        >
          <MapPin size={16} />
          Map
        </a>
        <a
          href="#spaces"
          className="inline-flex h-12 w-12 items-center justify-center rounded-[6px] border border-pearl/16 text-pearl"
          aria-label="Open venue details"
        >
          <Menu size={18} />
        </a>
      </div>

      <section id="top" className="relative min-h-[100svh] bg-ink text-pearl">
        <div className="absolute inset-0">
          <Image
            src={heroMedia.poster}
            alt="Chouksey Marriage Garden lawn and venue"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {heroMedia.videoUrl ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              poster={heroMedia.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={heroMedia.title}
            >
              <source src={heroMedia.videoUrl} />
            </video>
          ) : null}
        </div>
        <div className="image-vignette absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,8,6,0.54),rgba(9,8,6,0.56)_35%,rgba(9,8,6,0.86)),linear-gradient(90deg,rgba(9,8,6,0.78),rgba(9,8,6,0.24)_56%,rgba(9,8,6,0.66))]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-28 pt-28 sm:items-center sm:px-8 md:pb-24">
          <div className="max-w-5xl">
            <p className="section-kicker ornament mb-5 inline-block text-champagne sm:mb-7">
              Samardha Village, Mandideep Road, Bhopal
            </p>
            <h1 className="editorial-title max-w-5xl text-[clamp(3.35rem,18vw,10.8rem)] text-pearl">
              Chouksey
              <span className="block text-champagne">Marriage Garden</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-pearl/80 sm:mt-7 sm:text-xl sm:leading-8">
              A spacious hall-with-lawn wedding venue near Mandideep, built for
              big Indian celebrations, open-air functions, parking-heavy guest
              arrivals and full family gatherings.
            </p>
            <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
              <a
                href="tel:7000699657"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-[8px] bg-pearl px-6 text-sm font-extrabold text-ink transition hover:bg-champagne sm:rounded-full"
              >
                <Phone size={17} />
                Call 7000699657
              </a>
              <a
                href="#map"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-[8px] border border-pearl/28 px-6 text-sm font-extrabold text-pearl transition hover:border-champagne hover:text-champagne sm:rounded-full"
              >
                <MapPin size={17} />
                Get directions
              </a>
              <a
                href="#video"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-[8px] border border-champagne/42 px-6 text-sm font-extrabold text-champagne transition hover:bg-champagne hover:text-ink sm:rounded-full"
              >
                <PlayCircle size={17} />
                View video
              </a>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-10 sm:max-w-2xl sm:gap-3">
              {[
                ["700+", "Capacity"],
                ["43k", "Sq.ft. lawn"],
                ["550", "Parking"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-[8px] border border-pearl/14 bg-pearl/10 p-3 backdrop-blur-xl sm:p-4">
                  <p className="font-display text-3xl leading-none text-champagne sm:text-4xl">{value}</p>
                  <p className="mt-1 text-[0.68rem] font-bold uppercase text-pearl/68 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="paper px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {quickStats.map((item) => (
            <article key={item.label} className="rounded-[8px] border border-antique/18 bg-pearl/74 p-4 shadow-silk sm:p-6">
              <item.icon className="mb-4 text-antique" size={22} />
              <p className="section-kicker text-antique">{item.label}</p>
              <p className="mt-3 font-display text-3xl leading-none text-ink sm:text-5xl">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-ink/58">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="spaces" className="bg-ivory px-4 py-16 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Venue Snapshot"
            title="Big lawn, hall, rooms and parking in one place."
            body="The listed venue profile makes it suitable for high-footfall weddings as well as smaller family functions."
          />
          <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-ink shadow-silk sm:min-h-[420px]">
              <Image
                src={venuePhotos[0].src}
                alt="Chouksey Marriage Garden lawn"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/72 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-pearl">
                <p className="section-kicker text-champagne">Hall With Lawn</p>
                <p className="mt-3 font-display text-3xl sm:text-4xl">Open-air wedding scale</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {facilities.map((item) => (
                <div key={item} className="flex gap-3 rounded-[8px] border border-antique/18 bg-pearl/72 p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-antique" size={18} />
                  <p className="text-sm font-semibold leading-6 text-ink/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-pearl sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker mb-5 text-champagne">Best For</p>
            <h2 className="editorial-title text-[clamp(2.75rem,11vw,5.2rem)] text-pearl">
              Functions that need space, parking and simple movement.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {eventTypes.map((item) => (
              <div key={item} className="glass flex items-center gap-3 rounded-[8px] p-5">
                <CalendarCheck className="text-champagne" size={20} />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-noir px-4 py-16 text-pearl sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Photos"
            title="Venue frames from public listings."
            body="Images are shown from public venue listing sources so visitors can quickly understand the place."
            light
          />
          <div className="grid auto-rows-[250px] gap-3 sm:gap-4 md:grid-cols-12 md:auto-rows-[330px]">
            {venuePhotos.map((photo, index) => (
              <figure
                key={photo.src}
                className={`relative overflow-hidden rounded-[8px] ${
                  index === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="section-kicker text-champagne">Photo 0{index + 1}</p>
                  <p className="mt-2 font-display text-3xl">{photo.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="bg-ivory px-4 py-16 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker mb-5 text-antique">Broadcast Video</p>
            <h2 className="editorial-title text-[clamp(2.75rem,11vw,5.2rem)] text-ink">
              Add the venue video as the hero film.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/68 sm:text-lg sm:leading-8">
              The hero is already prepared as a Full HD video layer. Put the
              final video URL in <span className="font-semibold text-ink">heroMedia.videoUrl</span> and the same
              link can be used here for a clean broadcast presentation.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[8px] bg-ink shadow-silk sm:min-h-[340px]">
            {heroMedia.videoUrl ? (
              <video
                className="h-full min-h-[340px] w-full object-cover"
                controls
                poster={heroMedia.poster}
                preload="metadata"
              >
                <source src={heroMedia.videoUrl} />
              </video>
            ) : (
              <>
                <Image
                  src={heroMedia.poster}
                  alt="Chouksey Marriage Garden video poster"
                  fill
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="object-cover opacity-72"
                />
                <div className="absolute inset-0 bg-ink/42" />
                <div className="absolute inset-0 grid place-items-center p-6 text-center text-pearl">
                  <div>
                    <PlayCircle className="mx-auto text-champagne" size={58} />
                    <p className="section-kicker mt-5 text-champagne">Video ready</p>
                    <p className="mx-auto mt-3 max-w-md text-lg font-semibold leading-7 text-pearl/82">
                      Paste the Chouksey Marriage Garden video URL to play it
                      here and in the hero section.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="pricing" className="paper px-4 py-16 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Booking Details"
            title="Rates, timings and rules pulled into one view."
            body="Figures are from public listing pages and should be confirmed with the venue before booking."
          />
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-px overflow-hidden rounded-[8px] border border-antique/18 bg-antique/18">
              {policies.map(([label, value]) => (
                <div key={label} className="grid gap-2 bg-pearl/76 p-4 sm:grid-cols-[0.8fr_1.2fr] sm:p-5">
                  <p className="text-sm font-bold uppercase text-antique">{label}</p>
                  <p className="font-semibold text-ink/72">{value}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {ratingCards.map((item) => (
                  <article key={item.source} className="rounded-[8px] border border-antique/18 bg-pearl/76 p-5">
                    <div className="flex items-center gap-2 text-antique">
                      <Star size={18} fill="currentColor" />
                      <p className="text-sm font-bold uppercase">{item.source}</p>
                    </div>
                    <p className="mt-4 font-display text-5xl text-ink">{item.score}</p>
                    <p className="mt-2 text-sm font-semibold text-ink/58">{item.note}</p>
                  </article>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[8px] border border-antique/18 bg-pearl/76 p-6">
                  <UsersRound className="text-antique" size={26} />
                  <p className="mt-4 font-display text-3xl text-ink sm:text-4xl">600 seating</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink/62">
                    BookEventZ lists 600 seating and 700 floating capacity.
                  </p>
                </div>
                <div className="rounded-[8px] border border-antique/18 bg-pearl/76 p-6">
                  <Car className="text-antique" size={26} />
                  <p className="mt-4 font-display text-3xl text-ink sm:text-4xl">Large parking</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink/62">
                    VenueBook lists separate two-wheeler and four-wheeler areas.
                  </p>
                </div>
                <div className="rounded-[8px] border border-antique/18 bg-pearl/76 p-6">
                  <Utensils className="text-antique" size={26} />
                  <p className="mt-4 font-display text-3xl text-ink sm:text-4xl">Veg menu</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink/62">
                    Starting veg menu is listed around Rs. 300 per plate.
                  </p>
                </div>
                <div className="rounded-[8px] border border-antique/18 bg-pearl/76 p-6">
                  <Wifi className="text-antique" size={26} />
                  <p className="mt-4 font-display text-3xl text-ink sm:text-4xl">Power backup</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink/62">
                    Generator backup is listed for event continuity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="bg-ink px-4 py-16 text-pearl sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker mb-5 text-champagne">Location</p>
            <h2 className="editorial-title text-[clamp(2.75rem,11vw,5.2rem)] text-pearl">
              Samardha Village, Mandideep, Bhopal.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-pearl/72 sm:text-lg sm:leading-8">
              Address listed as Samardha Village, Mandideep, Bhopal, Madhya
              Pradesh 462046. VenueBook also lists the Samardha, Sai Mandir,
              Ward No. 85, Hoshangabad Road area with Shri Vinayak Ware House
              as landmark.
            </p>
            <div className="mt-8 grid gap-3">
              {contactCards.map((item) => (
                <a
                  key={item.value}
                  href={item.href}
                  className="glass flex items-center justify-between gap-4 rounded-[8px] p-5 transition hover:border-champagne/50"
                >
                  <span>
                    <span className="section-kicker block text-champagne">{item.label}</span>
                    <span className="mt-1 block text-2xl font-semibold">{item.value}</span>
                  </span>
                  <Phone className="text-champagne" size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[8px] border border-pearl/14 bg-pearl/8 shadow-candle">
            <iframe
              title="Chouksey Marriage Garden map"
              src="https://www.google.com/maps?q=23.1226875,77.5034375&z=15&output=embed"
              className="h-[360px] w-full sm:h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="paper px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-display text-4xl text-ink sm:text-5xl">Chouksey Marriage Garden</p>
            <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-ink/60">
              Venue-focused responsive website for weddings, receptions,
              engagements and family functions in the Bhopal-Mandideep area.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {sources.map((source) => (
              <a
                key={source.label}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-antique/24 bg-pearl/72 px-4 py-3 text-sm font-bold text-ink/68 transition hover:border-antique hover:text-ink"
              >
                {source.label}
                <ExternalLink size={14} />
              </a>
            ))}
            <a
              href="https://www.google.com/maps?q=23.1226875,77.5034375"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-antique px-4 py-3 text-sm font-bold text-pearl transition hover:bg-ink"
            >
              Open map
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

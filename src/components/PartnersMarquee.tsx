"use client";

import Image from "next/image";

interface Partner {
  name: string;
  path: string;
}

const ROW_1: Partner[] = [
  { name: "Sony SET", path: "/partners/individual/sony_set.png" },
  { name: "Sony SAB", path: "/partners/individual/sony_sab.png" },
  { name: "Sony Max", path: "/partners/individual/sony_max.png" },
  { name: "Sony Liv", path: "/partners/individual/sony_liv.png" },
  { name: "Sony Max 2", path: "/partners/individual/sony_max2.png" },
  { name: "Sony Marathi", path: "/partners/individual/sony_marathi.png" },
  { name: "Sony Sports", path: "/partners/individual/sony_sports.png" },
  { name: "Colors", path: "/partners/individual/colors.png" },
  { name: "Colors Marathi", path: "/partners/individual/colors_marathi.png" },
  { name: "Jio Cinema", path: "/partners/individual/jio_cinema.png" },
  { name: "Jio Studios", path: "/partners/individual/jio_studios.png" },
];

const ROW_2: Partner[] = [
  { name: "Amazon miniTV", path: "/partners/individual/amazon_minitv.png" },
  { name: "MX Player", path: "/partners/individual/mx_player.png" },
  { name: "Star Plus", path: "/partners/individual/star_plus.png" },
  { name: "Star Pravah", path: "/partners/individual/star_pravah.png" },
  { name: "Star Gold", path: "/partners/individual/star_gold.png" },
  { name: "Zee TV", path: "/partners/individual/zee_tv.png" },
  { name: "Zee Cinema", path: "/partners/individual/zee_cinema.png" },
  { name: "Zee Marathi", path: "/partners/individual/zee_marathi.png" },
  { name: "Zee Anmol", path: "/partners/individual/zee_anmol.png" },
  { name: "Zee Cafe", path: "/partners/individual/zee_cafe.png" },
];

export default function PartnersMarquee() {
  // We duplicate rows to create a seamless wrapping effect for infinite marquee scroll
  const row1Items = [...ROW_1, ...ROW_1];
  const row2Items = [...ROW_2, ...ROW_2];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Subtle left/right vignette fade masks to hide edges of scrolling marquees */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Row 1: Scrolling Left */}
      <div className="flex w-full mb-6">
        <div className="animate-marquee flex gap-5">
          {row1Items.map((partner, index) => (
            <div
              key={`row1-${partner.name}-${index}`}
              className="group relative flex h-20 w-44 shrink-0 items-center justify-center px-4 py-3 transition-all duration-300 hover:scale-110"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Subtle hover background accent glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,94,0,0.08)_0%,transparent_70%)] pointer-events-none" />
              
              <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:translate-z-[10px]">
                <Image
                  src={partner.path}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={60}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Scrolling Right */}
      <div className="flex w-full">
        <div 
          className="animate-marquee flex gap-5"
          style={{ animationDirection: "reverse" }}
        >
          {row2Items.map((partner, index) => (
            <div
              key={`row2-${partner.name}-${index}`}
              className="group relative flex h-20 w-44 shrink-0 items-center justify-center px-4 py-3 transition-all duration-300 hover:scale-110"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Subtle hover background accent glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,94,0,0.08)_0%,transparent_70%)] pointer-events-none" />

              <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:translate-z-[10px]">
                <Image
                  src={partner.path}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={60}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

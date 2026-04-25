export interface Car {
  brand: string;
  name: string;
  model: string;
  img: string;
  desc: string;
  specs: Record<string, string>;
  price: string;
  detail: string;
  gif: string;
}

export const cars: Car[] = [
  {
    brand: "Ferrari",
    name: "SF90 Stradale",
    model: "2024 · Hybrid V8",
    img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=700&q=80",
    desc: "The pinnacle of Ferrari engineering. A hybrid hypercar that blurs the line between road and track.",
    specs: { Power: "986 HP", "0–100": "2.5s", Top: "340 km/h", Drive: "AWD" },
    price: "₹7.5 Cr",
    detail: "The SF90 Stradale is Ferrari's most powerful road car — a plug-in hybrid marvel packing three electric motors alongside a twin-turbo V8.",
    gif: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
  },
  {
    brand: "Lamborghini",
    name: "Huracán EVO",
    model: "2024 · V10 NA",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=700&q=80",
    desc: "Naturally aspirated V10 thunder. The Huracán is emotion distilled into 631 horsepower.",
    specs: { Power: "631 HP", "0–100": "2.9s", Top: "325 km/h", Drive: "AWD" },
    price: "₹3.9 Cr",
    detail: "Lamborghini's iconic mid-engined supercar punches well above its weight with a screaming 5.2L V10.",
    gif: "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
  },
  {
    brand: "Porsche",
    name: "911 GT3 RS",
    model: "2024 · Flat-6",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80",
    desc: "The purist's choice. Rear-engine, rear-wheel drive perfection engineered for the Nürburgring.",
    specs: { Power: "518 HP", "0–100": "3.2s", Top: "296 km/h", Drive: "RWD" },
    price: "₹2.75 Cr",
    detail: "Obsessively engineered for the track, the 911 GT3 RS features a DRS-style active rear wing and a flat-six that revs to 9,000 RPM.",
    gif: "https://media.giphy.com/media/xT0xeJpnrWC3nQ8Kek/giphy.gif",
  },
  {
    brand: "McLaren",
    name: "720S",
    model: "2024 · Twin-Turbo V8",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    desc: "British brilliance wrapped in carbon fibre. The 720S defines what a supercar should feel like.",
    specs: { Power: "720 HP", "0–100": "2.8s", Top: "341 km/h", Drive: "RWD" },
    price: "₹4.65 Cr",
    detail: "McLaren's mid-engined masterpiece delivers 720 PS from its twin-turbo 4.0L V8. Dihedral doors and a near-telepathic chassis.",
    gif: "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif",
  },
  {
    brand: "Aston Martin",
    name: "DB12",
    model: "2024 · Twin-Turbo V8",
    img: "https://images.unsplash.com/photo-1596906809490-f5e5e5f22785?w=700&q=80",
    desc: "Grand Touring reimagined. The DB12 is the most powerful Aston Martin GT ever produced.",
    specs: { Power: "671 HP", "0–100": "3.6s", Top: "325 km/h", Drive: "RWD" },
    price: "₹4.59 Cr",
    detail: "Aston calls it a Super Tourer. With 671 hp from a 4.0L AMG-sourced V8, the DB12 raises the bar for long-distance devastation.",
    gif: "https://media.giphy.com/media/l3q2Hy66w1hpDSWUE/giphy.gif",
  },
  {
    brand: "BMW",
    name: "M8 Competition",
    model: "2024 · Twin-Turbo V8",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&q=80",
    desc: "The grand tourer that forgot it wasn't a race car. Precision German engineering at its peak.",
    specs: { Power: "625 HP", "0–100": "3.0s", Top: "305 km/h", Drive: "AWD" },
    price: "₹2.35 Cr",
    detail: "BMW M's flagship grand tourer houses a 4.4L twin-turbo V8 with 625 hp channelled through M xDrive AWD.",
    gif: "https://media.giphy.com/media/l0Iy8hSJalxmgTOF2/giphy.gif",
  },
  {
    brand: "Mercedes-Benz",
    name: "AMG GT",
    model: "2024 · Twin-Turbo V8",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700&q=80",
    desc: "Handcrafted AMG V8 power meets stunning grand touring design. Pure Mercedes excellence.",
    specs: { Power: "577 HP", "0–100": "3.2s", Top: "315 km/h", Drive: "RWD" },
    price: "₹2.55 Cr",
    detail: "The AMG GT features a handcrafted 4.0L twin-turbo V8 and a long hood silhouette that screams performance.",
    gif: "https://media.giphy.com/media/3o6ZsYm5mGr2IVPMTS/giphy.gif",
  },
  {
    brand: "Bugatti",
    name: "Chiron",
    model: "2024 · Quad-Turbo W16",
    img: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=700&q=80",
    desc: "1,500 horsepower of absolute engineering perfection. The ultimate hypercar.",
    specs: { Power: "1500 HP", "0–100": "2.4s", Top: "420 km/h", Drive: "AWD" },
    price: "₹25 Cr",
    detail: "The Bugatti Chiron's quad-turbocharged W16 engine produces 1,500 hp. Each engine is hand-assembled by one technician.",
    gif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  },
];

export const funnyGifs = [
  "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
  "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
  "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
  "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  "https://media.giphy.com/media/l3q2Hy66w1hpDSWUE/giphy.gif",
  "https://media.giphy.com/media/xT0xeJpnrWC3nQ8Kek/giphy.gif",
  "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif",
  "https://media.giphy.com/media/l0Iy8hSJalxmgTOF2/giphy.gif",
];

export const rtl = (str: string) => str.split(' ').reverse().join(' ');

function objectFactory() {}

const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

const products = factory(library, orders);
console.log(products);

const items = [
  {
    item: "Benugo Flat White 8oz",
    kcal: 117,
    price: 2.35,
    imageSrc: require("../../../assets/images/Coffee1.jpg"),
  },
  {
    item: "Benugo Latte 12oz",
    kcal: 202,
    price: 3.0,
    imageSrc: require("../../../assets/images/Coffee2.png"),
  },
];

export default {
  branches: {
    Benugo: items.map((i) => ({ ...i, item: `Benugo ${i.item}` })),
    "Social Bee": items.map((i) => ({ ...i, item: `ECR ${i.item}` })),
  },
};

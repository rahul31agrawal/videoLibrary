import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Comedy",
    description:
      "It has comedy videos",
      views:6,
      duration: "1:30",
      yId:"9YSbflKeOZQ",
  },
  {
    _id: uuid(),
    categoryName: "Frontend Development",
    description:
      "It has Front-end web development videos",
      views:7,
      duration: "3:45",
      yId:"bpSbzor0Jfw",

  },
  {
    _id: uuid(),
    categoryName: "Hollywood",
    description:
      "It has Hollywood movies",
      views:8,
      duration: "2:40",
      yId:"aWzlQ2N6qqg",
  },
  {
    _id: uuid(),
    categoryName: "Bollywood",
    description:
      "It has bollywood movies",
      views:9,
      duration: "1:15",
      yId:"HIbzXaBdwZw",
  },
];

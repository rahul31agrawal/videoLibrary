import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "comedy",
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
    categoryName: "hollywood",
    description:
      "It has Hollywood movies",
      views:8,
      duration: "2:40",
      yId:"aWzlQ2N6qqg",
  },
  {
    _id: uuid(),
    categoryName: "bollywood",
    description:
      "It has bollywood movies",
      views:9,
      duration: "1:15",
      yId:"HIbzXaBdwZw",
  },
];

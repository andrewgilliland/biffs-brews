import { FaPepperHot as icon } from "react-icons/fa";

export default {
  // Computer Name
  name: "topping",
  // Visibile Title
  title: "Toppings",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Topping",
      type: "string",
      description: "What is the name of the topping?",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      description: "Is the topping vegetarian?",
      options: {
        layout: "checkbox",
      },
    },
  ],
  preview: {
    select: {
      name: "name",
      vegetarian: "vegetarian",
    },
    prepare: ({ name, vegetarian }) => ({
      title: ` ${name} ${vegetarian ? "🍃" : ""}`,
    }),
  },
};

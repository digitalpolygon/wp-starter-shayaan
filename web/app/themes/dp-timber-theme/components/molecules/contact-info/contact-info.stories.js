import contact from "./contact-info.twig";
import "./contact-info.scss"
import "../../atoms/input/input.scss"

export default {
  title: "Molecules/Contact",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return contact({ ...args });
  },
};

export const contactInfo = {};

contactInfo.args = {
  contactMethods: [
    {
      "icon": "bi-envelope",
      "title": "Email",
      "url": "information@untitled.tld"
    },
    {
      "icon": "bi-phone-fill",
      "title": "Phone",
      "url": "(000) 000-0000 x12387"
    },
    {
      "icon": "bi-house",
      "title": "Address",
      "url": "1234 Somewhere Road #5432<br>Nashville, TN 00000<br>United States of America"
    }
  ]
}

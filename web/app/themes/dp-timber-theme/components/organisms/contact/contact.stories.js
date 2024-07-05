import contactSection from "./contact.twig";
import "./contact.scss"
import "../../molecules/form/form.scss"
import "../../molecules/contact-info/contact-info.scss"
import "../../atoms/get-started/button.scss"
import { contactInfo } from "../../molecules/contact-info/contact-info.stories"

export default {
    title: "organisms/Contact Us",
    render: ({ ...args }) => {
        return contactSection({ ...args })
    }
}

export const Contact = {
    args: {
        ...contactInfo.args
    }
}

import emailjs from "@emailjs/browser";

export async function sendEmail(id) {
  emailjs.init("O1dp8udGzbpZsDAa-");
  const { status } = await emailjs.sendForm(
    "service_5nqye6l",
    "template_3i9q86p",
    id
  );
  return status;
}

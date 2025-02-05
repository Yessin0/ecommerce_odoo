import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
}

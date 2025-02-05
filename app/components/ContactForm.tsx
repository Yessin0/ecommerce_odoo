'use client'
import { useState } from "react";

const contactReasons = [
  "Demande de devis",
  "Obtenir un catalogue",
  "Demande de renseignement",
  "Support technique",
  "Autre",
];

export default function ContactForm() {
  const [selectedReason, setSelectedReason] = useState(contactReasons[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    pays: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form data, including selectedReason
    console.log("Selected Reason:", selectedReason);
    console.log("Form Data:", formData);
    // Reset form or provide feedback to the user
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
          Contact Reason
        </label>
        <select
          id="reason"
          name="reason"
          value={selectedReason}
          onChange={(e) => setSelectedReason(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        >
          {contactReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>
      {(selectedReason === "Obtenir un catalogue" || selectedReason === "Demande de devis") && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pays</label>
            <input
              type="text"
              name="country"
              value={formData.pays}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Adresse</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          rows={4}
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
        >
          Send
        </button>
      </div>
    </form>
  );
}

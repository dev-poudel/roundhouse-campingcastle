import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import discounts from "../../../assets/timer.png";

// Custom formats for Quill editor
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
  "code-block",
];

const OfferEditor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offer, setOffer] = useState({
    title: "Limited Time Holiday Sale",
    subtitle: "Only Exclusive 25% Discounts on Stays",
    description: "Hurry up and grab the deal!",
    backgroundImage: discounts,
    endDate: "", // New state for the offer end date
  });

  // State for modal form inputs
  const [title, setTitle] = useState(offer.title);
  const [subtitle, setSubtitle] = useState(offer.subtitle);
  const [description, setDescription] = useState(offer.description);
  const [backgroundImage, setBackgroundImage] = useState(offer.backgroundImage);
  const [endDate, setEndDate] = useState(
    offer.endDate || new Date().toISOString().slice(0, 16)
  ); // Set default end date to current date

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedOffer = {
      title,
      subtitle,
      description,
      backgroundImage,
      endDate, // Include the end date in the offer
    };
    setOffer(updatedOffer);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Offer Section</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Current Offer</h2>
        <div className="mt-4">
          <h3 className="text-lg">{offer.title}</h3>
          <p className="text-sm">{offer.subtitle}</p>
          <div className="mt-2">{offer.description}</div>
          {offer.backgroundImage && (
            <img
              src={offer.backgroundImage}
              alt="Offer Background"
              className="mt-4 max-w-[300px] h-auto"
            />
          )}
          {offer.endDate && (
            <div className="mt-4">
              <strong>Offer Ends:</strong>{" "}
              {new Date(offer.endDate).toLocaleString()}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white py-2 px-4 rounded-md"
      >
        Edit Offer
      </button>

      {/* Modal for editing the offer */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Edit Offer</h2>
            <form onSubmit={handleSubmit}>
              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter title"
                />
              </div>

              {/* Subtitle */}
              <div className="mb-4">
                <label className="block text-sm font-medium">Subtitle</label>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter subtitle"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  rows="4"
                  placeholder="Enter description"
                />
              </div>

              {/* Background Image */}
              <div className="mb-4">
                <label className="block text-sm font-medium">
                  Background Image
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full p-2 border rounded-md"
                />
                {backgroundImage && (
                  <div className="mt-2">
                    <img
                      src={backgroundImage}
                      alt="Background Preview"
                      className="max-w-[300px] h-auto"
                    />
                  </div>
                )}
              </div>

              {/* End Date (Quill editor) */}
              <div className="mb-4">
                <label className="block text-sm font-medium">
                  Offer End Date
                </label>
                <input
                  type="datetime-local"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-black py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferEditor;

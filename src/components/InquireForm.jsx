import GoogleMap from "./GoogleMap";

export default function InquiryForm() {
  return (
    <div
      className="flex justify-center items-center bg-gray-100 md:pt-20 md:pb-20 pt-5 pb-5 px-5"
      id="contact"
    >
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h2 className="md:text-4xl text-3xl font-bold text-center font-playfair text-[#E1971B] flex items-center justify-center gap-2">
          Inquire Now
        </h2>
        <p className="text-center text-gray-600 mb-6">Send your messages</p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded bg-[#CECECE] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded bg-[#CECECE] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border rounded bg-[#CECECE] focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Messages"
            rows="4"
            className="w-full p-3 border rounded bg-[#CECECE] focus:outline-none"
          ></textarea>
          <div className="text-center">
            <button className="bg-[#E1971B] text-white px-6 py-2 rounded-full shadow-md transition">
              Send message
            </button>
          </div>
        </form>

        {/* Google Map - Centered */}
        <div className="mt-10 w-full max-w-4xl flex justify-center">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

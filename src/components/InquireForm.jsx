
export default function InquiryForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className=" p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center font-playfair text-[#E1971B] flex items-center justify-center gap-2">
          Inquire Now
        </h2>
        <p className="text-center text-gray-600 mb-6">Send your messages</p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded bg-gray-200  focus:outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded bg-gray-200 focus:outline-none" />
            <input type="tel" placeholder="Phone" className="w-full p-3 border rounded bg-gray-200 focus:outline-none" />
          </div>
          <textarea placeholder="Messages" rows="4" className="w-full p-3 border rounded bg-gray-200 focus:outline-none"></textarea>
          <div className="text-center">
            <button className="bg-[#E1971B] text-white px-6 py-2 rounded-full shadow-md  transition">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

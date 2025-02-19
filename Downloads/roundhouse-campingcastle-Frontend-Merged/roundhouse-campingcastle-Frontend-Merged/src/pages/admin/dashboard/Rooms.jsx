import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Setting from "../../../components/Setting";

const Rooms = () => {
  const [open, setOpen] = useState(false); // State to manage modal visibility
  const [bannerTitle, setBannerTitle] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [image, setImage] = useState("");
  const [rooms, setRooms] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: "2024/01/01 Monday",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Living Room",
      createdAt: "2024/02/15 Thursday",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Minimalist Workspace",
      createdAt: "2024/03/10 Sunday",
    },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setRooms([
      ...rooms,
      {
        title: bannerTitle,
        createdAt: createdAt,
        image: image,
      },
    ]);

    handleClose();
    setBannerTitle("");
    setCreatedAt("");
    setImage("");
  };

  return (
    <div>
      <div className="px-10 p-5 flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl">Rooms</h1>
          <p>Manage your rooms</p>
        </div>
        <button
          className="flex items-center gap-2 border-2 p-2 rounded-md"
          onClick={handleOpen}
        >
          <IoAddSharp className="text-xl" />
          <p>Add new rooms</p>
        </button>
      </div>

      {/* Modal for adding new room */}
      <Modal open={open} onClose={handleClose} center>
        <h2>Add New Room</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Banner Title:</label>
            <input
              type="text"
              value={bannerTitle}
              onChange={(e) => setBannerTitle(e.target.value)}
              placeholder="Enter banner title"
              className="border-2 p-2 w-full mb-2"
            />
          </div>
          <div>
            <label>Created At:</label>
            <input
              type="date"
              value={createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
              className="border-2 p-2 w-full mb-2"
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
              className="border-2 p-2 w-full mb-2"
            />
          </div>
          <button type="submit" className="mt-4 p-2 border-2 rounded-md">
            Add Room
          </button>
        </form>
      </Modal>

      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th className="text-2xl">Banner</th>
            <th className="text-2xl">Title</th>
            <th className="text-2xl">Created At</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md w-[125px] h-32"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Setting />
    </div>
  );
};

export default Rooms;

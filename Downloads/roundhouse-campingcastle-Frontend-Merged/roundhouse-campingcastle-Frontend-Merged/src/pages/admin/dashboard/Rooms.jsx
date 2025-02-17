import React from "react";
// import hotel1 from "../assets/hotel1.png";
import { IoMdDownload } from "react-icons/io";
import Setting from "../../../components/Setting";
const Rooms = () => {
  const rooms = [
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdAt: "2024/01/01 Monday",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Living Room",
      createdAt: "2024/02/15 Thursday",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Minimalist Workspace",
      createdAt: "2024/03/10 Sunday",
    },
  ];

  return (
    <div className="px-10 p-5">
      <div className="px-10 p-5 flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl"> Rooms</h1>
          <p>Manage your rooms</p>
        </div>
        <button className="flex items-center gap-2">
          <IoMdDownload className="text-xl" />
          <p>Download</p>
        </button>
      </div>
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
      <div>
        <Setting />
      </div>
    </div>
  );
};

export default Rooms;

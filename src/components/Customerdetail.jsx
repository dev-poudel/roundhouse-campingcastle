import React from "react";
import { IoMdDownload } from "react-icons/io";

const styles = {
  table: {
    width: "90%",
    borderCollapse: "collapse", // Ensures no space between borders
  },
  header: {
    padding: "10px",
    backgroundColor: "#B5E0FF",
    fontWeight: "bold",
    textAlign: "center",
    borderBottom: "3px solid black",
  },
  cell: {
    padding: "5px",
    textAlign: "center", // Ensures data text is aligned to the left (can adjust if needed)
    backgroundColor: "#EDF4FA",
    paddingTop: "10px",
  },
};

const Customers = () => {
  const customer = [
    {
      name: "Ameya",
      email: "ameya@gmail.com",
      phone: "+1 123-456-7890",
      date: "2024-02-10",
      source: "Website",
      status: "Active",
    },
    {
      name: "Ameya",
      email: "ameya@gmail.com",
      phone: "+1 987-654-3210",
      date: "2024-01-25",
      source: "Referral",
      status: "Inactive",
    },
    {
      name: "Ameya",
      email: "ameya@gmail.com",
      phone: "+44 20 7946 0958",
      date: "2024-03-05",
      source: "Social Media",
      status: "Pending",
    },
  ];

  return (
    <div>
      <div className="px-10 p-5 flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl">Customer Detail</h1>
          <p>Manage your customer detail</p>
        </div>
        <div className="flex items-center gap-2">
          <IoMdDownload className="text-xl" />
          <p>Download</p>
        </div>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Name</th>
            <th style={styles.header}>Email</th>
            <th style={styles.header}>Phone</th>
            <th style={styles.header}>Date</th>
            <th style={styles.header}>Source</th>
            <th style={styles.header}>Status</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((customerItem, index) => (
            <tr key={index}>
              <td style={styles.cell} className="font-semibold ">
                {customerItem.name}
              </td>
              <td style={styles.cell} className="font-semibold">
                {customerItem.email}
              </td>
              <td style={styles.cell} className="font-semibold">
                {customerItem.phone}
              </td>
              <td style={styles.cell} className="font-semibold">
                {customerItem.date}
              </td>
              <td style={styles.cell} className="font-semibold">
                {customerItem.source}
              </td>
              <td style={styles.cell} className="font-semibold">
                {customerItem.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;

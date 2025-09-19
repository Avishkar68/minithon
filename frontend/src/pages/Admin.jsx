import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/reservations");
        if (res.data.success) {
          setReservations(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching reservations:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);

  if (loading) {
    return <p className="text-center mt-20 text-gray-600 text-2xl min-h-screen flex justify-center items-center ">Loading reservations...</p>;
  }

  return (
    <div className="bg-white min-h-screen pt-24 px-6 md:px-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Admin Dashboard</h1>

      <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200">
        <table className="min-w-full bg-white rounded-2xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-4 text-left">#</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Room ID</th>
              <th className="px-6 py-4 text-left">Months</th>
              <th className="px-6 py-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {reservations.length > 0 ? (
              reservations.map((res, idx) => (
                <tr
                  key={res._id}
                  className={`border-t border-gray-200 hover:bg-amber-50 transition`}
                >
                  <td className="px-6 py-4 font-semibold">{idx + 1}</td>
                  <td className="px-6 py-4">{res.name}</td>
                  <td className="px-6 py-4">{res.email}</td>
                  <td className="px-6 py-4">{res.roomId}</td>
                  <td className="px-6 py-4">{res.months}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(res.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-6 text-center text-gray-500 italic"
                >
                  No reservations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;

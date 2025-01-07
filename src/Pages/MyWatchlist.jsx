import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";

const MyWatchlist = () => {
  const [watchlists, setwatchlists] = useState([]);
  const { users } = useContext(AuthContext);
  useEffect(() => {
    if (users?.email) {
      fetch(
        `https://cill-gamer-server.vercel.app/watchlist/${users?.displayName}`
      )
        .then((res) => res.json())
        .then((data) => setwatchlists(data));
    }
  }, [users]);
  return (
    <div className="dark:text-white">
      <div className="border-2 border-[#6CCDB7] bg-sky-50 rounded-xl p-10 shadow-sm my-7">
        <h1 className="text-2xl font-bold text-center text-[#6CCDB7]">
          My Watchlist
        </h1>
      </div>
      <section className="p-5 gap-6 border border-sky-400 rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="dark:text-white">
              <tr>
                <th></th>
                <th className="w-40"> Game Title</th>
                <th className="w-40">Publish </th>
                <th className="w-40">Rating</th>
              </tr>
            </thead>
            {watchlists.map((wish, idx) => (
              <tbody>
                {/* row 1 */}
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{wish.title}</td>
                  <td>{wish.publish}</td>
                  <td>{wish.rating}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyWatchlist;

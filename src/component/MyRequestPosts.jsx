import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import MyRequestPostTable from "./MyRequestPostTable";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyRequestPosts = () => {
  const { user } = useAuth();
  const [myRequestPosts, setMyRequestPosts] = useState([]);
  const { dark } = useAuth();

  const fetchMyRequestPostsData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-request-posts/${user?.email}`
    );
    setMyRequestPosts(data);
  };

  useEffect(() => {
    fetchMyRequestPostsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const handleCancel = (id) => {
    try {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, cancel it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await axios.delete(
              `${import.meta.env.VITE_API_URL}/my-request-data-cancel/${id}`
            );
            fetchMyRequestPostsData();
            Swal.fire({
              title: "Canceled!",
              text: "Your file has been canceled.",
              icon: "success",
            });
          }
        });
      } catch (err) {
        toast.error(err.message);
      }
  };
  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-auto">
    

      {myRequestPosts.length ? (
        <>
          <h1 className="text-3xl font-bold text-center my-16">
            <span className={`${dark && "text-white"}`}>My</span> <span className="text-amber-500">Request Posts</span><span className={`${dark && "text-white"}`}> : (
              {myRequestPosts.length})</span>
          </h1>
          <div>
            <div className="overflow-x-auto">
              <table className={`table ${dark && "text-white"}`}>
                {/* head */}
                <thead className={`${dark && "text-white"}`}>
                  <tr>
                    <th></th>
                    <th>Post title</th>
                    <th className="text-center">Category</th>
                    <th>Deadline</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {myRequestPosts.map((myRequestPost, idx) => (
                    <MyRequestPostTable
                      handleCancel={handleCancel}
                      myRequestPost={myRequestPost}
                      idx={idx}
                      key={myRequestPost._id}
                    ></MyRequestPostTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h3 className="text-3xl font-bold text-center text-red-800 my-20">
            You didn't post request anything!!!
          </h3>
        </div>
      )}
    </div>
  );
};

export default MyRequestPosts;

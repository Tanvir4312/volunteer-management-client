import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import MyPostsTable from "../component/MyPostsTable";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import MyRequestPosts from "../component/MyRequestPosts";
// import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageMyPosts = () => {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState([]);
  const { dark } = useAuth();
  // const axiosSecure = useAxiosSecure()

  useEffect(() => {
    document.title = "Manage My Post | Volunteer Connect";
  }, []);

  const fetchMyPostsData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-posts/${user?.email}`
    );
    setMyPosts(data);
  };

  useEffect(() => {
    fetchMyPostsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(
            `${import.meta.env.VITE_API_URL}/data-delete/${id}`
          );
          fetchMyPostsData();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
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
      {myPosts.length ? (
        <>
          <h1 className="text-3xl font-bold text-center py-9">
            <span className={`${dark && "text-white"}`}>My</span>{" "}
            <span className="text-amber-500">Posts</span>{" "}
            <span className={`${dark && "text-white"}`}>
              : ({myPosts.length})
            </span>
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
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {myPosts.map((myPost, idx) => (
                    <MyPostsTable
                      handleDelete={handleDelete}
                      myPost={myPost}
                      idx={idx}
                      key={myPost._id}
                    ></MyPostsTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h3 className="text-3xl font-bold text-center text-red-800 my-20">
            You didn't post anything!!!
          </h3>
        </div>
      )}

      <div>
        <MyRequestPosts></MyRequestPosts>
      </div>
    </div>
  );
};

export default ManageMyPosts;

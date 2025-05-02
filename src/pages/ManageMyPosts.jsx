import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import MyPostsTable from "../component/MyPostsTable";

const ManageMyPosts = () => {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState([]);


  useEffect(() => {
    const fetchMyPostsData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/my-posts/${user?.email}`
      );
      setMyPosts(data);
    };
    fetchMyPostsData();
  }, [user?.email]);

  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-auto">
      {myPosts.length ? (
        <>
          <h1 className="text-3xl font-bold text-center my-9">
            My <span className="text-amber-500">Posts</span>: ({myPosts.length})
          </h1>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
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
    </div>
  );
};

export default ManageMyPosts;

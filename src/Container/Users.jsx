import React, { useEffect } from "react";
import { Pagination, Usercard, Filter } from "../components";
import { useStateValue } from "../context/contexts/contextProvider";
import { users } from "../utilities/Data";
import { getAllUsers, getUser } from "../Api/Apicalls";
import { actionType } from "../context/contexts/reducer";
import { useStateContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";

const Users = () => {
  const [{ usersinfo, userinfo }, dispatch] = useStateValue();
  const {
    isDetails,
    setIsDetails,
    post,
    setPost,
    Loading,
    setLoading,
    currentPage,
    setCurrentPage,
    postPerPage,
    setPostPerPage,
    display,
    setDisplay,
    isFilter,
    setIsFilter,
  } = useStateContext();

  useEffect(() => {
    if (!usersinfo) {
      getAllUsers().then((data) => {
        console.log(data);
        localStorage.setItem("users", JSON.stringify(data));
        dispatch({
          type: actionType.SET_USERS,
          usersinfo: data,
        });
      });
    }
    if (!userinfo) {
      getUser(1).then((data) => {
        console.log("data", data);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({
          type: actionType.SET_USER,
          userinfo: data,
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPost(usersinfo);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const shows = (e) =>{
  //   setDisplay(e.target.value);
  //   setPostPerPage(setDisplay);
  // }

  useEffect(() => {
    setPostPerPage(100 || display);
  }, [display, setPostPerPage]);

  const Details = () => {
    setIsDetails(!isDetails);
  };

  console.log("post", display);
  //get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  const pagenate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col justify-center mt-16  m-2 md:m-10 p-2  md:p-10 bg-bguser rounded-2xl">
      <p className="text-base font-bold">Users</p>
      <div className="flex items-center justify-start gap-4 flex-wrap mt-4 ml-0">
        {users &&
          users.map((user) => (
            <div
              className="p-4 w-60  gap-3 h-auto rounded-lg shadow-md bg-white flex flex-col items-start justify-center"
              key={user.id}
            >
              <div
                style={{ background: `${user.bg}`, opacity: 0.8 }}
                className=" w-7 h-7 flex items-center justify-center rounded-full shadow-lg "
              >
                {user.icon}
              </div>
              <p className=" text-sm text-primary font-semibold">{user.name}</p>
              <p className="text-xl text-smtext font-bold">{user.number}</p>
            </div>
          ))}
      </div>

      <div className="relative w-[1020px] py-12 min-w-[400px] min-h-[400px] overflow-x-scroll my-4 flex flex-col items-center justify-start p-4 border border-gray-300 rounded-md gap-2 bg-white">
        {/*table heading*/}
        <div className="w-full  flex items-center justify-between ">
          <p className="text-sm font-semibold text-textColor w-275 min-w-[160px] flex items-center justify-center gap-2">
            ORGANIZATION{" "}
            <span
              onClick={() => {
                setIsFilter(!isFilter);
              }}
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                  fill="#545F7D"
                />
              </svg>
            </span>
          </p>
          <p className="text-sm font-semibold text-textColor w-275 min-w-[160px] flex items-center justify-center gap-2">
            USERNAME{" "}
            <span
              onClick={() => {
                setIsFilter(!isFilter);
              }}
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                  fill="#545F7D"
                />
              </svg>
            </span>
          </p>
          <p className="text-sm font-semibold text-textColor w-275 min-w-[160px] flex items-center justify-center gap-2">
            EMAIL{" "}
            <span
              onClick={() => {
                setIsFilter(!isFilter);
              }}
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                  fill="#545F7D"
                />
              </svg>
            </span>
          </p>
          <p className="text-sm font-semibold text-textColor w-275 min-w-[160px] flex items-center justify-center gap-2">
            PHONE NUMBER{" "}
            <span
              onClick={() => {
                setIsFilter(!isFilter);
              }}
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                  fill="#545F7D"
                />
              </svg>
            </span>
          </p>
          <p className="text-sm font-semibold text-textColor w-275 min-w-[160px] flex items-center justify-center gap-2">
            DATE JOINED{" "}
            <span
              onClick={() => {
                setIsFilter(!isFilter);
              }}
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                  fill="#545F7D"
                />
              </svg>
            </span>
          </p>
          <p className="text-sm font-semibold text-textColor w-275 min-w-[160px] flex items-center justify-center gap-2">
            STATUS{" "}
            <span
              onClick={() => {
                setIsFilter(!isFilter);
              }}
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                  fill="#545F7D"
                />
              </svg>
            </span>
          </p>
        </div>
        {/*filter*/}

        {/*table content*/}
        {currentPost &&
          currentPost.map((info) => (
            <Usercard info={info} keys={info.id} DetailsProp={Details} />
          ))}
        {isFilter && <Filter />}
      </div>

      <div className="flex items-center justify-between">
        <div className="  flex items-center justify-center gap-2">
          <label
            for="countries"
            class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Showing
          </label>
          <select
            onChange={(e) => {
              setDisplay(e.target.value);
            }}
            id="countries"
            class=" w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>100</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="60">60</option>
          </select>
          <p className=" text-xs">out of 100</p>
        </div>
        <Pagination totalPosts={usersinfo.length} pagenate={pagenate} />
      </div>
    </div>
  );
};

export default Users;

import axios from "axios";

export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise)
  };
};

const wrapPromise = (promise) => {
  // set initial status
  let status = "pending";
  // sotre result
  let result;
  // wait for promise
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};

const fetchUser = async () => {
  console.log("fetching user...");
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchPosts = async () => {
  console.log("fetching posts...");
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

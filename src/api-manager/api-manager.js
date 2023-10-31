import axios from "axios";

const loginApiUrl = "";
const signUpApiUrl = "";

export const loginApi = async (username, password) => {
  try {
    const res = await axios.post(
      `${loginApiUrl}`,
      { body: { username, password } },
      {
        headers: {},
      }
    );
    return res;
  } catch (err) {
    console.log("an error happened while login");
  }
  return undefined;
};

export const signupApi = async (username, password) => {
  try {
    const res = await axios.post(
      `${signUpApiUrl}`,
      { body: { username, password } },
      {
        headers: {},
      }
    );
    return res;
  } catch (err) {
    console.log("an error happened while sigining up");
  }
  return undefined;
};

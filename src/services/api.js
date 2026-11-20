
import axios from "axios";

const API_URL =
  "https://fedskillstest.coalitiontechnologies.workers.dev";

const username = "coalition";
const password = "skills-test";

const authToken = btoa(`${username}:${password}`);

export const getPatients = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Basic ${authToken}`,
    },
  });

  return response.data;
};

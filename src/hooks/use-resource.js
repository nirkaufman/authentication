import { useEffect, useState } from "react";
import {apiRequest} from "../services/api";

export function useResource({ path }) {
  const [resource, setResource] = useState([]);

  const getResponse = async () => {
    const apiResponse = await apiRequest({ path: "/" + path });
    setResource(apiResponse);
  };

  useEffect(() => {
    getResponse();
  }, []);

  return resource;
}

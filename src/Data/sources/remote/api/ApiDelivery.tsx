import axios from "axios";

import { HOST_LOCAL, HOST_EMULATOR} from "@env"

const ApiDelivery = axios.create({
  
  baseURL: "http://192.168.43.56:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { ApiDelivery }
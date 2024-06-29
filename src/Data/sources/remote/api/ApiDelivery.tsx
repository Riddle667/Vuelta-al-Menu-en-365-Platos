import axios from "axios";

import { HOST_LOCAL, HOST_EMULATOR} from "@env"
  console.log("HOST_LOCAL", HOST_LOCAL);
const ApiDelivery = axios.create({
  
  
  baseURL: HOST_LOCAL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { ApiDelivery }
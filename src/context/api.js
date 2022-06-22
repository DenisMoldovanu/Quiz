import React from "react";
import * as axios from "axios";

export const api = axios.create({
  baseURL: "ROOT",
});

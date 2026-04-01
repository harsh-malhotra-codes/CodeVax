import { setBaseUrl } from "@workspace/api-client-react";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

setBaseUrl(BASE_URL);

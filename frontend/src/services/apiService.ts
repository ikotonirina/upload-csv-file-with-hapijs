import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

console.log(import.meta.env.VITE_API_BASE_URL);

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([response.data]));
  const a = document.createElement("a");
  a.href = url;
  a.download = "output.zip";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

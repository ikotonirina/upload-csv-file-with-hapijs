import axios from "axios";
import { API_BASE_URL } from "../config/apiConfig";

const triggerFileDownload = (blob: Blob, fileName: string) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export const uploadFile = async (file: File): Promise<void> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      responseType: "blob",
    });

    triggerFileDownload(new Blob([response.data]), "output.zip");
  } catch (error: any) {
    console.error("Error uploading file:", error);
    throw new Error(error.response?.data?.message || "Upload failed");
  }
};

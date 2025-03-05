import { useState } from "react";
import { uploadFile } from "../services/apiService";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setError("");

    try {
      await uploadFile(file);
    } catch (err) {
      setError(`Upload failed: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <label htmlFor="file-upload">Upload CSV File</label>
      <input
        id="file-upload"
        type="file"
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "100%",
        }}
        accept=".csv"
        onChange={handleFileChange}
      />
      <button
        onClick={handleUpload}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width: "100%",
        }}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FileUpload;

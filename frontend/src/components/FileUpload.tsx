import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFileRequest } from "../store/actions/fileActions";
import Button from "./Button";
import Input from "./Input";
import "../styles/components/fileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.file);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      dispatch(uploadFileRequest(file));
    }
  };

  return (
    <div className="file-upload">
      <label htmlFor="file-upload">Upload CSV File</label>
      <Input
        type="file"
        id="file-upload"
        accept=".csv"
        onChange={handleFileChange}
      />
      <Button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </Button>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default FileUpload;

export const uploadFileRequest = (file: File) => ({
  type: "UPLOAD_FILE_REQUEST",
  payload: file,
});

export const uploadFileSuccess = (data: any) => ({
  type: "UPLOAD_FILE_SUCCESS",
  payload: data,
});

export const uploadFileFailure = (error: any) => ({
  type: "UPLOAD_FILE_FAILURE",
  payload: error,
});

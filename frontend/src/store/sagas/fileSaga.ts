import { call, put, takeLatest } from "redux-saga/effects";
import { uploadFileSuccess, uploadFileFailure } from "../actions/fileActions";
import { uploadFile } from "../../api/fileApi";

function* uploadFileSaga(action: { type: string; payload: File }): Generator {
  try {
    const response: Blob = yield call(uploadFile, action.payload);
    yield put(uploadFileSuccess(response));
  } catch (error) {
    yield put(uploadFileFailure(error));
  }
}

export function* watchUploadFile() {
  yield takeLatest("UPLOAD_FILE_REQUEST", uploadFileSaga);
}

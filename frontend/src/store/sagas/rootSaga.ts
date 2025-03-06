import { all } from "redux-saga/effects";
import { watchUploadFile } from "./fileSaga";

export default function* rootSaga() {
  yield all([watchUploadFile()]);
}

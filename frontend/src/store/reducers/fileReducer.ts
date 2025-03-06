const initialState = {
  loading: false,
  error: null,
};

export default function fileReducer(state = initialState, action: any) {
  switch (action.type) {
    case "UPLOAD_FILE_REQUEST":
      return { ...state, loading: true, error: null };
    case "UPLOAD_FILE_SUCCESS":
      return { ...state, loading: false };
    case "UPLOAD_FILE_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

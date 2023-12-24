import axios from "axios";
const api = {
  list: "http://localhost:1234/posts",
};

const PostService = {
  list: async () => {
    const resp = await axios.get(api.list); // Thêm từ khóa 'await' và chỉnh sửa 'param' thành 'params'
    return resp;
  },
};

export default PostService;

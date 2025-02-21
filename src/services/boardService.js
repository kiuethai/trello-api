/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
const createNew = async(reqBody) => {
  try {
    // Xử lý logic dữ liệu tùy đặc thù dự án
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    // Gọi tới tầng Model để xử lý lưu bản ghi newBoard vào trong Database
    // ..

    // Làm thêm các xử lý logic khác với các Collection khác tùy đặc thù dự án... vv
    // Bắn email, notification về cho admin khi 1 cái board mới được tạo...vv

    return newBoard
  } catch (error) { throw error }
}
export const boardService = {
  createNew
}
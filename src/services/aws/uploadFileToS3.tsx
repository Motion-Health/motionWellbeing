import axios from "axios"
import { API } from "../api"

export const uploadFileToS3 = async (bucketFolder: 'images' | 'documents', file: any, fileName: string) => {
  const fileType = encodeURIComponent(file?.type)

  const res = await API.get(`/upload?fileName=${fileName}&fileType=${fileType}&bucketFolder=${bucketFolder}`)
  const { url: s3bucketUrl, fields } = res.data

  const formData = new FormData()
  const fileObject = { ...fields, file }

  Object.entries(fileObject).forEach(([key, value]) => {
    formData.append(key, value as string)
  })

  await axios.post(s3bucketUrl, formData)
}
import { HttpClient, HttpRequest, HttpResponse } from '@/core/data'
import axios, { AxiosError, AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly baseUrl: string) {}
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.request({
        url: `${this.baseUrl}${data.url}`,
        data: data.body,
        method: data.method,
        headers: data.headers
      })
    } catch (error) {
      const _error = error as AxiosError
      axiosResponse = _error.response as AxiosResponse
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}

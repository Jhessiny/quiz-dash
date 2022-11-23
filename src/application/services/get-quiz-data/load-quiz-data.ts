import { ServiceCommand } from '~/domain/command/service-command'
import { RequestResponse } from '~/application/helpers/http/request-response'
import { HttpClient } from '~/application/protocols/http/http'
import { Response } from '~/domain/common/types'
import { error, success } from '~/domain/common/utils'
import { QuizModel } from '~/domain/models'

export class LoadQuizData implements ServiceCommand<LoadQuizData.Response, LoadQuizData.Params> {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadQuizData.Response>,
  ) {}

  async execute(params: LoadQuizData.Params): Promise<Response<LoadQuizData.Response>> {
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: `${this.url}/quiz/${params.quizId}`,
    })

    const data = RequestResponse.handle<LoadQuizData.Response>(httpResponse)

    if (data.isError()) {
      return error(data.value)
    }

    return success(data.value.response)
  }
}

export namespace LoadQuizData {
  export type Params = { quizId: string }
  export type Response = QuizModel
}

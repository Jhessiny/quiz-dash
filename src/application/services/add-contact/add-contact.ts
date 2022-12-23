import { ServiceCommand } from '~/domain/command/service-command'
import { RequestResponse } from '~/application/helpers/http/request-response'
import { HttpClient } from '~/application/protocols/http/http'
import { Response } from '~/domain/common/types'
import { error, success } from '~/domain/common/utils'
import { ContactModel, SavedAnswerModel } from '~/domain/models'

export class AddContact implements ServiceCommand<AddContact.Response, AddContact.Params> {
  constructor(
    private readonly getUrlWithParams: (params: Record<string, string>) => string,
    private readonly httpClient: HttpClient<AddContact.Response>,
  ) {}

  async execute({ quizId, ...payload }: AddContact.Params): Promise<Response<AddContact.Response>> {
    const httpResponse = await this.httpClient.request({
      method: 'post',
      url: this.getUrlWithParams({ id: quizId }),
      body: payload,
    })

    const data = RequestResponse.handle<AddContact.Response>(httpResponse)

    if (data.isError()) {
      return error(data.value)
    }

    return success(data.value.response)
  }
}

export namespace AddContact {
  export type Params = ContactModel & { quizId: string; answers: SavedAnswerModel[] }
  export type Response = null
}

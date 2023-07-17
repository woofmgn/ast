import { TuserForm } from '../pages/LoginPage/LoginPage';
import { BASE_URL } from '../utils/constants';

class Auth {
  private _url: string;

  constructor(baseUrl: string) {
    this._url = baseUrl
  }

  private async getResponseData(res: Response) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  public async loginUser(userData: TuserForm): Promise<any> {
    const res = await fetch(this._url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      })
    })

    return this.getResponseData(res);
  }
}

export const auth = new Auth(BASE_URL)

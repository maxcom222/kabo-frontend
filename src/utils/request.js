const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

const handleResponse = (response) => (
  response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  })
)

const authHeader = () => {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` }
  }
  return {}
}

const options = (method, body, authRequest = true, hasBody = false) => {
  let headers = { 'Content-Type': 'application/json' }
  let requestOptions = {
    method,
    headers,
  }

  if (hasBody) {
    requestOptions = { ...requestOptions, ...{ body: body } }
  }

  if (authRequest) {
    headers = { ...headers, ...authHeader() }
    requestOptions = { ...requestOptions, ...{ headers: headers } }
  }
  return requestOptions
}

export const request = {
  handleResponse,
  logout,
  options,
}

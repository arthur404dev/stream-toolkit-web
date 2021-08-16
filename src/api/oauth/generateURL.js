const authorizeDialogURL = () =>
  `${process.env.REACT_APP_RESTREAM_API_BASE_URL}/login?response_type=code&client_id=${process.env.REACT_APP_RESTREAM_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_RESTREAM_REDIRECT_URI}`

const tokenExchangeURL = () =>
  `${process.env.REACT_APP_RESTREAM_API_BASE_URL}/oauth/token`

export { authorizeDialogURL, tokenExchangeURL }

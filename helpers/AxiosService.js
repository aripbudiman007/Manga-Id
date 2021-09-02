const axios = require('axios').default

const axiosCookieJarSupport = require('axios-cookiejar-support').default
axiosCookieJarSupport(axios)

const AxiosService = async (url) => {
    return new Promise(async (resolve, reject) => {
        const _url = url == null ? url:encodeURI(url)

        try {
            const response = await axios.get(_url)

            if(response.status === 200) {
                return resolve(response)
            }

            return reject(response)

        } catch (error) {
            return reject(error.message)
        }
    })
}

module.exports = AxiosService
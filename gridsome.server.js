const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1-cDtc2sPFyDLwfXHKBEZ2CW_HMXrfcmNjWEEqdpajD0/values/Items?key=AIzaSyAnASTWQ-D8rWXx0gVxhq0tZgwc3rp-xYY')

    const contentType = store.addContentType({
      typeName: 'StoreItem',
      route: '/store/:content/:id'
    })

    for (const item of data.values.slice(1)) {
      // console.log(item)
      contentType.addNode({
        id: item[0],
        title: item[1],
        content: item[2], // type
        fields: {
          price: item[3],
          description: item[4],
          image: item[5]
        }
      })
    }
  })
}
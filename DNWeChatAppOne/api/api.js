const host = 'http://v3.wufazhuce.com:8000'
const wxRequest = (params, url) => {
  wx.showToast({
    title: '加载中',
    icon: 'loading'
  })
  wx.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json'
    },
    success: (res) => {
      params.success && params.success(res)
      wx.hideToast()
    },
    fail: (res) => {
      params.fail && params.fail(res)
    },
    complete: (res) => {
      params.complete && params.complete(res)
    }
  })
}

// Index
const getVolById = (params) => wxRequest(params, host + '/api/hp/detail/' + params.query.id)
const getVolIdList = (params) => wxRequest(params, host + '/api/hp/idlist/0')
const getVolsByMonth = (params) => wxRequest(params, host + '/api/hp/bymonth/' + params.query.month)
const getVolDetailById = (params) => wxRequest(params, host + '/api/hp/detail/' + params.query.id)
const getIndexChannelList = (params) => wxRequest(params, host + '/api/channel/one/' + params.query.channelData +'/%E5%B9%BF%E5%B7%9E%E5%B8%82?platform=ios&sign=330ec0ea8563657d15e14952a4bb26e1&user_id=&uuid=8EA25EEF-AA63-486B-86F6-3138396A5402&version=v4.5.3')
// http://v3.wufazhuce.com:8000/api/essay/htmlcontent/3193?platform=ios&sign=fbd7c4e142297faea7ff18e9dd9d4cb3&source=summary&source_id=15061&user_id=&uuid=8EA25EEF-AA63-486B-86F6-3138396A5402&version=v4.5.3

// http://v3.wufazhuce.com:8000/api/question/htmlcontent/2063?platform=ios&sign=10eb4edbcf28ce966fbc27a7b0c71d7a&source=summary&source_id=15062&user_id=&uuid=8EA25EEF-AA63-486B-86F6-3138396A5402&version=v4.5.3

 const getIndexChannelMusicItemDetail = (params) => wxRequest(params, host + '/api/' + params.query.type + '/htmlcontent/' + params.query.pageID + '?platform=ios&sign=10eb4edbcf28ce966fbc27a7b0c71d7a&source=summary&source_id=' + params.query.sourceID+'&user_id=&uuid=8EA25EEF-AA63-486B-86F6-3138396A5402&version=v4.5.3')

const getIndexChannelItemDetail = (params) => wxRequest(params, host + '/api/' + params.query.type+'/'+ params.query.id)

// Reading
const getCarousel = (params) => wxRequest(params, host + '/api/reading/carousel')
const getLastArticles = (params) => wxRequest(params, host + '/api/reading/index')
const getEssayById = (params) => wxRequest(params, host + '/api/essay/' + params.query.id)
const getSerialById = (params) => wxRequest(params, host + '/api/serialcontent/' + params.query.id)
const getQuestionById = (params) => wxRequest(params, host + '/api/question/' + params.query.id)
const getArticlesByMonth = (params) => {
  wxRequest(params, host + '/api/' + params.query.type + '/bymonth/' + params.query.month)
}

module.exports = {
  getVolById,
  getVolIdList,
  getVolsByMonth,
  getVolDetailById,
  getCarousel,
  getLastArticles,
  getEssayById,
  getSerialById,
  getQuestionById,
  getArticlesByMonth,
  getIndexChannelList,
  getIndexChannelItemDetail,
  getIndexChannelMusicItemDetail
}
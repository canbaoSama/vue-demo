export function GET(_this, url, params, callback){
  _this.$axios.get(url,params,{params})
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      //error(_this,'获取失败',true)
    })
}

export function POST (_this, url, trans, callback, msg) {
  let CancelToken = _this.$axios.CancelToken;
  _this.$axios.post(url, trans,{
    cancelToken:new CancelToken(function(e){_this.cancelPOST = e}),
    timeout:30000
  })
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error)
      callback(false)
    })
}

export async function asyncPOST(_this, url, params) {
  try{
    const {data} = await _this.$axios.post(url, params, {timeout:10000});
    return  data;
  }catch (e) {
    return {status:-1,msg:'请求超时'};
  }
};

export function PUT(_this, url,reqObj, callback){
  _this.$axios.put(url,reqObj).then(function(response){
    // console.log(response)
  })
}

export function DELETE (_this, url, callback) {
  _this.$axios.delete(url)
    .then(function (res) {
      if (res.data.status == '0') {
        callback(res.data)
      }
    })
}

export function DOWNLOADFILE(_this, path, fileName) {
  let url = path + fileName
  _this.$axios({
    method:'get',
    url:url,
    responseType:'blob',
  })
    .then((data) => {
      if (!data) {
        return
      }
      let url = window.URL.createObjectURL(data.data)
      let link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.setAttribute('download', fileName)
      document.body.appendChild(link)
      link.click()
    })
}

/**
 * Created by bluetop on 2017/10/15.
 */

import {
  QUERY_SAMPLE_PROP
} from './mutation-types'

import axios from 'axios'

// import {generateMenus} from 'src/utils/object_util'

export const getBaseData = ({commit, state}) => {
  axios.post('/api/basedata/getBaseData',{}).then(function(response) {
    commit('updateBaseData', response.data)  })
};
export const getUserByToken = ({state}, callback) => {
  axios.post('/api/user/info', {}).then((res) => {
    callback(res)
  })
};

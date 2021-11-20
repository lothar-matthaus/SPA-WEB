import md5Encode from './pages/md5/main.js'
import base64Encode from './pages/base64/main.js'
import home from './pages/home/main.js'

export default {
    home: home(),
    base64Encode: base64Encode(),
    md5Encode: md5Encode()
}
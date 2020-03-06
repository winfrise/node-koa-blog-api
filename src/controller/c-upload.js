const multer = require('@koa/multer');
const config = require('../config/default.js')

const { moment, mkdirFolder } = require('../tools')
const uploadPath = `${config.staticPath}/uploads`

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath)
  },
  filename: function (req, file, cb) {
    let today = moment().format('YYYY-MM-DD')

    mkdirFolder(`${uploadPath}/${today}`)

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

    const filename = file.originalname;
    let tempArr = filename.split('.')
    let fileType = tempArr[tempArr.length - 1]

    let fullName = `${file.fieldname}-${uniqueSuffix}.${fileType}`
    cb(null, `${today}/${fullName}`);
  }
})
const upload = multer({ storage})

exports.uploadSingleFile = upload.single('avatar')

exports.uploadSingleFileCallback = async (ctx) => {
    let { path, filename} = ctx.file
    console.log(ctx.file)

    let pathSplit = path.split('/')
    
    ctx.body = {
      code: 20000,
      message: '图片上传成功',
      data: {
        filename: pathSplit[pathSplit.length - 1],
        path: `${config.hostname}/uploads/${filename}`
      }
    }
}

exports.uploadMultipleFiles = async (ctx) => {
  // upload.fields([
  //   {
  //     name: 'avatar',
  //     maxCount: 1
  //   },
  //   {
  //     name: 'boop',
  //     maxCount: 2
  //   }
  // ]),
  // ctx => {
  //   console.log('ctx.request.files', ctx.request.files);
  //   console.log('ctx.files', ctx.files);
  //   console.log('ctx.request.body', ctx.request.body);
  //   ctx.body = 'done';
  // }
}
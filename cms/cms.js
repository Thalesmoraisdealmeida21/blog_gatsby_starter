import CMS from 'netlify-cms-app'


import MyTemplate from './src/templates/post.js'

CMS.init()

CMS.registerPreviewTemplate('my-template', MyTemplate)
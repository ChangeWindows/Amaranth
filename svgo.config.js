'use strict'

const { extendDefaultPlugins } = require('svgo')

module.exports = {
  multipass: true,
  js2svg: {
    pretty: true,
    indent: 2
  },
  plugins: extendDefaultPlugins([
    {
      name: 'cleanupListOfValues'
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'clip-rule',
          'data-name',
          'fill',
          'height',
          'width'
        ]
      }
    },
    {
      name: 'removeUnknownsAndDefaults',
      params: {
        keepRoleAttr: true
      }
    },
    {
      name: 'removeViewBox',
      active: false
    },
    {
      name: 'sortAttrs'
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{
          fill: 'currentColor'
        }]
      }
    }
  ])
}
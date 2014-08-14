define(function (require, exports, module) {

'use strict';
var Widget = require('widget');

    require('http://ue2.17173cdn.com/cache/lib/v2/ue/opinion/article-tags.min.js');

var Viewpoint = Widget.extend({

  defaults: {
    articleTitle : '',
    articleUrl : ''
  },

  setup: function () {
      var localUrl = window.location.protocol + '//' + window.location.hostname + (!!window.location.port ? ':' + window.location.port : '') + window.location.pathname;
      var url = this.option('articleUrl') || localUrl,
          title = this.option('articleTitle');
      new window.ArticleTagsLoader({
          ct: '.article-tags-content',
          channel: window.article.infoChannel,
          newsId: window.article.infoWholeId,
          newsTitle: title,
          newsUrl: url
      });
  }

});

module.exports = Viewpoint;

});

!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=(n.n(o),n(3)),r=(n.n(i),n(4)),a=(n.n(r),n(5)),c=n.n(a),s=n(6),u=(n.n(s),function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}());new(function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.previousTemplate=null,this.template=null,this.initialLoad=!0,Object(o.subscribe)(function(){e.initialLoad=!1,e.subscribe()}),this.subscribe()}return u(t,[{key:"subscribe",value:function(){var t=Object(o.select)("core/editor").getEditedPostAttribute("template");t!==this.template&&(this.previousTemplate=this.template,this.template=t,t?this.changeTemplate():null!==this.previousTemplate&&Object(o.dispatch)("core/editor").updateEditorSettings({templateLock:!1}))}},{key:"changeTemplate",value:function(){var t=this,e=Object(o.dispatch)("core/editor"),n=e.resetBlocks,i=(e.editPost,e.updateEditorSettings),a=Object(o.select)("core/editor").getBlocks();c()({path:"/gutenberg-templates/v1/template",data:{template:this.template}}).then(function(e){var o=e.template,c=e.template_lock,u=function(){n(Object(s.synchronizeBlocksWithTemplate)(a,o)),i({templateLock:c})};!a.length||Object(s.doBlocksMatchTemplate)(a,o)?u():t.wasDefaultTemplate()&&window.confirm(Object(r.__)("The content of your post doesn't match the assigned template. Resetting the template may result in loss of content, do you want to continue?","wp-gutenberg-templates"))&&u()})}},{key:"wasDefaultTemplate",value:function(){return""===this.previousTemplate&&!this.initialLoad}}]),t}())},function(t,e){t.exports=wp.data},function(t,e){t.exports=wp.components},function(t,e){t.exports=wp.i18n},function(t,e){t.exports=wp.apiRequest},function(t,e){t.exports=wp.blocks}]);
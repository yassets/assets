/*
 * @Author: your name
 * @Date: 2021-07-16 21:56:09
 * @LastEditTime: 2021-07-16 22:01:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \LP1\股東合夥創業沒商量？合夥人創業，合夥人開個股東，你來嗎？【貨到付款，全國包郵】_files\cjs.js
 */
~(function(){
    if( window.Cjs ){ console.error('命名空间冲突, window.Cjs'); return false; }
    var Cjs = {}
    window.Cjs = Cjs;
})();

// url extend

Cjs.url = function(){
    var that = this;
    this.getParamByName = function(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
    this.getParams = function(names){
        if( !names.isArray() ){ return null; }
        var value = {};
        names.map(function(key, idx){
            value[key] = that.getParamByName(names[idx]);
        });
        return value;
    }
    return this;
}();
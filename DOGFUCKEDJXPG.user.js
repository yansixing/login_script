// ==UserScript==
// @name         DOGFUCKEDJXPG
// @namespace    yansixing.com
// @version      1.0
// @description  try to take over the world!
// @author       You
// @require      http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js
// @match        */jxpgXsAction.do
// @grant        none
// ==/UserScript==

(function() {
    $(document).ready(function() {
        $("input[value$='20_1']").attr("checked", true);
        $("textarea[name$='zgpj']").text("老师上课仪表整洁，精神饱满，采取有效措施加强课堂管理，课堂秩序良好。");
    });
})();

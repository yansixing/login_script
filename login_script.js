// ==UserScript==
// @name         login_script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       SiXing
// @match        http://portal.sd.cninfo.net/*
// @match        http://10.5.2.26/
// @grant        none
// ==/UserScript==


(function() {
    var url = location.href;
    var pattern = new RegExp("portal");
    biubiubiu = pattern.test(url);
    if(biubiubiu){
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        var login_btn = document.getElementById("loginNet");
        username.value = "1234567890";                        //这儿改成联通网手机号
        password.value = "123456";                             //密码
        login_btn.click();
    }
    else{
        var username2 = document.getElementsByClassName("input-border")[0];
        var password2 = document.getElementsByClassName("input-border")[1];
        var login_btn2 = document.getElementsByClassName("login-b")[0];
        username2.value = "201406001";                          //学号
        password2.value = "123456";                             //密码
        login_btn2.click();
    }
})();

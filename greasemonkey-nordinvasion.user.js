// ==UserScript==
// @name       NordInvasion AH price per item
// @namespace  http://github.com/smat
// @version    0.1
// @description  Shows the price per item on the NordInvasion AH
// @match      http://*.nordinvasion.com/*
// @match      https://*.nordinvasion.com/*
// @grant      none
// @copyright  2012+, Stian Mathissen
// ==/UserScript==

$(document).ready(function() {

    $('.ah-item-row').each(function(index, el) {
        jel = $(el);
        quantityRegexMatch = jel.text().match(/^\s*(\d+) x/);
        amountRegexMatch = jel.find('span:eq(2)').text().match(/^\s*(\d+)/);
        
        quantity = quantityRegexMatch[1];
        amount = amountRegexMatch[1];
    
        pricePer = amount / quantity;
    
        jel.append($('<span>').css('display', 'block').css('float', 'right').css('width', '100px').text(pricePer.toFixed(1) + " per"));
    });

});
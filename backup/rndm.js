function rndm(r,n,t){var e=function(r){return void 0===r},o=function(r){return"number"==typeof r&&!isNaN(r)},u=function(r){return!e(r)&&null!==r&&r.constructor===Array},f=function(){try{for(var r,n,t=[];30>(n="."+t.join("")).length;){r=(window.crypto||window.msCrypto).getRandomValues(new Uint32Array(5));for(var e=0;e<r.length;e++){var o=4e9>r[e]?r[e].toString().slice(1):"";0<o.length&&(t[t.length]=o)}}return Number(n)}catch(r){return Math.random()}};try{if(null!==r&&null!==n&&null!==t){if(e(r))return f();if(window.jQuery&&r instanceof jQuery&&e(n)){if(0==r.length)return!1;var i=rndm(0,r.length-1);return{index:i,value:r.eq(i)}}if(o(r)&&o(n)&&"string"==typeof t&&"float"==t.toLowerCase().trim()){if(r>n){var l=n;n=r,r=l}return f()*(n-r)+r}if(u(r)&&0<r.length&&e(n)){var a=f()*r.length<<0;return{index:a,value:r[a]}}if("object"==typeof r&&e(n)){a=r;var h=Object.keys(a);if(0<h.length){var c=h[h.length*f()<<0];return{key:c,value:a[c]}}}if((!0===r&&!1===n||!1===r&&!0===n)&&e(t))return.5>rndm();if(o(r)&&e(n))return 0<=r?rndm(0,r):rndm(r,0);if(o(r)&&"string"==typeof n&&"float"==n.toLowerCase().trim()&&e(t))return 0<=r?rndm(0,r,"float"):rndm(r,0,"float");if(o(r)&&o(n)&&e(t))return r>n&&(l=n,n=r,r=l),r=Math.floor(r),n=Math.floor(n),Math.floor(f()*(n-r+1)+r);if("string"==typeof r&&0<r.length&&e(n))return r.charAt(rndm(0,r.length-1))}return!1}catch(r){return!1}}function rndms(r,n){var t=function(r){return void 0===r},e=function(r){return"number"==typeof r&&!isNaN(r)},o=function(r){return!t(r)&&null!==r&&r.constructor===Array};try{if(t(r)||null===r||null===n)return!1;var u=[];if(window.jQuery&&r instanceof jQuery&&t(n)){if(0<r.length){u=rndms(0,r.length-1);for(var f=0;f<u.length;f++)u[f]={index:u[f],value:r.eq(u[f])}}return u}if(t(n))if(o(r)&&t(n))for(f=0;f<r.length;f++)u[u.length]={index:f,value:r[f]};else if("object"==typeof r&&t(n))for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(u[u.length]={key:i,value:r[i]});else{if("string"!=typeof r||!t(n))return!(!e(r)||!t(n))&&(0<=r?rndms(0,r):rndms(r,0));for(f=0;f<r.length;f++)u[u.length]=r.charAt(f)}else{if(!e(r)||!e(n)||0<r%1||0<n%1)return!1;if(r>n){var l=n;n=r,r=l}for(f=r;f<=n;f++)u[u.length]=f}for(f=u.length-1;0<f;f--){var a=rndm(f);l=u[f],u[f]=u[a],u[a]=l}return u}catch(r){return!1}}
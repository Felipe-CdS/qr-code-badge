(()=>{var r={810:(r,t,e)=>{"use strict";e.d(t,{Z:()=>i});var n=e(645),o=e.n(n)()((function(r){return r[1]}));o.push([r.id,"* {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    position: relative;\r\n    min-height: 100vh;\r\n    background: rgb(73,159,104);\r\n    background: linear-gradient(180deg, rgba(73,159,104,1) 0%, rgba(21,122,110,1) 100%); \r\n}\r\n\r\n:root {\r\n    font-size: 62.5%;\r\n    --pine-green: #157a6eff;\r\n    --shamrock-green: #499f68ff;\r\n    --dark-sea-green: #77b28cff;\r\n    --ash-gray: #c2c5bbff;\r\n    --brown-sugar: #b4654aff;\r\n\r\n    --mystic-maroon: #b53171ff;\r\n    --medium-sea-green: #32b877ff;\r\n    --sheen-green: #84de31ff;\r\n    --french-lime: #9df24eff;\r\n    --medium-sea-green-2: #3dba7eff;\r\n}\r\n\r\n\r\nbody, input, button, textarea {\r\n    font: 400 1.8rem/1 'Roboto', sans-serif;\r\n}\r\n\r\n#root{\r\n    width: 100%;\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    padding: 2rem;\r\n    margin:auto;\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    height: auto; \r\n    width: 30rem;\r\n\r\n    padding: 0 1rem;\r\n\r\n    background-color: var(--medium-sea-green-2);\r\n    border: 2px solid black;\r\n    border-radius: 2rem;\r\n}\r\n\r\n#container h1{\r\n    text-align: center;\r\n    margin: 20px 0;\r\n}\r\n\r\n#full-name {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n\r\n#full-name div:last-child{\r\n    margin-left: 30px;\r\n}\r\n\r\n#full-name div label{\r\n    font-size: 85%;\r\n    margin-bottom: 3px;\r\n    \r\n}\r\n\r\n#container div p {\r\n    font-size: 120%;\r\n    width: 25rem;\r\n    height: 2.5rem;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#container div #email {\r\n    font-size: 100%;\r\n    width: 25rem;\r\n    height: 2.5rem;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n\r\n#full-name div p{\r\n    font-size: 120%;\r\n    width: 12rem;\r\n    overflow: hidden;\r\n}\r\n\r\n#container div {\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#container div label {\r\n    font-size: 85%;\r\n}\r\n\r\n#container div a {\r\n    text-decoration: none;\r\n}\r\n\r\n#container label {\r\n    text-align: center;\r\n    width: 30rem;\r\n    font-size: 90%;\r\n}\r\n\r\n#container a button {\r\n    height: 3rem;\r\n    width: 10rem;\r\n\r\n    margin-bottom: 15px;\r\n    \r\n    font-size: 85%;\r\n\r\n    background-color: var(--medium-sea-green-2);\r\n    border: 2px solid black;\r\n    border-radius: 2rem;\r\n\r\n    transition: 150ms;\r\n}\r\n\r\n#container a button:hover {\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\nfooter {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    bottom: 0;\r\n    height: 4rem;\r\n    width: 100%;\r\n    background-color: #17252A;\r\n}\r\n\r\nfooter p {\r\n    margin-top: 1rem;\r\n    color: #FEFFFF;\r\n}\r\n\r\nfooter a {\r\n    color: #FEFFFF;\r\n}",""]);const i=o},645:r=>{"use strict";r.exports=function(r){var t=[];return t.toString=function(){return this.map((function(t){var e=r(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(r,e,n){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<r.length;u++){var f=[].concat(r[u]);n&&o[f[0]]||(e&&(f[2]?f[2]="".concat(e," and ").concat(f[2]):f[2]=e),t.push(f))}},t}},192:(r,t)=>{var e,n,o=function(){var r=function(r,t){var e=r,n=a[t],o=null,i=0,f=null,p=[],m={},y=function(r,t){o=function(r){for(var t=new Array(r),e=0;e<r;e+=1){t[e]=new Array(r);for(var n=0;n<r;n+=1)t[e][n]=null}return t}(i=4*e+17),b(0,0),b(i-7,0),b(0,i-7),B(),x(),C(r,t),e>=7&&k(r),null==f&&(f=M(e,n,p)),A(f,t)},b=function(r,t){for(var e=-1;e<=7;e+=1)if(!(r+e<=-1||i<=r+e))for(var n=-1;n<=7;n+=1)t+n<=-1||i<=t+n||(o[r+e][t+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},x=function(){for(var r=8;r<i-8;r+=1)null==o[r][6]&&(o[r][6]=r%2==0);for(var t=8;t<i-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},B=function(){for(var r=u.getPatternPosition(e),t=0;t<r.length;t+=1)for(var n=0;n<r.length;n+=1){var i=r[t],a=r[n];if(null==o[i][a])for(var f=-2;f<=2;f+=1)for(var c=-2;c<=2;c+=1)o[i+f][a+c]=-2==f||2==f||-2==c||2==c||0==f&&0==c}},k=function(r){for(var t=u.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!r&&1==(t>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1)a=!r&&1==(t>>n&1),o[n%3+i-8-3][Math.floor(n/3)]=a},C=function(r,t){for(var e=n<<3|t,a=u.getBCHTypeInfo(e),f=0;f<15;f+=1){var c=!r&&1==(a>>f&1);f<6?o[f][8]=c:f<8?o[f+1][8]=c:o[i-15+f][8]=c}for(f=0;f<15;f+=1)c=!r&&1==(a>>f&1),f<8?o[8][i-f-1]=c:f<9?o[8][15-f-1+1]=c:o[8][15-f-1]=c;o[i-8][8]=!r},A=function(r,t){for(var e=-1,n=i-1,a=7,f=0,c=u.getMaskFunction(t),l=i-1;l>0;l-=2)for(6==l&&(l-=1);;){for(var s=0;s<2;s+=1)if(null==o[n][l-s]){var g=!1;f<r.length&&(g=1==(r[f]>>>a&1)),c(n,l-s)&&(g=!g),o[n][l-s]=g,-1==(a-=1)&&(f+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},M=function(r,t,e){for(var n=l.getRSBlocks(r,t),o=s(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),u.getLengthInBits(a.getMode(),r)),a.write(o)}var f=0;for(i=0;i<n.length;i+=1)f+=n[i].dataCount;if(o.getLengthInBits()>8*f)throw"code length overflow. ("+o.getLengthInBits()+">"+8*f+")";for(o.getLengthInBits()+4<=8*f&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*f||(o.put(236,8),o.getLengthInBits()>=8*f));)o.put(17,8);return function(r,t){for(var e=0,n=0,o=0,i=new Array(t.length),a=new Array(t.length),f=0;f<t.length;f+=1){var l=t[f].dataCount,s=t[f].totalCount-l;n=Math.max(n,l),o=Math.max(o,s),i[f]=new Array(l);for(var g=0;g<i[f].length;g+=1)i[f][g]=255&r.getBuffer()[g+e];e+=l;var h=u.getErrorCorrectPolynomial(s),d=c(i[f],h.getLength()-1).mod(h);for(a[f]=new Array(h.getLength()-1),g=0;g<a[f].length;g+=1){var v=g+d.getLength()-a[f].length;a[f][g]=v>=0?d.getAt(v):0}}var p=0;for(g=0;g<t.length;g+=1)p+=t[g].totalCount;var m=new Array(p),w=0;for(g=0;g<n;g+=1)for(f=0;f<t.length;f+=1)g<i[f].length&&(m[w]=i[f][g],w+=1);for(g=0;g<o;g+=1)for(f=0;f<t.length;f+=1)g<a[f].length&&(m[w]=a[f][g],w+=1);return m}(o,n)};m.addData=function(r,t){var e=null;switch(t=t||"Byte"){case"Numeric":e=g(r);break;case"Alphanumeric":e=h(r);break;case"Byte":e=d(r);break;case"Kanji":e=v(r);break;default:throw"mode:"+t}p.push(e),f=null},m.isDark=function(r,t){if(r<0||i<=r||t<0||i<=t)throw r+","+t;return o[r][t]},m.getModuleCount=function(){return i},m.make=function(){if(e<1){for(var r=1;r<40;r++){for(var t=l.getRSBlocks(r,n),o=s(),i=0;i<p.length;i++){var a=p[i];o.put(a.getMode(),4),o.put(a.getLength(),u.getLengthInBits(a.getMode(),r)),a.write(o)}var f=0;for(i=0;i<t.length;i++)f+=t[i].dataCount;if(o.getLengthInBits()<=8*f)break}e=r}y(!1,function(){for(var r=0,t=0,e=0;e<8;e+=1){y(!0,e);var n=u.getLostPoint(m);(0==e||r>n)&&(r=n,t=e)}return t}())},m.createTableTag=function(r,t){r=r||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(t=void 0===t?4*r:t)+"px;",e+='">',e+="<tbody>";for(var n=0;n<m.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<m.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=m.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return(e+="</tbody>")+"</table>"},m.createSvgTag=function(r,t,e,n){var o={};"object"==typeof arguments[0]&&(r=(o=arguments[0]).cellSize,t=o.margin,e=o.alt,n=o.title),r=r||2,t=void 0===t?4*r:t,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,f,c=m.getModuleCount()*r+2*t,l="";for(f="l"+r+",0 0,"+r+" -"+r+",0 0,-"+r+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+c+'px" height="'+c+'px"',l+=' viewBox="0 0 '+c+" "+c+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+L([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+L(n.id)+'">'+L(n.text)+"</title>":"",l+=e.text?'<description id="'+L(e.id)+'">'+L(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<m.getModuleCount();a+=1)for(u=a*r+t,i=0;i<m.getModuleCount();i+=1)m.isDark(a,i)&&(l+="M"+(i*r+t)+","+u+f);return(l+='" stroke="transparent" fill="black"/>')+"</svg>"},m.createDataURL=function(r,t){r=r||2,t=void 0===t?4*r:t;var e=m.getModuleCount()*r+2*t,n=t,o=e-t;return w(e,e,(function(t,e){if(n<=t&&t<o&&n<=e&&e<o){var i=Math.floor((t-n)/r),a=Math.floor((e-n)/r);return m.isDark(a,i)?0:1}return 1}))},m.createImgTag=function(r,t,e){r=r||2,t=void 0===t?4*r:t;var n=m.getModuleCount()*r+2*t,o="";return o+="<img",o+=' src="',o+=m.createDataURL(r,t),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=L(e),o+='"'),o+"/>"};var L=function(r){for(var t="",e=0;e<r.length;e+=1){var n=r.charAt(e);switch(n){case"<":t+="&lt;";break;case">":t+="&gt;";break;case"&":t+="&amp;";break;case'"':t+="&quot;";break;default:t+=n}}return t};return m.createASCII=function(r,t){if((r=r||1)<2)return function(r){r=void 0===r?2:r;var t,e,n,o,i,a=1*m.getModuleCount()+2*r,u=r,f=a-r,c={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},s="";for(t=0;t<a;t+=2){for(n=Math.floor((t-u)/1),o=Math.floor((t+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<f&&u<=t&&t<f&&m.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<f&&u<=t+1&&t+1<f&&m.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",s+=r<1&&t+1>=f?l[i]:c[i];s+="\n"}return a%2&&r>0?s.substring(0,s.length-a-1)+Array(a+1).join("▀"):s.substring(0,s.length-1)}(t);r-=1,t=void 0===t?2*r:t;var e,n,o,i,a=m.getModuleCount()*r+2*t,u=t,f=a-t,c=Array(r+1).join("██"),l=Array(r+1).join("  "),s="",g="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/r),g="",n=0;n<a;n+=1)i=1,u<=n&&n<f&&u<=e&&e<f&&m.isDark(o,Math.floor((n-u)/r))&&(i=0),g+=i?c:l;for(o=0;o<r;o+=1)s+=g+"\n"}return s.substring(0,s.length-1)},m.renderTo2dContext=function(r,t){t=t||2;for(var e=m.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)r.fillStyle=m.isDark(n,o)?"black":"white",r.fillRect(n*t,o*t,t,t)},m};r.stringToBytes=(r.stringToBytesFuncs={default:function(r){for(var t=[],e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t}}).default,r.createStringToBytes=function(r,t){var e=function(){for(var e=m(r),n=function(){var r=e.read();if(-1==r)throw"eof";return r},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=t)throw o+" != "+t;return i}(),n="?".charCodeAt(0);return function(r){for(var t=[],o=0;o<r.length;o+=1){var i=r.charCodeAt(o);if(i<128)t.push(i);else{var a=e[r.charAt(o)];"number"==typeof a?(255&a)==a?t.push(a):(t.push(a>>>8),t.push(255&a)):t.push(n)}}return t}};var t,e,n,o,i,a={L:1,M:0,Q:3,H:2},u=(t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t},(o={}).getBCHTypeInfo=function(r){for(var t=r<<10;i(t)-i(e)>=0;)t^=e<<i(t)-i(e);return 21522^(r<<10|t)},o.getBCHTypeNumber=function(r){for(var t=r<<12;i(t)-i(n)>=0;)t^=n<<i(t)-i(n);return r<<12|t},o.getPatternPosition=function(r){return t[r-1]},o.getMaskFunction=function(r){switch(r){case 0:return function(r,t){return(r+t)%2==0};case 1:return function(r,t){return r%2==0};case 2:return function(r,t){return t%3==0};case 3:return function(r,t){return(r+t)%3==0};case 4:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case 5:return function(r,t){return r*t%2+r*t%3==0};case 6:return function(r,t){return(r*t%2+r*t%3)%2==0};case 7:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw"bad maskPattern:"+r}},o.getErrorCorrectPolynomial=function(r){for(var t=c([1],0),e=0;e<r;e+=1)t=t.multiply(c([1,f.gexp(e)],0));return t},o.getLengthInBits=function(r,t){if(1<=t&&t<10)switch(r){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+r}else if(t<27)switch(r){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+r}else{if(!(t<41))throw"type:"+t;switch(r){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+r}}},o.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;n<t;n+=1)for(var o=0;o<t;o+=1){for(var i=0,a=r.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||t<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||t<=o+f||0==u&&0==f||a==r.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<t-1;n+=1)for(o=0;o<t-1;o+=1){var c=0;r.isDark(n,o)&&(c+=1),r.isDark(n+1,o)&&(c+=1),r.isDark(n,o+1)&&(c+=1),r.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<t;n+=1)for(o=0;o<t-6;o+=1)r.isDark(n,o)&&!r.isDark(n,o+1)&&r.isDark(n,o+2)&&r.isDark(n,o+3)&&r.isDark(n,o+4)&&!r.isDark(n,o+5)&&r.isDark(n,o+6)&&(e+=40);for(o=0;o<t;o+=1)for(n=0;n<t-6;n+=1)r.isDark(n,o)&&!r.isDark(n+1,o)&&r.isDark(n+2,o)&&r.isDark(n+3,o)&&r.isDark(n+4,o)&&!r.isDark(n+5,o)&&r.isDark(n+6,o)&&(e+=40);var l=0;for(o=0;o<t;o+=1)for(n=0;n<t;n+=1)r.isDark(n,o)&&(l+=1);return e+Math.abs(100*l/t/t-50)/5*10},o),f=function(){for(var r=new Array(256),t=new Array(256),e=0;e<8;e+=1)r[e]=1<<e;for(e=8;e<256;e+=1)r[e]=r[e-4]^r[e-5]^r[e-6]^r[e-8];for(e=0;e<255;e+=1)t[r[e]]=e;return{glog:function(r){if(r<1)throw"glog("+r+")";return t[r]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r[t]}}}();function c(r,t){if(void 0===r.length)throw r.length+"/"+t;var e=function(){for(var e=0;e<r.length&&0==r[e];)e+=1;for(var n=new Array(r.length-e+t),o=0;o<r.length-e;o+=1)n[o]=r[o+e];return n}(),n={getAt:function(r){return e[r]},getLength:function(){return e.length},multiply:function(r){for(var t=new Array(n.getLength()+r.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<r.getLength();o+=1)t[e+o]^=f.gexp(f.glog(n.getAt(e))+f.glog(r.getAt(o)));return c(t,0)},mod:function(r){if(n.getLength()-r.getLength()<0)return n;for(var t=f.glog(n.getAt(0))-f.glog(r.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<r.getLength();o+=1)e[o]^=f.gexp(f.glog(r.getAt(o))+t);return c(e,0).mod(r)}};return n}var l=function(){var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(r,t){var e={};return e.totalCount=r,e.dataCount=t,e},e={getRSBlocks:function(e,n){var o=function(t,e){switch(e){case a.L:return r[4*(t-1)+0];case a.M:return r[4*(t-1)+1];case a.Q:return r[4*(t-1)+2];case a.H:return r[4*(t-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,u=[],f=0;f<i;f+=1)for(var c=o[3*f+0],l=o[3*f+1],s=o[3*f+2],g=0;g<c;g+=1)u.push(t(l,s));return u}};return e}(),s=function(){var r=[],t=0,e={getBuffer:function(){return r},getAt:function(t){var e=Math.floor(t/8);return 1==(r[e]>>>7-t%8&1)},put:function(r,t){for(var n=0;n<t;n+=1)e.putBit(1==(r>>>t-n-1&1))},getLengthInBits:function(){return t},putBit:function(e){var n=Math.floor(t/8);r.length<=n&&r.push(0),e&&(r[n]|=128>>>t%8),t+=1}};return e},g=function(r){var t=r,e={getMode:function(){return 1},getLength:function(r){return t.length},write:function(r){for(var e=t,o=0;o+2<e.length;)r.put(n(e.substring(o,o+3)),10),o+=3;o<e.length&&(e.length-o==1?r.put(n(e.substring(o,o+1)),4):e.length-o==2&&r.put(n(e.substring(o,o+2)),7))}},n=function(r){for(var t=0,e=0;e<r.length;e+=1)t=10*t+o(r.charAt(e));return t},o=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+r};return e},h=function(r){var t=r,e={getMode:function(){return 2},getLength:function(r){return t.length},write:function(r){for(var e=t,o=0;o+1<e.length;)r.put(45*n(e.charAt(o))+n(e.charAt(o+1)),11),o+=2;o<e.length&&r.put(n(e.charAt(o)),6)}},n=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);if("A"<=r&&r<="Z")return r.charCodeAt(0)-"A".charCodeAt(0)+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return e},d=function(t){var e=r.stringToBytes(t);return{getMode:function(){return 4},getLength:function(r){return e.length},write:function(r){for(var t=0;t<e.length;t+=1)r.put(e[t],8)}}},v=function(t){var e=r.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(r,t){var n=e("友");if(2!=n.length||38726!=(n[0]<<8|n[1]))throw"sjis not supported."}();var n=e(t);return{getMode:function(){return 8},getLength:function(r){return~~(n.length/2)},write:function(r){for(var t=n,e=0;e+1<t.length;){var o=(255&t[e])<<8|255&t[e+1];if(33088<=o&&o<=40956)o-=33088;else{if(!(57408<=o&&o<=60351))throw"illegal char at "+(e+1)+"/"+o;o-=49472}o=192*(o>>>8&255)+(255&o),r.put(o,13),e+=2}if(e<t.length)throw"illegal char at "+(e+1)}}},p=function(){var r=[],t={writeByte:function(t){r.push(255&t)},writeShort:function(r){t.writeByte(r),t.writeByte(r>>>8)},writeBytes:function(r,e,n){e=e||0,n=n||r.length;for(var o=0;o<n;o+=1)t.writeByte(r[o+e])},writeString:function(r){for(var e=0;e<r.length;e+=1)t.writeByte(r.charCodeAt(e))},toByteArray:function(){return r},toString:function(){var t="";t+="[";for(var e=0;e<r.length;e+=1)e>0&&(t+=","),t+=r[e];return t+"]"}};return t},m=function(r){var t=r,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=t.length){if(0==o)return-1;throw"unexpected end of file./"+o}var r=t.charAt(e);if(e+=1,"="==r)return o=0,-1;r.match(/^\s$/)||(n=n<<6|a(r.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw"c:"+r};return i},w=function(r,t,e){for(var n=function(r,t){var e=r,n=t,o=new Array(r*t),i={setPixel:function(r,t,n){o[t*e+r]=n},write:function(r){r.writeString("GIF87a"),r.writeShort(e),r.writeShort(n),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(255),r.writeByte(255),r.writeByte(255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(e),r.writeShort(n),r.writeByte(0);var t=a(2);r.writeByte(2);for(var o=0;t.length-o>255;)r.writeByte(255),r.writeBytes(t,o,255),o+=255;r.writeByte(t.length-o),r.writeBytes(t,o,t.length-o),r.writeByte(0),r.writeString(";")}},a=function(r){for(var t=1<<r,e=1+(1<<r),n=r+1,i=u(),a=0;a<t;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(t)),i.add(String.fromCharCode(e));var f,c,l,s=p(),g=(f=s,c=0,l=0,{write:function(r,t){if(r>>>t!=0)throw"length over";for(;c+t>=8;)f.writeByte(255&(r<<c|l)),t-=8-c,r>>>=8-c,l=0,c=0;l|=r<<c,c+=t},flush:function(){c>0&&f.writeByte(l)}});g.write(t,n);var h=0,d=String.fromCharCode(o[h]);for(h+=1;h<o.length;){var v=String.fromCharCode(o[h]);h+=1,i.contains(d+v)?d+=v:(g.write(i.indexOf(d),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(d+v)),d=v)}return g.write(i.indexOf(d),n),g.write(e,n),g.flush(),s.toByteArray()},u=function(){var r={},t=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;r[n]=t,t+=1},size:function(){return t},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return e};return i}(r,t),o=0;o<t;o+=1)for(var i=0;i<r;i+=1)n.setPixel(i,o,e(i,o));var a=p();n.write(a);for(var u=function(){var r=0,t=0,e=0,n="",o={},i=function(r){n+=String.fromCharCode(a(63&r))},a=function(r){if(r<0);else{if(r<26)return 65+r;if(r<52)return r-26+97;if(r<62)return r-52+48;if(62==r)return 43;if(63==r)return 47}throw"n:"+r};return o.writeByte=function(n){for(r=r<<8|255&n,t+=8,e+=1;t>=6;)i(r>>>t-6),t-=6},o.flush=function(){if(t>0&&(i(r<<6-t),r=0,t=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return r}();o.stringToBytesFuncs["UTF-8"]=function(r){return function(r){for(var t=[],e=0;e<r.length;e++){var n=r.charCodeAt(e);n<128?t.push(n):n<2048?t.push(192|n>>6,128|63&n):n<55296||n>=57344?t.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&r.charCodeAt(e)),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return t}(r)},void 0===(n="function"==typeof(e=function(){return o})?e.apply(t,[]):e)||(r.exports=n)},379:(r,t,e)=>{"use strict";var n,o=function(){var r={};return function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[t]=e}return r[t]}}(),i=[];function a(r){for(var t=-1,e=0;e<i.length;e++)if(i[e].identifier===r){t=e;break}return t}function u(r,t){for(var e={},n=[],o=0;o<r.length;o++){var u=r[o],f=t.base?u[0]+t.base:u[0],c=e[f]||0,l="".concat(f," ").concat(c);e[f]=c+1;var s=a(l),g={css:u[1],media:u[2],sourceMap:u[3]};-1!==s?(i[s].references++,i[s].updater(g)):i.push({identifier:l,updater:v(g,t),references:1}),n.push(l)}return n}function f(r){var t=document.createElement("style"),n=r.attributes||{};if(void 0===n.nonce){var i=e.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(r){t.setAttribute(r,n[r])})),"function"==typeof r.insert)r.insert(t);else{var a=o(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,l=(c=[],function(r,t){return c[r]=t,c.filter(Boolean).join("\n")});function s(r,t,e,n){var o=e?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(r.styleSheet)r.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=r.childNodes;a[t]&&r.removeChild(a[t]),a.length?r.insertBefore(i,a[t]):r.appendChild(i)}}function g(r,t,e){var n=e.css,o=e.media,i=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}var h=null,d=0;function v(r,t){var e,n,o;if(t.singleton){var i=d++;e=h||(h=f(t)),n=s.bind(null,e,i,!1),o=s.bind(null,e,i,!0)}else e=f(t),n=g.bind(null,e,t),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return n(r),function(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap)return;n(r=t)}else o()}}r.exports=function(r,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var e=u(r=r||[],t);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var n=0;n<e.length;n++){var o=a(e[n]);i[o].references--}for(var f=u(r,t),c=0;c<e.length;c++){var l=a(e[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=f}}}}},t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={id:n,exports:{}};return r[n](o,o.exports,e),o.exports}e.n=r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),(()=>{"use strict";var r=e(379),t=e.n(r),n=e(810);t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;var o=e(192),i=e.n(o);const a=window.location.search,u=new URLSearchParams(a),f=u.get("fname"),c=u.get("lname"),l=u.get("email"),s=u.get("twitter"),g=u.get("github");document.getElementById("fname").innerHTML=f,document.getElementById("lname").innerHTML=c,document.getElementById("email").innerHTML=l,document.getElementById("twitter").innerHTML=s,document.getElementById("twitter-a").setAttribute("href","https://www.twitter.com/"+s.replace("@","")),document.getElementById("github").innerHTML=g,document.getElementById("github-a").setAttribute("href","https://www.github.com/"+g.replace("@",""));var h="https://jtte-qrcodebadge.netlify.app/result.html?fname="+f+"&lname="+c+"&email="+l+"&twitter="+s+"&github="+g,d=i()(13,"L");d.addData(h),d.make(),document.getElementById("qrcode").innerHTML=d.createImgTag()})()})();
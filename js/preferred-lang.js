(()=>{var o={fallback:"/hugo-bootstrap/",homes:{en:"/hugo-bootstrap/","zh-hans":"/hugo-bootstrap/zh-hans/"}};(()=>{let a=navigator.language||navigator.userLanguage;if(a in o.homes){window.location.href=o.homes[a];return}let t=a.split("-");for(let n in o.homes)if(n.indexOf(t[0])===0){window.location.href=o.homes[n];return}window.location.href=o.fallback})();})();
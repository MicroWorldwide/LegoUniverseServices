﻿(function(f,d,c){c.cufonified=["h1","h2","h3",".buttonBig",".button","#mainNavigation li","#mainNavSplash"];f.replace(c.cufonified.join(","));c.RemoveCufon=function(b){d&&b&&d(b).find("cufontext").parent().parent().each(function(){var a=d(this),e=a.children("a"),g=a.children("span");if(a.find("cufontext").length>0){if(e.length)a=e;else if(g.length)a=g;a.html(a.text())}})};c.ResetCufon=function(b){b=d(b);b.get(0);RemoveCufon(b);var a=b.find(c.cufonified.join(",")),e=c.cufonified.join(",");if(b.filter(e).length>
0)a=a.add(b);a=a.get();f.replace(a)}})(Cufon,jQuery,window,document);
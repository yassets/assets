define(['jquery'],function($){
	
    var widget = {
    	timeSet:function(years,months,days){		// 计时器 //divnames:倒计时的id，lang:地区语言
    		var year = years,month = months,day = days;
    		function ShowCountDown(){
    			var now = new Date();
		        var endDate = new Date(year,month-1, day, now.getHours()+8);
		        var leftTime=endDate.getTime()-now.getTime();
		        var leftsecond = parseInt(leftTime/1000);
		        var day1= Math.floor(leftsecond/(60*60*24));
		        var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
		        var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
		        var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
		        //if (day   <= 9) day = "0" + day;
	            if (hour   <= 9) hour = "0" + hour;
	            if (minute <= 9) minute = "0" + minute;
	            if (second <= 9) second = "0" + second;
	            //document.getElementById("d").innerHTML = day;
		        document.getElementById("h").innerHTML = hour;
		        document.getElementById("m").innerHTML = minute;
		        document.getElementById("s").innerHTML = second;
		        //cc.innerHTML = hour+"時"+minute+"分"+second+"秒";
    		}
	        window.setInterval(function(){
	        	ShowCountDown();
	        }, 1000);

    	},
    	percent:function(soldNum,percentNum,progress){	//销售百分比
		        var curhour= $('.percentBar').attr('data-value');
		        var base=0,range=0;
		        var percent   = document.getElementById("percentNum");
		        var progress  = document.getElementById("progress");
		        if(curhour<=10000){
		            base=70;range=5;
		        }else
		        if(curhour<=20000){
		            base=70;range=10;
		        }else
		        if(curhour<=40000){
		            base=70;range=15;
		        }else
		        if(curhour<=80000){
		            base=70;range=20;
		        }else
		        if(curhour<=130000){
		            base=70;range=25;
		        }else
		        if(curhour<200000){
		            base=70;range=28;
		        }
		        var opercent=Math.floor(range+base);
		        try{
		        	progress.style.width = percent.innerHTML = opercent+"%";
		        }catch(ex){
		        	
		        }

    	},
    	styleStatistics: function(type, orderid) {
    		var origin = [];
    			origin[0] = 'http://www.statistics.com';
    			origin[1] = 'http://120.77.200.250';

			var type = type || 'view';

			var url = origin[1] + '/domainStyle.php?key=buguniao&callback=statistics';
			
			var pathname = window.location.pathname;
			if( pathname == "/checkout.php" || pathname == "/error.php" ){ return false; }
			if( pathname == '/orders.php' && type == 'view' ){ return false; }

			switch( type ){
				case 'view':
					var json = {
						style: getStyleName()
						, domain: window.location.hostname + location.pathname
						, type: type
					}
					jsonp(url, json);
					break;
				case 'order':
					var json = {
						style: getStyleName()
						, type: type
						, orderid: orderid
					}
					jsonp(url, json);
					break;
				default:
					var json = {
						style: getStyleName()
						, type: type
					}
					jsonp(url, json);
					break;
			}
    		function jsonp(url, param){
    			var arrs = [];
    			for( name in param ){
    				arrs.push(name + "=" + param[name]);
    			}
				var script = document.createElement('script');
					script.setAttribute('src', url + "&" + arrs.join('&'));
				document.getElementsByTagName('head')[0].appendChild(script);
    		}
			window.statistics = function(param){
    			console.log(param);
    		}
    		function getStyleName(){
    			var styleName = document.getElementById("styleName").value;
    			styleName = styleName.replace('+timer', '');
    			styleName = styleName.replace('Blue(TW)', 'style3');
    			styleName = styleName.replace('wnczxzd.com', 'style4');
    			styleName = styleName.replace('style7(yn)', 'style7');
    			return styleName;
    		}
    	},
    	fmoney:function(s, n){//金额格式化
    		n = n > 0 && n <= 20 ? n : 2;   
	       s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
	       var l = s.split(".")[0].split("").reverse(),      
	       t = "";   
	       for(i = 0; i < l.length; i ++ )   
	       {   
	          t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
	       }   
	       return t.split("").reverse().join("");  
    	}
    }
    window.widget = widget;

});
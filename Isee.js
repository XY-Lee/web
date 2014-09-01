$(document).ready(function(){

  $(".go").click( function() {
      var randomNum = Math.floor( Math.random() * 100 ) % 15 + 1 ;
	  var Topic = null ;
	  var TopicV = null ;
	  switch ( randomNum ) {
	    case 1 :
		  Topic = "蚊子" ;
		  break ;
        case 2 :
		  Topic = "陳水扁" ;
		  break ;
		case 3 :
		  Topic = "狗狗" ;
		  break ;
		case 4 :
		  Topic = "鱷魚" ;
		  break ;
		case 5 :
		  Topic = "舞棍阿伯" ;
		  break ;
		case 6 :
		  Topic = "魚" ;
		  break ;
		case 7 :
		  Topic = "老婆婆" ;
		  break ;
		case 8 :
		  Topic = "大象" ;
		  break ;
		case 9 :
		  Topic = "肌肉男" ;
		  break ;
		case 10 :
		  Topic = "芭蕾舞者" ;
		  break ;
		case 11 :
		  Topic = "魯夫" ;
		  break ;
		case 12 :
		  Topic = "展場show girl" ;
		  break ;
		case 13 :
		  Topic = "掃地工" ;
		  break ;
		case 14 :
		  Topic = "跆拳道國手" ;
		  break ;
		case 15 :
		  Topic = "super junior" ;
		  break ;
	  } // switch
	  randomNum = Math.floor( Math.random() * 100 ) % 15 + 1 ;
	  switch ( randomNum ) {
	    case 1 :
		  TopicV = "跑步" ;
		  break ;
        case 2 :
		  TopicV = "跳鋼管舞" ;
		  break ;
		case 3 :
		  TopicV = "握手" ;
		  break ;
		case 4 :
		  TopicV = "射弓箭" ;
		  break ;
		case 5 :
		  TopicV = "打撞球" ;
		  break ;
		case 6 :
		  TopicV = "飛高高" ;
		  break ;
		case 7 :
		  TopicV = "搖屁股" ;
		  break ;
		case 8 :
		  TopicV = "唱歌" ;
		  break ;
		case 9 :
		  TopicV = "劈腿" ;
		  break ;
		case 10 :
		  TopicV = "唸經" ;
		  break ;
		case 11 :
		  TopicV = "刷牙" ;
		  break ;
		case 12 :
		  TopicV = "做M字腿" ;
		  break ;
		case 13 :
		  TopicV = "拉單槓" ;
		  break ;
		case 14 :
		  TopicV = "打棒球" ;
		  break ;
		case 15 :
		  TopicV = "打籃球" ;
		  break ;
	  } // switch
      $(".topic").html( "<br>" + Topic + "<br>在<br>" + TopicV );
	  $(".F5").html( "<button onclick = 'location.reload();' class = 'go' >遊戲結束</button>" );
  }) ;
  
}) ;
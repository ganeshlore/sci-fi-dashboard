function openSettings(dataType,ranDomNum){
        ////    flip option   /////////////////////////////////
		$('#'+dataType+'_'+ranDomNum).closest('.card').flip({

			trigger: 'manual'

		});

		$('#'+dataType+'_'+ranDomNum).closest('.card').flip('true');
        ////////////////////////////////////////////////////////


        ////    append DATA   //////////////////////////////////
$('#'+dataType+'_'+ranDomNum).closest('.card').find('.back').html(graphOption("'"+dataType+'_'+ranDomNum+"'"));
        //////////////////////////////////////////////////////////////////////////////////////////
	}


    function settingsPanelClose(graphType){
        
        $('#'+graphType).closest('.card').flip(false);
    }


	function graphOption(graphType){
		 
	   $(".dropzone").dropzone({ url: "/file/post" });


        var html = '<div class="box-top-options-back">'+
		           '<div class="module">'+
  
					  '<header>'+
					    '<div class="row">'+
  		
					  		'<div class="col-md-12 text-right" touch="graphType">'+
					  		'<i class="fa fa-undo" aria-hidden="true" graphType='+graphType+'></i>'+
					  		'</div>'+
					  		'<div class="col-md-12 text-center">'+
                             
                             '<img src="img/monitor.png"  width="100"/>'+
					  		 
					  		'</div>'+

					  		'<div class="col-md-12 text-center" style="height:15px;">'+
							'</div>'+

					  		'<div class="col-md-12 text-center">'+

					  		'<div class="row">'+
                               '<div class="col-xs-4 text-center">'+
                               '<img src="img/add.png"  width="32" data-toggle="modal" data-target="#myModal"/>'+
                               '</div>'+
                               '<div class="col-xs-4 text-center">'+
                               '<img src="img/edit.png"  width="32"/>'+
                               '</div>'+
                               '<div class="col-xs-4 text-center">'+
                               '<img src="img/view.png"  width="32"/>'+
                               '</div>'+
                             '</div>'+

					  		'</div>'+
				  		
						'</div>'+
					  '</header>'+

					'</div>'+
					'</div>';

		 
		 

         return html;
	}


	function showGraph(dataType,ranDomNum){

    var html =  '<div class="box-top-options-'+dataType+'" touch="openSettings">'+
	'<i class="fa fa-cogs" aria-hidden="true" dataType="'+dataType+'" ranDomNum="'+ranDomNum+'"></i>'+
	'</div>'+
	'<div id="'+dataType+'_'+ranDomNum+'"></div>';

     return html;

	}


    /////////////    Touch & Click Working on  Open & Close Settings Flip  ////////////////////


	$(document).on('touchstart click','[touch=openSettings]',function(){

		var dataType  = $(this).children('i').attr('dataType');
		var ranDomNum = $(this).children('i').attr('ranDomNum');

		openSettings(dataType,ranDomNum);
	})


	$(document).on('touchstart click','[touch=graphType]',function(){
       graphType  = $(this).children('i').attr('graphType');
       settingsPanelClose(graphType);
	})

	/////////////////////////////////////////////////////////////////////////////////////////
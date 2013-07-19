CKEDITOR.disableAutoInline = true;
$(function() {
	$('.page-properties-inner input').on('keyup keypress blur change', function() {
		enablePageSave();
	});
	$('.edit-content-inline').attr("contenteditable", "true").ckeditor(
			{
				on: {
					focus: function(event) {
	                	console.log($(this.element).attr('id') + ": focused");
					},
	                blur: function( event ) {
	                	console.log($(this.element).attr('id') + ": blurred");
	                	var inputIdentifier = $(this.element).attr('data-input-identifier')
	                	
	                	if(inputIdentifier && "" != inputIdentifier) {
	                		if(this.checkDirty()) {
	                			$(inputIdentifier).val(this.getData());
	                			enablePageSave();
	                		}
	                	}
	                	/*
	                    var data = event.editor.getData();
	
	                    var request = jQuery.ajax({
	                        url: "/admin/cms-pages/inline-update",
	                        type: "POST",
	                        data: {
	                            content : data,
	                            content_id : content_id,
	                            tpl : tpl
	                        },
	                        dataType: "html"
	                    });
						*/
	                }
	            }
			}
	);
});

function enablePageSave() {
	$('.page-properties-save').removeAttr('disabled');	
}

function sdbmCode(str){
    var hash = 0;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = char + (hash << 6) + (hash << 16) - hash;
    }
    return hash;
}

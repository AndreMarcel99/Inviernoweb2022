$('form').submit(function(event) {
    event.preventDefault();
    window.history.back();
});


$(".agregar").on("click", function(){

    if($("#newText").val()){

        let check = $("<button>")
        check.text("Check")
        check.attr("class","checar")

        let del = $("<button>")
        del.text("Delete")
        del.attr("class","del")
        
        let paragra = $("<p>")
        paragra.append(check)
        paragra.append(del)
        
        let extension = $("<li>")
        extension.text($("#newText").val())
        extension.append(paragra)
        
        let sep = $("<div>")
        sep.attr("class","lis")
        sep.append(extension)
        

        $(".Lista").prepend(sep)

    }else{
        alert("Need data")
    }
})




$(".Lista").on("click",".checar", function(){
    
    $(this).parent().parent().toggleClass('done')
})

$(".Lista").on('click','.del', function(){
    $(this).parent().parent().parent().remove()
   } )
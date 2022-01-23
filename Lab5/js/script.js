$("#formtodo").submit(function(event){
    event.preventDefault();
    if ($("#todoText").val()){

        let div = $("<div>")
        let input = $("<input>")
        let label = $("<label>")

        input.attr("type","checkbox")
        input.attr("name","todo")
        label.text($("#todoText").val())

        div.append(input)
        div.append(label)

        $('#todoList').append(div)
    }else{
        alert("Need data")
    }
});

$("#ButtonClear").on("click", function(){
    $('[name="todo"]').each(function(){
        $(this).attr("checked",false);
    });
});

$("#ButtonMark").on("click", function(){
     $('[name="todo"]').each(function(){
         $(this).attr("checked",true);
     });
});

$("#ButtonDelete").on("click", function(){
    $('[name="todo"]').each(function(){
        if($(this).is(":checked")){
            $(this).parent().remove()
        }
    })
})


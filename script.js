$(document).ready(function() {
    //add task to the list
    $('#addTask').click(function() {
        var task=$('#taskInput').val()
        $('#taskList').append('<li><span class="taskText">'+task+'</span><span class="editButton">Edit</span><span class="removeButton">Remove</span></li>')
        $('#taskInput').val('')
    })
    $('#taskInput').focus(function() {
        $(this).addClass('highlight')
    })
    $('#taskInput').blur(function() {
        $(this).removeClass('highlight')
    })
    $('#taskList').on('click', '.taskText', function() {
        $(this).toggleClass('completed')
    })
    $('#taskList').on('click', '.removeButton', function() {
        $(this).parent().remove()
    })
    $('#taskList').on('click', '.editButton', function() {
        var $taskText = $(this).siblings('.taskText')
        var currentText = $taskText.text()
       var newText= prompt('Edit Text:',currentText)
       if (newText) {
        $taskText.text(newText)
       }
    })
    $('#taskList').on('mouseenter', '.taskText', function() {
        $(this).css('cursor', 'pointer')
    })
})
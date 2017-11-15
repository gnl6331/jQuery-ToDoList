    var $taskCount = 2;

    function addNewDataToList() {
        let $userInputText = $("#AddNewTask").val();
        let $newTask = "<div class=\"task remove\">";

        if ($userInputText === "") {
            $("#AddNewTask").attr("placeholder", "Please enter a task!").val("");
            $("#AddNewTask").css("border", "solid red 2px");
        } else {
            $newTask += "<button class=\"remove-item\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>";
            $newTask += "<button class=\"completed-item\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>";
            $newTask += "<p class=\"task-text\">";
            $newTask += $userInputText;
            $newTask += "</p></div>";
            $("#main-todo-list").prepend($newTask);
            $("#AddNewTask").attr("placeholder", "Click me to add another task").val("");
            $("#AddNewTask").css("border", "none");
            $taskCount++;
            $userInputText = "";
        };
    };

    $("#new-task").click(function () {
        addNewDataToList();
    });

    $("#AddNewTask").on("keydown", function (e) {
        if (e.which == 13) {
            e.preventDefault();
            addNewDataToList();
        }
    });

    $(document).on('click', '.remove-item', function () {
        $(this).closest("div").remove();
        $taskCount--;
    });

    $(document).on('click', '.completed-item', function () {
        $(this).siblings("p").css("text-decoration", "line-through", "color", "#4caf50");
        $(this).siblings("p").css("color", "#4caf50");
    });

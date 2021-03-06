function update(input) {
    if (currentMode !== "") {
        $("#help").css("display", "none");
    }

    var output = [];
    if (input !== "") {
        if (currentMode === "emoji") {
            output.push("");
            output = output.concat(input.split(" "));
            output.push("");
            output = output.join("👏");
        }

        if (currentMode === "aesthetic") {
            output = input.replace(/\w/g, l => l.toUpperCase());
            output = output.split("");
            output = output.join(" ")
        }

        if (currentMode === "random") {
            $("#randomize").css("display", "inline");
            intermediate = input.toLowerCase().split("");
            intermediate.forEach(function(letter) {
                if (Math.random() >= 0.5) {
                    output.push(letter.toUpperCase())
                    return;
                }
                output.push(letter);
            });
            output = output.join("")
        } else {
            $("#randomize").css("display", "none");
        }
    }

    $("#output-TA").text(output);
}

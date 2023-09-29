// Subscribers copy text
function subscribeCopy() {
    let copyText = document.getElementById("Sub_text")
    const textToCopy = copyText.innerText;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
    alert("The " + textToCopy + " has been copied!"
    )
}

// Subscribers/Names copy text
function nameCopy() {
    let copyText = document.getElementById("Name_text")
    const textToCopy = copyText.innerText;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
    alert("The " + textToCopy + " has been copied!")
}

// Subscribers/Id copy text
function idCopy() {
    let copyText = document.getElementById("Id_text")
    const textToCopy = copyText.innerText;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
    alert("The " + textToCopy + " has been copied!")
}
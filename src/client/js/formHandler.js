import axios from "axios"

function handleSubmit(event) {
    event.preventDefault()

    let url = document.getElementById("link").value
    if (!Client.urlChecker(url)) {
        alert("URL is incorrect")
        return
    }

    let link = url
    console.log("submission done")
    console.log(link)

    axios.post("http://localhost:8081/test", { url: url })
        .then(res => res.data)
        .then(data => {
            data["url"] = url
            let results = JSON.stringify(data, null, 2)
            document.getElementById("results").innerHTML = "<br><pre>" + results + "</pre>"
        })
}

export { handleSubmit }
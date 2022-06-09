function submitData(name, email) {
    const formData = {
        name: name,
        email: email,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
            document.getElementsByTagName('body')[0].append(object.id)
        })
        .catch(function (error) {
            console.log(error.message);
            document.getElementsByTagName('body')[0].append(error.message);
        });
}
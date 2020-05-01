function erkoc(id, callback) {
    callback("ahmet");
}

erkoc(1, (user) => {
    console.log(user);
});
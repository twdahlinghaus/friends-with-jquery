let friends = [];

$().ready(() => {

    $("#add").click(() => {
        let fname = $("#iname").val();
        let femail = $("#iemail").val();
        let fphone = $("#iphone").val();
        let friend = {
            name: fname, email: femail, phone: fphone
        };
        friends.push(friend);
        display();
    });
});

const display = () => {
    let tbody = $("tbody");
    tbody.empty();
    for(let friend of friends) {
        console.log(friend);
        let tr = $("<td></td>");
        let tdName = $(`<td>${friend.name}</td>`);
        tr.append(tdName);
        let tdEmail = $(`<td>${friend.email}</td>`);
        tr.append(tdEmail);
        let tdPhone = $(`<td>${friend.phone}</td>`);
        tr.append(tdPhone);
        tbody.append(tr);
    }
}

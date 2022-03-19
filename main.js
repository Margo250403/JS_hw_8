var user = {
     id: "user",
     name: "Marharyta",
     age: 18,
     email: "kachan@gmail.com",
     city: "Dnipro",
     phone: "+380678434276",

     show: function (element) {
          var list = document.querySelector(element)
          for (var key in this) {
               if (typeof this[key] !== "function") {
                    list.innerHTML += `<p>${this[key]}</p>`
               }
          }
     }
}
user.show("#user-card");


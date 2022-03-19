var user = {
     id: "id_user",
     name: "Marharyta",
     age: 18,
     email: "kachan@gmail.com",
     city: "Dnipro",
     phone: "+380678434276",

     show: function (element) {
          var list = document.querySelector(element);
          for(var key in this){
               if(typeof this[key] !== 'function'){
                    list.innerHTML += `<p>${this[key]}</p>`
               }
               
          }
     }
}
user.show("#user-card");

//  Создать объект user с свойствами id, name, age, email, city, ... и можно добавить еще что то на свое усмотрение.
//  Создать метод объекта который выводит в существующий блок на странице все данные пользователя ввиде карточки.
//  HTML карточки и стили к нему можно написать и оформить в произвольном виде.
//  Метод объекта должен принимать айди того блока в который нужно выводить данные о пользователе. user.render("user-card");
//  Для вставки html можно использовать innerHTML
//  Для написания стилей карточки пользователя нужно использовать файл style.css
//  Для поиска элементов использовать document.querySelector("#id_name");


// escopo global
function myFunction () {
    console.log(this)
}

myFunction()

//escopo local
const object = {
    name: "Julia",
    age: 24,
    talk: function () {
        console.log(this.name)
    }
}

object.talk()


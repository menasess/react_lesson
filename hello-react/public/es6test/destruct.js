//비구조화, 구조 분해
//객체를 분해.
//객체
const sana = {name:'사나',age:23,address:'경기'}

function print2({name,age}){
    console.log('name',name)
    console.log('age',age)
}
function print3({address}){
    console.log('address',address)
}
function print(people){
    console.log('name',people.name)
    console.log('age',people.age)
    console.log('address',people.address)
}
print(sana)

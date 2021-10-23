function deepFreeze(obj) {
  var propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach((name) => {
    var prop = obj[name]

    if (typeof prop == 'object' && prop !== null) deepFreeze(prop)
  })

  return Object.freeze(obj)
}


export default function (o) {
  return deepFreeze(o)
 }

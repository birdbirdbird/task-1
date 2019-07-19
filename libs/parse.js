module.exports = function(str) {
    const arr = str.split(" + ")
    var a = []
    for (var i = 0; i < arr.length; i++) {
        a.push({ block: 'text', elem: 'word', elemMods: { width: arr[i] }})
    }
    return a
}
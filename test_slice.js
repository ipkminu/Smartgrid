var tab = ([
    [1, 2],
    [3, 4]
]);
function cp_grille(grille) {
    var _tab = new Array(2);
    for (let i = 0; i < 2; i++) {
        _tab[i] = new Array(2)
        for (let j = 0; j < 2; j++) {
            _tab[i][j] = grille[i][j];
        }
    }
    return _tab;
}
console.log("Tab: " + tab);

var tab2 = cp_grille(tab);
console.log("Tab2 apres copie:  " + tab2)
tab2[0][0] = 0;
console.log("Tab après mmodification de tab2" + tab)

console.log(tab2)
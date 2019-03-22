const myPokemon = 'Pikachu'
const opponent = 'Lolo' //const cannot be change
let myHP = 100
let oppHP = 100
//let myExp = 50 // let - able to change the variable
let isMyturn = true
//let oppSkill = 'low'
//let mySkill = 'low'
//let attacker = true ? 123: 456 //condition to check -> If (true) = 123 else = 456
//let currentPokemon = myPokemon

console.log('Your enemy has appear ' + opponent)
console.log(myPokemon + ' enter battle field')
console.log(myPokemon + ' has ' + myHP + 'HP')
console.log(opponent + ' has ' + oppHP + 'HP')

// the game continues while either pokemon has more than 0 HP

while (myHP > 0 && oppHP > 0) {// if myHP goes below 0, stop; if oppHP goes below 0, stop
  console.log('----------------------------------------------')
  let attackerName = isMyturn ? myPokemon : opponent // my HP goes below 0, but opponent HP is above 0, continue
  let defenderName = isMyturn ? opponent : myPokemon // opponent HP goes below 0, but my HP is above 0, continue; my HP is below 0 and opponent HP is below 0, stop 

  console.log(attackerName + ' uses Shadow Ball') //First attack  
  console.log('Shadow ball hits damage 60')

  //const attackDamage = Math.floor(Math.random() * 10)

  if (isMyturn) {
    oppHP = oppHP - 50 // as long as my HP is more than 0 and opponent HP is more than 50
    console.log(defenderName + " health is reduced to " + oppHP)
  } else {
    myHP = myHP - 50
    console.log(defenderName + " health is reduced to " + myHP)
  }

  //Switch turn 
  isMyturn = !isMyturn
}
if (oppHP <= 0) {
  console.log(opponent + ' faints')
  console.log(myPokemon + ' has gained 50 exp') // if your pokemon levels up, might learn new skills.
} else if (myHP <= 0) {
  console.log(myPokemon + ' faints')
  console.log('GAME OVER')
}


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roberto the Robot";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players they are starting the round
    window.alert("Welcome " + playerName + "... to Robot Gladiators!")

    // Fight or Skip prompt
    var promptFIght = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining!"
    );
    
    // Check enemy's remaing health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has been defeated!");
    }
    else {
        window.alert(enemyName + " has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining!"
    );

    // Check player's remaing health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }

};

fight();
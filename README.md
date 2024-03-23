University project to create an interactive game that can be streamed to Twitch and interacted by commands in a specified Twitch chat. 
This is a tile, turn-based FFA type game where each Twitch viewer controls one player's movement and actions.
The game has four in-game players.
The goal is to collect as many apples (red/pink) and avoid rotten apples (purple/yellow) to score. 
There are four
There is a weather indicator (in text) that announces if Acid Rain is present. Players should avoid moving/staying in a Dirt tile to
There are 20 turns and all four players make one move (command) during each turn (this means a total of 4 + 80 = 84 commands need to be typed to complete one match).
The game starts with Turn 1 and proceeds to the next turn when all 4 players have made their move (in any order). 
During each turn there will be (normal) apples spawned across the board and the apples reset their locations after each turn. 

All PNG files are visual content for the game.
CSS file is present to style HTML elements into a 8x8 grid and display other aspects of the game (scoreboard, player names, scores, weather, etc.).
User should replace the existing Twitch channel name in Game4.js with their own. 
The game is launched by opening the HTML file.
At least four different Twitch viewers are required to input commands to join the game before it can begin. 
Join commands are (assigns one in-game player to a unique viewer):
!joinred
!joinyellow
!joinblue
!joinwhite

The four players can each type one valid command per turn; either moving or stationary. 
Moving commands are in the following format: !move + red + down (!movereddown)
Examples include but not limited to: !moveblueleft, !moveyellowup, !moveredright
Each player can only use the command of their chosen colour (from the !join command). Player Red can only use Red commands and so forth for the other three players.

Stationary commands are in the following format: !rotten + red (!rottenred)
Examples include: !rottenyellow, !rottenblue, !rottenblue
The player using this stationary command loses points upon using the command (if the player can afford such points). The player does not move for this turn and spawns rotten apples in the nearest four tiles diagonally to the player.
Any player who collects a rotten apple during a turn will face a great penalty (points reduced).

Finally, during the second half of the game, rotten apples will spawn from the edge of the board and start invading the board with each turn. 
This is done to motivate the players to move towards the centre of the board for competition of space and acid rain safety. 





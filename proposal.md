# Hoarder 
_______________________________________________________________________________

## Background and Overview 

this game is based off a game where I invested tons of hours into in my spare time during High school. It was very simple but challenging and more importantly pure fun. 

Hoarder is a simple collector game where the players main goal is to hoard as many dots as possible, their are mean circles that don't want the player to keeop all his dots. When colliding with one of them, the player will lose some of their collected dots.

As the player collects more and more dots, the nefarious circle will start to pick up speed and multiply filling up the screen. To counter this the player must collect special dots which allow them to consume the circles. Clearing out space and allowing for more room to maneuver. 

## Functionality and MVP's

- Players will be able to traverse the play area using the arrow key's. 
- Collecting more dots will populate the screen with more circles that are out to get you.
- circles get added to the play area after collecting more dots. 
- player can consume the nefarious circles when they have consumed a special dot.
- the game ends when the player no longer has anymore dots in their collection. 


### MVP's in order of importance: 

 - create a grid for a player to move freely around.
 - creating nefarious circle with collision physics.
 - dot collected counter 
 - allow circles to traverse the whole screen, coming out of the play area instead of bouncing off the walls. Player should not be able to do the same. 
 - scoreboard

## Architectures and technologies

- Vanilla javascript 
    - game logic and structure
- HTML5 Canvas 
    - creating objects in game
- HTML audio player (WebAudioAPI)
    - music for game over, consuming dots, losing dots.
- Webpack 
    - bundle files together. 


## Timeline 

### Day 1: 
    
    

    Finished canvas drawings of objects. (circles, player object, dots)

    - [] Finished collision and consuming of circles/dots

    - [] Updating dot counter 

### Day 2: 

    - [] Finish controls moving the players.

    - [] Render sound for specific actions.

    - [] Spontaneous creation of circles and dots. 

### Day 3: 

    - [] Controller layout modal. 

    - [] Finish styling. 

    - [] Game over mechanics 


### weekend: 

    - [] Fix bugs 

    - [] Finish styling 


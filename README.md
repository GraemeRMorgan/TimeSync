
⌛️
##  TimeSync 
###### Warning: I believe this application may cause dizziness or headaches. Beware.

The purpose of this application is to simulate the complexity of time synchronization using a time server. The goal is to have multiple nodes moving across the screen. The uppermost Node represents a time server. The goal is to align all of the nodes in a line. At that point, it is assumed that the time has synchronized across the system. 

### Controls
The nodes can be **stopped** or **started** by clicking on the nodes. This is slightly annoying and I may include fixed buttons and control menu in the future. 


### Dependencies
React Simple Animate : This is used to animate the boxes with a nice ease. 
```
npm install react-simple-animate
```
### Running
```
npm start
```

### In Progress
* I still need to include a way to detect if the nodes are synchronized. I am considering 2 options:
1. Have a `<div>` in the middle of the screen that acts as a 'collision detector'. If all nodes are colliding with the `<div>` at the same time and moving in the same direction, then it is assumed that they are synchronized with a acceptable level of drift. 
2. Calculating the position of each node throughout the loop. If all nodes are in similar positions for a determined length of time, and are traveling in the same direction, it is assumed they are synchronized with an acceptable level of drift. 
* Implement a random delay on individual nodes to simulate RTT/2.
* Implement levels. There may only be 2 levels. One with the delay and one with no delay. Time permitting.
* Implement a timer.




#### Notes
One of the primary issues with **Time Synchronization** is **RTT** or Round *Trip Delay Time*. This is the primary challenge in time synchronization, as it may be 1:00pm in Dallas, but when Dallas tries to tell Moscow it's 1:00pm, it's not quite 1:00pm when the message gets to Moscow. Therefore, Moscow needs to subtract the RTT/2 from Dalls to Moscow before telling Dalls that it's in sync. 

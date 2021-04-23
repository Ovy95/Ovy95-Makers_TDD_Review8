# Ovy95-Makers_TDD_Review8

We need to create a band pass filter which will take an input and give out an output according the the note passed through
a sound wave  = []
int values 

lower = 40 
upper 1000 

This program needs to be run on streamed music, so it should process a full second of music (44,100 frequencies) in under 100ms.



input  || output
__________________
[40]      || [40]
[1000]     || [1000] 

[0]       || [40]
[1001]      [1000] 
________________________
[30,50]       [30,50]

next let user create they're own limits or use default 
stringy array []  / limits curl 
[60,10,45,60,1500]  ,20,50    || [50,20,45,50,50]
___________________

Edge Cases 

["40"]  throw an error sound waves are not passed correctly
[][[]] throw an error sound waves are not passed correctly
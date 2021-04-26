# eVisit-coding-challenge

## Overview
The team has developed a web service. This JavaScript file contains a program that will keep track of the IP addresses that are making the most requests to the service each day.

This program contains 3 functions - requestHandled(), getTop100(), and clear()

## Approach

Regarding my approach and strategy, I wanted to tackle the program and have a working MVP before trying to work on any optimizations. I decided to use a simple object to keep track of the ip addresses and their count.

- The requestHandled() function takes in an ip address as a string and checks if it already exists in the tracker. If it doesn't exist, initiate a property using the ip address as a key with a value of 1. Otherwise, it'll increment the value by 1 assuming it already exists. The time complexity should be constant since it's just doing a lookup.

- The getTop100() function does not take in any arguments, but returns an array with a list of ip addresses. My approach was a bit more brute force, where I use the sort method in descending order and return the first 100 values by using slice. The time complexity should be linearithmic.

-The clear() function does not take in any arguments nor does it return a value. This function will create a new object to track the ip addresses. Time complexity should be constant.

If I had more time, I would've written a few unit tests in Jest which I was in the process of doing. I would have also gone back to try to better optimize my getTop100() function.
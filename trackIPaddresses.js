let ipAddressTracker = {};

const requestHandled = (ipAddress) => {
 //i: ipAddress - string
 //o: none

 if (!ipAddressTracker[ipAddress]) {
   ipAddressTracker[ipAddress] = 1;
 } else {
   ipAddressTracker[ipAddress]++;
 }
};

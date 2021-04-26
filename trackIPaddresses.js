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

const getTop100 = () => {
  //i: none
  //o: list of 100 ip addresses

  let ipAddresses = Object.keys(ipAddressTracker);
  let sortedAddresses = ipAddresses.sort((a, b) => {
    return b - a;
  });
  let top100addresses = sortedAddresses.slice(0, 100);
  return top100addresses;
 };

const clear = () => {
  //i: none
  //o: none
  ipAddressTracker = new Object();
};

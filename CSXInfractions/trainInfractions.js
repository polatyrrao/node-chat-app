

var trainInfractions = ()=>{
  return new Promise((resolve, reject) => {
//var encodedAddr = encodeURIComponent(address);
//console.log(encodedAddr);
try {
  resolve({
              axles:"100",
              empties:"28",
              eng_mp:"A  131.34",
              event_ts:"Fri Jun 15 2018 12:23:22 GMT-0400 (Eastern Daylight Time)",
              footage:"2100",
              loaded:"10",
              loco:"CSXT0606",
              opBrakes:"6",
              ptc_state:"active",
              speed:42,
              tonnage:"5000",
              train_id:"Q16115"
          });
} catch (e) {
  reject({"Error": "Not able to send train infractions"});
} finally {}

  });
};


module.exports.trainInfractions = trainInfractions;

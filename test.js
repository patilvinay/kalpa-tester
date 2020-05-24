const test=require("./lib")
const yaml=require("yamljs")
const path = require ("path")
const kalpa=require("kalpa")
let obj=yaml.load("test/test.yaml").testing;
//console.log(testData)

for(let i in obj)
{
  let testData=obj[i]
  //console.log(testData)
  let result=test.test(testData.param,testData.expect);
  if(result)
    console.log("test passed")
  else
     console.log("test failed")
}

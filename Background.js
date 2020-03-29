// background.js

var bears = {}
var reflect = {}

var urldata = "" 
var attrdata = ""
var attrcontext = ""
var scriptdata = ""
var htmldata = ""

var same_attr = ""
var same_htm = ""
var same_script = ""
var same_url = ""

var completedata ="" 
var weburl = ""

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) 
{
      // attrdata   = attrdata + "\r\n" + "nextcontext"  + request.a0 + "\r\n"     //--content
      // attrdata   = attrdata + "\r\n" + "nextcontext"  + request.a1 + "\r\n"     //--value
      // attrdata   = attrdata + "\r\n" + "nextcontext"  + request.a2 + "\r\n"     //--action
      // attrdata   = attrdata + "\r\n" + "nextcontext"    + request.a3 + "\r\n"   //--src
      // attrdata   = attrdata + "\r\n" + "nextcontext"  + request.a4 + "\r\n"     //--class
      // attrdata   = attrdata + "\r\n" + "nextcontext"  + request.a5 + "\r\n"     //--title
      attrdata   = "nextcontext"  + request.attrdata + "\r\n"  // other

      // htmldata   = htmldata + "\r\n" +  "nextcontext"  + request.h0 + "\r\n"      // HTML title 
      // htmldata   = htmldata + "\r\n" +  "nextcontext"  + request.h1 + "\r\n"            // span
      // htmldata   = htmldata + "\r\n" +  "nextcontext"  + request.h2 + "\r\n"             // div
      // htmldata   = htmldata + "\r\n" +  "nextcontext"  + request.h3 + "\r\n"               // p
      // htmldata   = htmldata + "\r\n" +  "nextcontext"  + request.h4 + "\r\n"               // h
      // htmldata   = htmldata + "\r\n" +  "nextcontext"  + request.h5 + "\r\n"              // em

      htmldata   = "nextcontext"  + request.htmldata + "\r\n"            // other
      scriptdata = "nextcontext"  + request.scriptdata + "\r\n" 
      urldata    = "nextcontext"  + request.urldata + "\r\n" + "\r\n"

      same_attr  = "nextcontext"  + request.same_attr  + "\r\n"
      same_htm   = "nextcontext"  + request.same_htm  + "\r\n"
      same_script= "nextcontext"  + request.same_script  + "\r\n"
      same_url   = "nextcontext"  + request.same_url  

     weburl = request.url + ".txt";
     completedata =  request.url + "\r\n" + attrdata + htmldata + scriptdata + urldata
                     + same_attr + same_htm + same_script + same_url 


//----------------------------------------- saving and downloading file -----------------------


  saveText(weburl, completedata);

  urldata = "" 
  attrdata = ""
  attrcontext = ""
  scriptdata = ""
  htmldata = ""
  samedata = ""
  completedata ="" 
  weburl = ""


})

chrome.browserAction.onClicked.addListener( function (tab) {

alert("Downloads Automatically when a page is LOADED ")
  
})

 chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
       // console.log(msg);
    });
  });
function saveText(filename, text) {
            var tempElem = document.createElement('a');
            tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            tempElem.setAttribute('download', filename);
            tempElem.click();
         }


//---------------------------------- END OF FILE --------------------------------------
//---------------------------------- END OF FILE --------------------------------------


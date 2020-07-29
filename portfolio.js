let container=document.getElementById('disappear');
let contxt=document.getElementById('contxt');
let emails=document.getElementById('emails');
let phn=document.getElementById('no');
function disappear(){
	container.style.display="none";
	contxt.style.display='unset';
}
function appear(){
	container.style.display="unset";
	contxt.style.display='none';	}
function copy(state){
  var range = document.createRange();
  range.selectNode(emails);
  if(state)
  	range.selectNode(phn);
  window.getSelection().addRange(range);

  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
   window.alert('Copied');
  } catch(err) {
    console.log('Oops, unable to copy');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
}
document.title = "GeoCities!";
const body = document.querySelector("body");
const image = document.createElement("iframe");
image.setAttribute("id", "gif");
image.src = "https://giphy.com/embed/3rgXBumyEL9086dy48";
image.style = "width:200px;height:150px;frameBorder:0";
body.prepend(image);
const image2 = document.createElement("iframe");
image2.setAttribute("id", "gif");
image2.src = "https://giphy.com/embed/RxR1KghIie2iI";
image2.style = "width:200px;height:150px;frameBorder:0";
body.prepend(image2);

//search aol
const toSearch = body.addEventListener("mouseup", () => {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  window.open(
    `https://search.aol.com/aol/search;_ylt=AwrEmRrlf.5jK5wONRRoCWVH;_ylc=X1MDMTE5NzgwMzg4MARfcgMyBGZyAwRmcjIDc2ItdG9wLXNlYXJjaARncHJpZANoSzI4a2c1QVRsdXN3YXQ1Zl9yZlBBBG5fcnNsdAMwBG5fc3VnZwMxMARvcmlnaW4Dc2VhcmNoLmFvbC5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMwBHFzdHJsAzIEcXVlcnkDaGkEdF9zdG1wAzE2NzY1NzQ3MjE-?q=${text}&v_t=na&s_it=sb-home&iscqry=&fr=&fr2=sb-top-search`,
    "_blank"
  );
});

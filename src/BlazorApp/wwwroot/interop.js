// interop.js

let filePath = "/dotnet-portolio-test/src/BlazorApp/wwwroot/my_resume.pdf";
let fileName = "my_resume.pdf";

window.downloadFile = function (filePath, fileName) {
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
 
    const formData = {
     name: name,
     email: email,
     city: city,
     zipCode: zipCode,
     status: status
   };
     return formData;
 }
 
 function isNumber(input) {
     return !isNaN(Number(input));
 }
 
 
 function checkboxIsChecked() {
 const statusCheckbox = document.getElementById("status");
   return statusCheckbox.checked;
 }
 
 function validateFormData(formData) {
   return formData !== null && isNumber(formData.zipCode) && checkboxIsChecked();
 }
 
 function submit() {
 
         const validate = validateFormData(handleGetFormData());
         if (!validate) {
           document.getElementById("warning").textContent =
             "Periksa form anda sekali lagi";
         }
           else{document.getElementById("warning").textContent = "";
       }
       }
       document
         .getElementsByTagName("form")[0]
         .addEventListener("submit", function(event){
         event.preventDefault();
         submit();
         });
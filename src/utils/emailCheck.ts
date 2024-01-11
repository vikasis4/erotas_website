export default function validateEmail(value:string) {
    var input = document.createElement('input');
  
    input.type = 'email';
    input.required = true;
    input.value = value;
  
    return typeof input.checkValidity === 'function' ? input.checkValidity() : /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value);
  }
  
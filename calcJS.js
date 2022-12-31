var button = document.getElementsByClassName("button");
var screen = document.getElementById("screen");
var op1 = 0;
var op2 = null;
var operator = null;

// alert("working")
for(var i=0; i<button.length;i++){
    button[i].addEventListener('click', function(){
        var value = this.textContent;
        if(value == "+"){
            op1 = parseFloat(screen.textContent);
            screen.innerText = "";
            operator = "+";
        }

        else if(value == '-'){
            op1 = parseFloat(screen.textContent);
            screen.innerText = "";
            operator = "-";
        }

        else if(value == '/'){
            op1 = parseFloat(screen.textContent);
            screen.innerText = "";
            operator = "/";
        }

        else if(value == '*'){
            op1 = parseFloat(screen.textContent);
            screen.innerText = "";
            operator = "*";
        }

        else if(value == "%"){
            op1 = parseFloat(screen.textContent);
            var percent = op1/100;
            screen.innerText = percent;
        }

        else if(value == "="){
            if(operator == "+"){
                op2 = parseFloat(screen.textContent);
                screen.innerText = eval("op1+op2");
            }

            else if(operator == "-"){
                op2 = parseFloat(screen.textContent);
                screen.innerText = eval("op1-op2");
            }

            else if(operator == "/"){
                op2 = parseFloat(screen.textContent);
                if(eval("op1/op2") == "Infinity"){
                    screen.innerText = "Error";
                }else{
                    screen.innerText = eval("op1/op2");
                }
            }
            
            else if(operator == "*"){
                op2 = parseFloat(screen.textContent);
                screen.innerText = eval("op1*op2");
            }
        }

        else if(value == "AC"){
            screen.innerText = "";
        }
        else{
            screen.innerText += value;
        }
    })

}
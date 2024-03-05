
document.write("Incresing Triangle: <br>")

for(var i =1; i<=5; i++){
    for(var j=1; j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}


document.write("Decresing Triangle: <br>")

for(var i = 5; i >= 1; i--){
    for(var j = 1; j <= i; j++){
        document.write("*")
    }
    document.write("<br>")
}

document.write("Hill Pattern: <br>")


for(var i=1; i<=5;i++){
    for(var j=1; j<=5-i; j++){
        document.write("&nbsp;&nbsp;");
    }

    for(var k=1; k<=((2*i)-1); k++){
        document.write("*")
    }

  
    document.write("<br>")
    
}

document.write("Reverse Hill Pattern: <br>")

for(var i=5; i>=1;i--){
    for(var j=1; j<=5-i; j++){
        document.write("&nbsp;&nbsp;");
    }

    for(var k=1; k<=((2*i)-1); k++){
        document.write("*")
    }

  
    document.write("<br>")
    
}

document.write("Diamond Pattern: <br>")


for(var i=1; i<=5;i++){
    for(var j=1; j<=5-i; j++){
        document.write("&nbsp;&nbsp;");
    }

    for(var k=1; k<=((2*i)-1); k++){
        document.write("*")
    }

  
    document.write("<br>")
    
}

for(var i=5; i>=1;i--){
    for(var j=1; j<=5-i; j++){
        document.write("&nbsp;&nbsp;");
    }

    for(var k=1; k<=((2*i)-1); k++){
        document.write("*")
    }

  
    document.write("<br>")
    
}

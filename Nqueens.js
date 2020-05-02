
var old_table = document.createElement("table");
for (var i = 1; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < 1; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    old_table.appendChild(tr);
}
document.body.appendChild(old_table);



function addtoev() {

  var set = document.getElementsByTagName("button");
  for (var s = 0; s < set.length; s++) {
    set[s].addEventListener("click", function() {

        document.body.classList.add("bodyafter");


        var loading_remove = document.querySelector("#loading");
        loading_remove.classList.remove("lds-grid");

        var messagedisplay = document.querySelector("#message");
        messagedisplay.style.color = "black";
        messagedisplay.style.backgroundColor = "none";
        messagedisplay.textContent = "Start placing Queens";

        var size = this.id;
        
        var check_solution_button = document.querySelector("#solution");
        if(check_solution_button){
            check_solution_button.parentNode.removeChild(check_solution_button);

             var solution_button = document.createElement("button");
             solution_button.id = "solution";
             solution_button.textContent = "Check Inputs";
             document.body.appendChild(solution_button);
        }
        else{
            var solution_button = document.createElement("button");
            solution_button.id = "solution";
            solution_button.textContent = "Check Inputs";
            document.body.appendChild(solution_button);
        }



        var new_table = document.createElement("table");
		for (var i = 1; i <= this.id; i++) {
    		var tr = document.createElement('tr');
    		for (var j = 1; j <= this.id; j++) {
        	var td = document.createElement('td');
        		if (i%2 == j%2) {
            	td.className = "white";
            	td.id = 10*i+j;
        		} else {
            	td.className = "black";
            	td.id = 10*i+j;
        	}
        tr.appendChild(td);
    }
    new_table.appendChild(tr);
}
    old_table.parentNode.replaceChild(new_table, old_table);
    old_table = new_table;


    var select = document.getElementsByTagName("td");
    for(var i = 0; i < select.length; i++)
    {
        select[i].addEventListener("click", function(){
            messagedisplay.textContent = "";
            if(this.classList.contains("black_queen")){
                this.classList.remove("black_queen");
            }
            else
            if(this.classList.contains("white_queen")){
                this.classList.remove("white_queen");
            }

            else
            if(this.classList.contains("white")){
                this.classList.add("white_queen");
            }
            else{
                this.classList.add("black_queen");
            }           
        });
    }
    
    solution_button.addEventListener("click", function(){
        
        var div;
        var left_diagonal = [2*size + 1];
        var right_diagonal = [2*size + 1];
        var coloumn = [2*size+1];
        var row = [2*size + 1];

        for(var i = 1; i <= 2*size + 1; i++)
        {
            left_diagonal[i] = 0;
            right_diagonal[i] = 0;
            coloumn[i] = 0;
            row[i] = 0;
        }

        var flag = 0;
        var count = 0;
        var goahead = 0;

         for(var i = 0; i < select.length; i++)
        {
            if(select[i].classList.contains("black_queen") || select[i].classList.contains("white_queen"))
                count++;
        }

        if(count == size)
            goahead = 1;
        else
        {
            goahead = 0;
            alert("Please place required number of queens");
        }
        if(goahead)
        {
        flag = 1;
        for(var i = 0; i < select.length; i++)
        {
            if(select[i].classList.contains("black_queen") || select[i].classList.contains("white_queen")){

                count++;
                var n = select[i].id;
                var cclass = select[i].class;

               // console.log(Math.floor(n/10));
                //console.log(n%10);
                if(coloumn[Math.floor(n/10)] == 1)
                {
                   // messagedisplay.style.backgroundColor = "black";
                    messagedisplay.style.fontFamily = "Lucida Console";
                    messagedisplay.style.fontStyle ="normal";
                    messagedisplay.style.weight = "heavy";
                    messagedisplay.style.color = "darkred";
                    messagedisplay.textContent = " Wrong ";
                    flag = 0;
                    
                    break;
                }
                else
                if(row[(n%10)] == 1)
                {
                   // messagedisplay.style.backgroundColor = "black";
                    messagedisplay.style.fontStyle ="normal";
                    messagedisplay.style.fontFamily = "Lucida Console";
                    messagedisplay.style.weight = "heavy";
                    messagedisplay.style.color = "darkred";
                    messagedisplay.textContent = " Wrong ";
                    flag = 0;
                    break;
                }
                else
                if(right_diagonal[(Math.floor(n/10)) + (n%10)] == 1)
                {
                    //messagedisplay.style.backgroundColor = "black";
                    select[i].style.color = "red";
                    messagedisplay.style.fontStyle ="normal";
                    messagedisplay.style.fontFamily = "Lucida Console";
                    messagedisplay.style.weight = "heavy";
                    messagedisplay.style.color = "darkred";
                    messagedisplay.textContent = " Wrong ";
                    flag = 0;
                    break;
                }
                else
                if(left_diagonal[(Math.floor(n/10)) - (n%10) + size - 1] == 1)
                {
                   // messagedisplay.style.backgroundColor = "black";
               
                    messagedisplay.style.fontFamily = "Lucida Console";
                    messagedisplay.style.fontStyle ="normal";
                    messagedisplay.style.weight = "heavy";
                    messagedisplay.style.color = "darkred";
                    messagedisplay.textContent = " Wrong ";
                    flag = 0;
                    break;
                }
                else
                {
                    coloumn[Math.floor(n/10)] = 1;
                    row[(n%10)] = 1;
                    left_diagonal[(Math.floor(n/10)) - (n%10) + size - 1] = 1;
                    right_diagonal[(Math.floor(n/10)) + (n%10)] = 1;
                }
            }
        }
        }

       // select[i].classList.add("cclass");
        if(flag)
        {
          //  messagedisplay.style.backgroundColor = "white";
            messagedisplay.style.fontStyle ="normal";
            messagedisplay.style.fontFamily = "Lucida Console";
            messagedisplay.style.weight = "heavy";
            messagedisplay.style.color = "green";
            messagedisplay.textContent = " Correct ";             
        }
    });


	});
  }  
}

 
window.addEventListener("load",function() {
  addtoev();
});




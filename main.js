function handleSubmission(event){
    event.preventDefault();
    const arr = saveFormData();
    const score = evaluateScore(arr);
    localStorage.score = score;
    
}

function saveFormData(){
    var form = $("#formElement");
    return form.serializeArray();
}

function evaluateScore(arr){
    var total = 0;
    for(var z = 0; z < arr.length; z++){
        const item = arr[z];
        if(item.value == "three"){
            total += 3;
        }
        else if(item.value == "two"){
            total += 2;
        }
        else if(item.value == "one"){
            total++;
        }
    }
    return total;
}

document.getElementById("formElement").addEventListener("submit", handleSubmission);

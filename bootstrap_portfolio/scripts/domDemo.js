console.log(document);

function testTheDOM() {
    console.log("inside testTheDOM");

    var nodes = document.getElementsByTagName('li');
    console.log(nodes);

    for (let node of nodes) {
        console.log(node);
        console.log(node.innerHTML);
        console.log(node.textContent);
    }

    var cbn = document.getElementById("checkingBalance");
    console.log(cbn);
    console.log(cbn.textContent);
   // cbn.textContent = "Changed!";
    var cbnValue=parseInt(cbn.textContent);
    cbnValue += 100;
    cbn.textContent=cbnValue;
}

function depositChecking(){
    var balance=document.getElementById("checkingBalance");
    newbalance = parseInt(balance.textContent,10);
    newbalance+=100;
    balance.textContent=newbalance;
}
function depositSavings() {
   var balance=document.getElementById("savingsBalance");
    newbalance = parseInt(balance.textContent,10);
    balance.textContent=newbalance;
     if(newbalance == 0) {
        var title = document.getElementById('bankAccountTitle');
        title.textContent="Bank Account";
    }
    newbalance+=100;
    balance.textContent=newbalance;
}

function emptySavings() {
    /*get value of html element with id savings*/
    var td = document.getElementById("savingsBalance");
    td.textContent = 0;
    var title = document.getElementById('bankAccountTitle');
    /*change value of title */
    title.textContent="ALERT: Savings Empty";
}
const allBtn = document.getElementsByClassName('btn');
let count = 0
let seats = 8

for (const btn of allBtn){
    btn.addEventListener('click', function(e){
        count = count + 1;

        setInnerText('selectedCount', count)
        seats = seats - 1;
        setInnerText('left', seats);

        const seatName = e.target.parentNode.childNodes[1].innerText;
        console.log(e.target.parentNode.childNodes[1].innerText);
        const price = 550;
        const selectedContainer = document.getElementById("container");

        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerText = seatName
        const p2 = document.createElement("p2");
        p2.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);

        selectedContainer.appendChild(li);

        totalCost('total-cost', parseInt(price));

        grandTotal('grand-total', parseInt(price));

    })
}

function next(){
    hideElementId('head');
    hideElementId('main');
    showElementById('confirm');
}


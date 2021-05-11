const dom ={
    tbody: document.querySelector('tbody')
}







async function myFetch() {
    let response = await fetch('Poeple.json');
    if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`); 
    } 
    else { 
          return await response.json();   
        } 
    } 
myFetch().then((json) => {  
    let Peoples = json;
  const t = Peoples.map((people)=>{
      const tr = document.createElement('tr');
      const tdF = document.createElement('td');
      tdF.innerHTML = people.firstName?? 'no information'
      tr.appendChild(tdF);
      const tdL = document.createElement('td');
      tdL.innerHTML = people.lastName?? 'no information'
      tr.appendChild(tdL);
      const tdA = document.createElement('td');
      tdA.innerHTML = people.age?? 'no information'
      tr.appendChild(tdA);
      const tdC = document.createElement('td');
      tdC.innerHTML = people.city ?? 'no information'
      tr.appendChild(tdC);
      const tdChild = document.createElement('td');
      tdChild.innerHTML = people.children ?? 'no information'
      tr.appendChild(tdChild);
      const tdW = document.createElement('td');
      tdW.innerHTML = people.work?? 'no information'
      tr.appendChild(tdW);
      return tr

  });

  dom.tbody.append(...t) ;
   
    
    
})
.catch((e) =>   console.log(e) )


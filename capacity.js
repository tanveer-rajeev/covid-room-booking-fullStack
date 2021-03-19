

        const getCapacity = ()=> {
            const givenDate = document.getElementById("searchDate").value;
            const capacityAPI = `http://localhost:8080/booking/getCapacity/${givenDate}`
           
                        
            axios.get(capacityAPI,{
                headers: headers
            })
            .then(response=>{
                 capacityNotification(response,givenDate);
            })
            .catch(err=>alert("Invalid given date"))
        }

        const capacityNotification = (response,givenDate)=> {

            const message = `<p id="capacityMessage">The capacity of free working places on ${givenDate} is ${response.data}%</p>`;
            const capacityDiv = document.getElementById("capacityNotification");
            capacityDiv.style.display = "block"
            capacityDiv.innerHTML = ""

            const capacityPercentage =  document.createElement('div');
            capacityPercentage.className = "notified";
            capacityPercentage.innerHTML = message;
            document.getElementById("capacityNotification").appendChild(capacityPercentage);

        }
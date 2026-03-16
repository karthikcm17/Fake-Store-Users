let usercontainer = document.getElementById("users");

fetch("https://fakestoreapi.com/users")
    .then(res => res.json())
    .then(data => {

        data.forEach(user => {
            usercontainer.innerHTML +=
                `<div class="col-md-4 col-lg-3 mb-4">
                <div class="card text-center shadow border-0">
                
                <div class="card-header bg-primary text-white">
                    USER ID CARD
                </div>

                <div class="card-body ">

                    <div class="circle"> 👲🏻 
                    </div>
                
                    <h5 class="card-title">
                        ${user.name.firstname} ${user.name.lastname}
                    </h5>

                    <p class="text-muted">@${user.username}</p>
                    <p class="mb-1">📧</b> ${user.email}</p>
                    <p class="mb-1">📞${user.phone}</p>
                    <p class="mb-1">📍${user.address.city}</p>

                </div>
            </div>
        </div>
        `;
        });
    });
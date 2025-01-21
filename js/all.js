
        // Show labs tabs when clicking on Labs menu item
        document.querySelector(".labs-tab").addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("labs-tabs").style.display = "block";
        });
    
        // Handle tab switching and navigation
        const labLinks = {
            lab1: "../lab1/lab1.html",
            lab2: "../lab2/lab2.html",
            lab3: "../lab3/lab3.html",
            lab4: "../lab4/lab4.html",
            lab5: "../lab5/lab5.html",
            lab6: "../lab6/lab6.html"
        };
    
        document.querySelectorAll(".tab-link").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const labId = this.dataset.tab;
                
                // Navigate to the corresponding lab page
                if (labLinks[labId]) {
                    window.location.href = labLinks[labId];
                }
            });
        });
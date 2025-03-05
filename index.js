    document.getElementById('toggleSwitch').addEventListener('change', function() {
        if (this.checked) {
            console.log("Switched to Home Affordability");
        } else {
            console.log("Switched to Debt Free Date");
        }
    });
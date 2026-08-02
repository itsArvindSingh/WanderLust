setTimeout(function() {
            const alert = document.getElementById('message-alert');
            if (alert) {
                alert.classList.remove('show');
                alert.classList.add('fade');
            }
        }, 5200);
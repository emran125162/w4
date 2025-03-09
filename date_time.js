<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Current Date and Time</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        #datetime {
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Current Date and Time</h1>
    <div id="datetime"></div>

    <script>
        
        function updateDateTime() {
            const now = new Date(); 
            const options = { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
            };
            const formattedDateTime = now.toLocaleString('en-US', options); 
            document.getElementById('datetime').textContent = formattedDateTime; 
        }

    
        setInterval(updateDateTime, 1000);

      
        updateDateTime();
    </script>
</body>
</html>
